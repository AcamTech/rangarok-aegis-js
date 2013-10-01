// Event handler for individual packet structures
// Format: void function(packet_structure)
// Handlers are called in the context of the game session

var PacketEventHandlers = [
	
	[["PACKET_SC_NOTIFY_BAN"], function( struct ) {
	
		this._fireEvent("OnServerReject");
	
	}],
	
	// Response for login auth request
	
	[["PACKET_AC_ACCEPT_LOGIN", "PACKET_AC_REFUSE_LOGIN"],
	
	function(struct) {
		
		if( struct.constructor == "PACKET_AC_REFUSE_LOGIN" ) {
			// Login was rejected
			this.network._state = NetworkState.LoginReqAuth;
			this.network._fireEvent("OnLogin", { code: NetworkManager.LoginDenied });
			
		} else if( struct.constructor == "PACKET_AC_ACCEPT_LOGIN" ) {
			// Login was accepted
			this.network._state = NetworkState.LoginConnected;
			
			this.AuthCode = struct.AuthCode;
			this.AID = struct.AID;
			this.userLevel = struct.userLevel;
			this.lastLoginIP = struct.lastLoginIP;
			this.lastLoginTime = struct.lastLoginTime;
			this.Sex = struct.Sex;
			if (this.Sex > 1)
			{
				this.Sex = 1;
			}
			
			this.serviceList = struct.ServerList;
			
			this.network._fireEvent("OnLogin", { code: NetworkManager.ServiceList });
			
		} else {
			console.warn('Error: undefined reponse for 0x' + struct.PacketType.toString(16) + ' in onLoginResponse');
		}
	}],	
	
	// Response for account server auth request
	
	[["PACKET_HC_ACCEPT_ENTER_NEO_UNION", "PACKET_HC_REFUSE_ENTER"],
	
	function( struct ) {
	
		if( struct.constructor == "PACKET_HC_ACCEPT_ENTER_NEO_UNION" ) {
			
			/* Account auth request OK */
			this.network._state = NetworkState.AccountConnected;
			
			this.TotalNumSlot = struct.TotalNumSlot;
			this.PremiumStartSlot = struct.PremiumStartSlot;
			this.PremiumEndSlot = struct.PremiumEndSlot;
			this.time1 = struct.time1;
			this.time2 = struct.time2;
			
			for( var i = 0; i < struct.charInfo.length; i++ ) {
				struct.charInfo[i].Sex = this.Sex;
			}
			
			this.charInfo = struct.charInfo;
			
			this.network._fireEvent("OnCharSelect", { code: NetworkManager.CharacterList });
			
		} else if( struct.PacketType == "PACKET_HC_REFUSE_ENTER" ) {
			// Account authorization refused
			this.network._fireEvent("OnCharSelect", { code: NetworkManager.ServerSelectDenied, reason: struct.ErrorCode });
		} else {
			console.error('Undefined reponse for 0x' + struct.PacketType.toString(16) + ' in onAccountServerReponse');
		}

	}],
	
	[["PACKET_HC_NOTIFY_ZONESVR"], 
	
	function( struct ) {
		
		this.SetPCGID(struct.GID);
		this.SetMap(charCodeArrayToString(struct.mapName));
		
		this.network.disconnect();
		this.network._state = NetworkState.ZoneConnect;
		this.network.connect( struct.addr.ip, struct.addr.port );
	}],
	
	[["PACKET_ZC_AID"], function( struct ) { 
		
		this.AID = struct.AID;
	}],
	
	[["PACKET_ZC_PAR_CHANGE"], function( struct ) {
		
		this.SetPCStatus(struct.varID, struct.count);
	}],
	
	[["PACKET_ZC_ACCEPT_ENTER", "PACKET_ZC_REFUSE_ENTER",  "PACKET_ZC_ACCEPT_ENTER2"],
		
	function( struct ) {
	
		console.log('Info: Zone connection');
		
		if( struct.constructor == "PACKET_ZC_REFUSE_ENTER" ) {
			
			// Zone account authorization was refused
			
			this.network._fireEvent("OnZoneLoadWait", { code: NetworkManager.MapEnterRefused });
			
		} else if(struct.constructor == "PACKET_ZC_ACCEPT_ENTER" || struct.constructor == "PACKET_ZC_ACCEPT_ENTER2") {
		
			// Zone auth OK
			
			this.network._state = NetworkState.ZoneWait;
		
			this.SetServerTime(struct.startTime);
			
			// Create the PC session actor object
			this.CreatePcActor();
			
			var posDir = NetworkManager.Util.getZoneCoord(struct.PosDir);
			
			this.SetPCStatus(GameVar.CURXPOS, posDir.x);
			this.SetPCStatus(GameVar.CURYPOS, posDir.y);
			this.SetPCStatus(GameVar.CURDIR, posDir.dir);
			
			this.SetPCStatus(GameVar.NPCXSIZE, struct.xSize);
			this.SetPCStatus(GameVar.NPCYSIZE, struct.ySize);
			
			if( struct.constructor == "PACKET_ZC_ACCEPT_ENTER2" ) {
				this.SetGlobalFont(struct.font);
			}
			
			this.network._fireEvent("OnZoneLoadWait", { code: NetworkManager.MapLoadWait });
			
		
		} else {
			console.warn("Packet handler error");
		}

	}],
	
	// Map move
	
	[["PACKET_ZC_NPCACK_MAPMOVE"], 
	
	function( struct ) {
	
		this.SetMap(charCodeArrayToString(struct.mapName));
		
		this.SetPCStatus(GameVar.CURXPOS, struct.xPos);
		this.SetPCStatus(GameVar.CURYPOS, struct.yPos);
		
	}],
	
	// Chat
	
	[["PACKET_ZC_NOTIFY_CHAT", "PACKET_ZC_NOTIFY_PLAYERCHAT"],
	
	function( struct ) {
		
		this._fireEvent("OnPlayerChat", charCodeArrayToString(struct.msg) );
	}],
	
	// Movement
	
	[["PACKET_ZC_NOTIFY_PLAYERMOVE"], function( struct ) {
		
		// Player character movement
		
		var moveData = NetworkManager.Util.getZoneMoveData(struct.MoveData);
		
		this.SetActorMovement(
			this.pc.actor,
			moveData.x0,
			moveData.y0,
			moveData.x1,
			moveData.y1,
			struct.moveStartTime
		);
		
		//this._fireEvent("OnPCMove", moveData );
		
	}],
	
	[["PACKET_ZC_NOTIFY_MOVE"], function( struct ) {
		
		// TODO: handle movement
		
		var moveData = NetworkManager.Util.getZoneMoveData(struct.MoveData);
		
		this.SetActorMovement(
			this.GetActor(struct.GID),
			moveData.x0,
			moveData.y0,
			moveData.x1,
			moveData.y1,
			struct.moveStartTime
		);
		
	}],
	
	// Actor entry
	
	[["PACKET_ZC_NOTIFY_STANDENTRY6", "PACKET_ZC_NOTIFY_NEWENTRY6", "PACKET_ZC_NOTIFY_MOVEENTRY8"], function( struct ) {
		
		// Note standentry6 has the additional state variable (sitting?), newentry6 does not
		
		if(struct.constructor == "PACKET_ZC_NOTIFY_MOVEENTRY8") {
			console.log("aaa");
		}
		
		this.SpawnActor(struct.GID, struct);
		
		//PosDir
		
	}],
	
	// Actor vanish
	
	[["PACKET_ZC_NOTIFY_VANISH"], function( struct ) {
	
		this.VanishActor(struct.GID);
	
	}],
	
	// Keepalive response
	
	[["PACKET_ZC_NOTIFY_TIME"], function( struct ) {
		
		this.SetServerTime(struct.time)
		
	}]
	
];
