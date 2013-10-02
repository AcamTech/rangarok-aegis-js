var NetworkManager = function() {
	
	EventHandler.call(this);
		
	this.structureBindTable = [];
	
	// Setup packetversion
	
	this.packetVersion = new PacketVersion(Settings.packetVersion || NetworkManager.PacketVersionDefault);
	
	// Interval update
	
	this.updateInterval = setInterval((function() {
		if( this.__running ) {
			this.update();
		}
	}).bind(this), 1000 );
	
};

// Network states
NetworkState = {
	DISCONNECTED: -1,
	LoginConnect: 1,
	LoginReqAuth: 2,
	LoginConnected: 3,
	AccountConnect: 4,
	AccountReqAuth: 5,
	AccountConnected: 6,
	ZoneConnect: 7,
	ZoneReqAuth: 8,
	ZoneWait: 9,
	ZoneConnected: 10
};

// Response codes (constants for GameManager)
NetworkManager.ConnectionEstablished = 0;
NetworkManager.UnableToConnect = 1;
NetworkManager.Login = 2;
NetworkManager.LoginDenied = 3;
NetworkManager.ServiceList = 4;
NetworkManager.ServerSelectDenied = 5;
NetworkManager.CharacterList = 6;
NetworkManager.MapLoadWait = 7;
NetworkManager.MapEnterRefused = 8;
NetworkManager.MapEnter = 9;

NetworkManager.PacketVersionDefault = 30;
NetworkManager.ClientType = 1;

// Max time before auto disconnect
NetworkManager.KeepAliveTime = 12000;

NetworkManager.prototype = Object.create(EventHandler.prototype);

NetworkManager.prototype.RegisterPacketHandler = function(structID, fn) {
	this.structureBindTable[structID] = fn;
};

NetworkManager.Util = {
	
	parseAddrFromInteger: function(i) {
		
		var subnets = [
			( i & 0x000000ff ),
			( i & 0x0000ff00 ) >> 8,
			( i & 0x00ff0000 ) >> 16,
			( i & 0xff000000 ) >> 24
		];
		
		addr = subnets.join(".");
		
		return addr;
	
	},
	// Obfuscate Zone server posdir structure
	setZoneCoord: function( x, y, dir ) {
		var tmp = new Uint8Array(3);		
		tmp[0] = x >> 2;
		tmp[1] = ( x << 6 ) | ( ( y >> 4 ) & 0x3f );
		tmp[2] = ( y << 4 ) | ( dir & 0xf );
		
		return tmp;
	},
	// Deobfuscate Zone server posdir structure
	getZoneCoord: function( arr ) {	
		return {
			x: ( arr[0] << 2 ) | ( arr[1] >> 6 ),
			y: ( ( arr[1] & 0x3f ) << 4 ) | ( arr[2] >> 4 ),
			dir: arr[2] & 0x0f
		};
	},
	// Deobfuscate Zone server movement structure
	getZoneMoveData: function( p ) {
		
		var x0 = (p[0] << 2) | (p[1] >> 6);
		var y0 = ((p[1] & 0x3f) << 4) | (p[2] >> 4);
		var x1 = ((p[2] & 0x0f) << 6) | (p[3] >> 2);
		var y1 = ((p[3] & 0x03) << 8) | (p[4]);
		var sx0 = p[5] >> 4;
		var sy0 = p[5] & 0x0f;
		
		return {
			x0: x0 /*+ sx0 * 0.0625 - 0.5*/, // 
			y0: y0 /*+ sy0 * 0.0625 - 0.5*/,
			x1: x1, 
			y1: y1
		};
		
	}
	
};

NetworkManager.prototype.init = function( addr, port ) {
	
	this.detachAllEventListeners();
		
	this._state = NetworkState.LoginConnect;
	
	this.connection = null;
	
	this.__buffer = null;
	
	this.lastReceivedTick = 0;
	this.lastSentTick = 0;
	this.initTimeStamp = Date.now();
	
	// Start server connection
	this.connect( addr, port );
	
	this.__running = true;
		
};

NetworkManager.prototype.getTick = function() {
	return Date.now() - this.initTimeStamp;
};

NetworkManager.prototype.update = function() {
	
	// Keep-alive
	if(this.connection == null) {
		return;
	}
	
	var now = this.getTick();
	
	if( ( now - this.lastSentTick ) >= NetworkManager.KeepAliveTime ) {
		
		if( /*this._state == NetworkState.LoginConnected
		||*/	this._state == NetworkState.AccountConnected ) {
			// Keep-alive packet for account servers
			// PACKET_PING
			
			//this.Request({
			//	PacketType: 0x187,
			//	AID: this.session.AID
			//});
			
		} else if( this._state == NetworkState.ZoneWait
		||	this._state == NetworkState.ZoneConnected ) {
			
			// Keep-alive for zone server
			
			this.Request("PACKET_CZ_REQUEST_TIME2", {
				clientTime: now
			});
		}
		
	}
	
};

// Make a new ArrayBuffer from two existing ones
NetworkManager.prototype.appendBuffer = function( buf_dst, buf_src ) {
	
	var buf_res = new ArrayBuffer( buf_src.byteLength + buf_dst.byteLength );
	var arr_res = new Uint8Array( buf_res );
	
	arr_res.set( new Uint8Array( buf_dst, 0 ), 0 );
	arr_res.set( new Uint8Array( buf_src, 0 ), buf_dst.byteLength );
	
	return buf_res;
	
};

// Append ArrayBuffer object to the network buffer
NetworkManager.prototype.appendToGlobalBuffer = function( buf ) {
	
	if( this.__buffer === null ) {
		this.__buffer = buf;
	} else {
		this.__buffer = this.appendBuffer( this.__buffer, buf );
	}
	
};

// Attempt to extract a buffer containing a single packet
// return either an ArrayBuffer with a complete packet, or null
NetworkManager.prototype.extractPacketBuffer = function() {
	
	if( this.__buffer === null || this.__buffer.byteLength < 2 ) {
		return null;
	}
	
	var packetId = (new Uint16Array( this.__buffer, 0, 1 ))[0];
	var packetLength = this.packetVersion.getPacketLength(packetId);
	
	//if(this._state == NetworkState.AccountReqAuth
	//	&& packetLength === undefined ) {
		// AID
	//	return;
	//}
	
	if( packetLength === undefined ) {
		console.error('NetworkManager: No known length for packet associated with ID 0x' + packetId.toString(16));
		console.error('NetworkManager: Purging the global buffer (lost ' + this.__buffer.byteLength + ' bytes)');
		this.__buffer = null;
		return null;
	}
	
	var packetBuffer = null;
	
	if( packetLength === -1 ) {
		if( this.__buffer.byteLength < 4 ) {
			return null;
		}
		packetLength = (new Uint16Array( this.__buffer, 2, 1 ))[0];
	}
	
	if( this.__buffer.byteLength < packetLength ) {
		return null;
	} else if( this.__buffer.byteLength === packetLength ) {
		packetBuffer = this.__buffer;
		this.__buffer = null;
	} else {
		packetBuffer = this.__buffer.slice( 0, packetLength );
		this.__buffer = this.__buffer.slice( packetLength );
	}
	
	return packetBuffer;
	
};

NetworkManager.prototype.socketOpen = function( event ) {
	
	this.lastReceivedTick = this.getTick();
	
	if( this._state == NetworkState.LoginConnect ) {

		this._state = NetworkState.LoginReqAuth;
		this._fireEvent("OnConnection", true);

	} else if( this._state == NetworkState.AccountConnect ) {
		
		this._state = NetworkState.AccountReqAuth;
		this._fireEvent("OnAccountConnection", true);
		
	} else if( this._state == NetworkState.ZoneConnect ) {
		
		this._fireEvent("OnZoneConnection", true);
		this._state = NetworkState.ZoneReqAuth;
				
	}
	
};

NetworkManager.prototype.socketError = function( event ) {
	this._fireEvent("OnConnectionError", true);
};

NetworkManager.prototype.socketMessage = function( data ) {
	
	this.lastReceivedTick = this.getTick();
		
	this.appendToGlobalBuffer( data );
	
	var packetBuffer;
	
	// extract packet buffer from global buffer, parse structure and 
	// call appropriate binding function
	while( ( packetBuffer = this.extractPacketBuffer() ) !== null ) {
		
		var packetId = (new Uint16Array( packetBuffer, 0, 1 ))[0];
		var struct;
		
		try {
			struct = this.packetVersion.parsePacketBufferToStruct(packetBuffer);
		} catch(e) {
			console.error("NetworkManager: Received a packet (packetType=0x" + packetId.toString(16) + ") which couldn't be parsed", new Uint8Array(packetBuffer));
			console.log('Object: ', struct );
			continue;
		}
		
		console.log("%cRECV 0x" + packetId.toString(16) + " " + struct.constructor, "color: #999999;");
		
		var bind = this.getPacketBind( struct.constructor );
		
		if( bind !== undefined && bind !== null ) {
			bind(struct);
		} else {
			console.warn('NetworkManager: Ignored packet 0x' + packetId.toString(16) );
			console.log('Object: ', struct );
		}
		
	};
	
};

NetworkManager.prototype.disconnect = function() {
	
	this.connection.close();
	this.connection = null;

};

NetworkManager.prototype.connect = function( addr, port ) {
	
	if( typeof addr == 'number' ) {
		// uint32 to string representation
		addr = NetworkManager.Util.parseAddrFromInteger(addr);
	}
	
	if( this.connection instanceof NetSocket ) {
		this.connection.close();
	}
	
	var socketType = Settings.socketType == NetSocket.Type.WEBSOCKET
		? NetSocket.Type.WEBSOCKET 
		: NetSocket.Type.TCP4;
	
	if(socketType === NetSocket.Type.WEBSOCKET) {
		
		if(Settings.webSocketRemoteHost !== undefined)
			addr = Settings.webSocketRemoteHost;
		
		if(Settings.webSocketPortOffset !== undefined)
			port += Settings.webSocketPortOffset;
	}
	
	this.connection = new NetSocket(addr, port, socketType);
	
	this.connection.attachEventListener( "OnOpen", this.socketOpen.bind( this ) );
	this.connection.attachEventListener( "OnError", this.socketError.bind( this ) );
	this.connection.attachEventListener( "OnMessage", this.socketMessage.bind( this ) );
	
};

NetworkManager.prototype.Request = function( fn, struct ) {
		
	var buf = this.packetVersion.getPacketBufferByNamedEntry(fn, struct);
	
	console.log("%cSEND " + fn, "color: #999999;");
			
	this.connection.write( buf );
	
	this.lastSentTick = this.getTick();
	
};

NetworkManager.prototype.getPacketBind = function( structureId ) {
	return this.structureBindTable[ structureId ];
};

NetworkManager.prototype.connectAccountService = function(addr, port) {
	
	this.disconnect();
	
	this._state = NetworkState.AccountConnect;
	
	this.connect(addr, port);
	
};


NetworkManager.prototype.adviceLoadMapComplete = function() {
	
	this._state = NetworkState.ZoneConnected;
	
};

