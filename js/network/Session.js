var ROSession = function() {
	
	EventHandler.call(this);
		
	this.initTimeStamp = (new Date).getTime();
	
	this.serverTime = 0;
	this.localTime = 0;
	this.AuthCode = -1; // Account
	this.AID = -1;
	this.userLevel = 0;
	this.lastLoginIP = -1;
	this.lastLoginTime = null;
	this.Sex = 0;
	this.serviceList = []; // Account server list
	this.TotalNumSlot = 3; // Account server slot info
	this.PremiumStartSlot = 3;
	this.PremiumEndSlot = 3;
	this.time1 = 0;
	this.time2 = 0;
	this.charInfo = []; // Account server char info table
	this.actors = new Map(); // Session actor map
	this.mapName = null; // Active map name
	
	this.pc = {
		GID: -1,
		status: [],
		equipment: [],
		item: [],
		actor: null,
	};
		
	this.font = null; // TODO: Use global font option
	
};

ROSession.prototype = Object.create(EventHandler.prototype);

ROSession.prototype.SetServerTime = function(time) {
	this.serverTime = time;
	this.localTime = Date.now();
};

ROSession.prototype.Init = function() {};

ROSession.prototype.SetMap = function(mapName) {
	
	if(typeof mapName != "string")
		throw "ROSession: Invalid map name";
	
	//if(this.mapName == mapName) {
	//	console.log("Map is the same");
	//}
	
	this.mapName = mapName;
	this._fireEvent("OnMapChange", mapName);
};

ROSession.prototype.GetMapName = function() {
	return this.mapName;
};

ROSession.prototype.toLocalTime = function(remoteTime) {
	return remoteTime;
};

ROSession.prototype.SetPCGID = function(GID) {
	this.pc.GID = GID; 
	this._fireEvent("OnGIDChange", GID);
};

ROSession.prototype.SetActorPosition = function(actor, x, y) {
	
	actor.x = x;
	actor.y = y;
	
	actor.x1 = x;
	actor.y1 = y;
	
	this._fireEvent("OnActorPositionChange", actor);
};

ROSession.prototype.SetActorMovement = function(actor, x0, y0, x1, y1, startTime) {
	
	if(!(actor instanceof ROSessionActor)) {
		console.warn("ROSession: Tried to move invalid actor");
		return;
	}
	
	actor.x = x0;
	actor.y = y0;
	actor.x1 = x1;
	actor.y1 = y1;
	actor.moveStartTime = this.toLocalTime(startTime);
	
	this._fireEvent("OnActorMovement", actor);
	
};

ROSession.prototype.SetPCStatus = function(varID, status) {
	
	this.pc.status[varID] = status; 
	
	if(Settings.DEBUG) {
		//for(var i in GameVar) {
		//	if(GameVar[i] == varID) {
		//		console.log(i + " is now " + status);
		//	}
		//}	
	}
	
	if(varID == GameVar.SPEED) {
	
		this.pc.actor.speed = status;
	
	} else if(varID == GameVar.CURXPOS) {
	
		this.SetActorPosition(this.pc.actor, status, this.pc.actor.y);
	
	} else if(varID == GameVar.CURYPOS) {
	
		this.SetActorPosition(this.pc.actor, this.pc.actor.x, status);
	}
	
	this._fireEvent("OnPCStatusChange", varID);
};

ROSession.prototype.GetPCStatus = function(varID) {
	return this.pc.status[varID]; 
};

ROSession.prototype.VanishActor = function(GID) {

	if(!this.actors.has(GID)) {
		console.warn("ROSession: Vanishing actor (GID: " + GID + ") doesn't exist!");
		return;
	}

	// Delete actor data?

	var actor = this.actors.get(GID);

	this._fireEvent("OnActorVanish", actor);
};

ROSession.prototype.GetActor = function(GID) {
	return this.actors.get(GID);
};

ROSession.prototype.KillActor = function(GID) {

	if(!this.actors.has(GID)) {
		console.warn("ROSession: Dying actor (GID: " + GID + ") doesn't exist!");
		return;
	}

	var actor = this.actors.get(GID);

	this._fireEvent("OnActorDie", actor);

};

ROSession.prototype.SpawnActor = function(GID, charInfo) {
	
	var actor;
	
	if(!this.actors.has(GID)) {
		actor = new ROSessionActor(charInfo);
		this.actors.set(GID, actor);
	} else {
		actor = this.actors.get(GID);
		actor.UpdateCharInfo(charInfo);
	}
	
	this._fireEvent("OnActorAppear", actor);
	
	if(charInfo.PosDir) {
		
		var posDir = NetworkManager.Util.getZoneCoord(charInfo.PosDir);
		
		this.SetActorPosition(
			actor,
			posDir.x,
			posDir.y
		);
		
	} else if(charInfo.MoveData) {
		
		var moveData = NetworkManager.Util.getZoneMoveData(charInfo.MoveData);
		
		this.SetActorMovement(
			actor,
			moveData.x0,
			moveData.y0,
			moveData.x1,
			moveData.y1,
			charInfo.moveStartTime
		);
		
	}
	
};

var ROSessionAttackDataObject = function(sourceGID, targetGID, attackMT, attackedMT, count, damage, damage2, startTime) {
	this.GID = sourceGID;
	this.targetGID = targetGID;
	this.attackMT = attackMT;
	this.attackedMT = attackedMT;
	this.count = count;
	this.damage = damage;
	this.damage2 = damage2;
	this.startTime = startTime;
};

ROSession.prototype.AttackActor = function(sourceGID, targetGID, attackMT, attackedMT, count, damage, damage2, startTime) {
	
	var attackData = new ROSessionAttackDataObject(
		sourceGID, targetGID, 
		attackMT, attackedMT,
		count, damage, damage2, 
		this.toLocalTime(startTime)
	);

	this._fireEvent("OnActorAttacked", attackData);

};

ROSession.prototype.CreatePcActor = function() {
	
	
	var charInfo = Object.create(
		this.charInfo[this.selectedChar]
	);
		
	charInfo.objecttype = 0;
	charInfo.sex = this.Sex;
	//charInfo.GID = this.pc.GID;
	charInfo.GID = this.AID;
	
	//this.SpawnActor(this.pc.GID, charInfo);
	this.SpawnActor(this.AID, charInfo);
	
	this.pc.actor = this.GetActor(this.AID);
		
};

ROSession.prototype.SetGlobalFont = function(font) { 
	this.font = font; 
};

ROSession.prototype.GetServiceList = function() {

	var services = [];

	for(var i = 0; i < this.serviceList.length; i++) {
	
		var sinfo = this.serviceList[i];
		
		services.push({
			id: i,
			name: charCodeArrayToString(sinfo.name) + ' (' + String(sinfo.usercount) + ')'
		});
	}

	return services;
};

ROSession.prototype.GetAccountCharInfo = function() {
	
	return this.charInfo;
	
};

var RONetworkSession = function() {
	
	ROSession.call(this);

	this.network = new NetworkManager();
	
	// Setup handlers for incoming packets
	
	for(var i in PacketEventHandlers) {
		
		var structIds = PacketEventHandlers[i][0];
		var handler = PacketEventHandlers[i][1].bind(this);
		
		for(var i = 0; i < structIds.length; i++ ) {
			this.network.RegisterPacketHandler(structIds[i], handler);
		}
	
	}
	
};

RONetworkSession.prototype = Object.create(ROSession.prototype);

RONetworkSession.prototype.Init = function() {
		
	this.network.init(Settings.loginHost, Settings.loginPort);
	
	this.network.attachEventListener("OnConnection", (function() {
		
		this._fireEvent("OnSessionReady");
		
	}).bind(this));
	
	this.network.attachEventListener("OnConnectionError", (function() {
		
		this._fireEvent("OnSessionError");
		
	}).bind(this));
	
	
	this.network.attachEventListener("OnAccountConnection", (function() {
		
		this.network.Request("PACKET_CH_ENTER", {
			AID: this.AID,
			AuthCode: this.AuthCode,
			userLevel: this.userLevel,
			clientType: NetworkManager.ClientType,
			Sex: this.Sex
		});
		
	}).bind(this));
	
	this.network.attachEventListener("OnLogin", (function(response) {
		
		var success = response.code == NetworkManager.ServiceList;
		
		this._fireEvent("OnAuthenticationResponse", success);
		
	}).bind(this));
	
	this.network.attachEventListener("OnCharSelect", (function(response) {
		
		var success = response.code == NetworkManager.CharacterList;
		
		this._fireEvent("OnAccountCharSelect", success);
		
	}).bind(this));
	
	this.network.attachEventListener("OnZoneConnection", (function(response) {
		
		var success = response.code == NetworkManager.MapLoadWait;
				
		this.network.Request("PACKET_CZ_ENTER2", {
			AID: this.AID,
			GID: this.pc.GID,
			AuthCode: this.AuthCode,
			clientTime: this.network.getTick(),
			Sex: this.Sex
		});
		
	}).bind(this));
	
	this.network.attachEventListener("OnZoneLoadWait", (function(response) {
		
		var success = response.code == NetworkManager.MapLoadWait;
		
		this._fireEvent("OnMapChangeRequestResponse", success);
		
	}).bind(this));
		
};

RONetworkSession.prototype.Reset = function() {
	
	this.network.disconnect();
	
};

RONetworkSession.prototype.toLocalTime = function(serverTimestamp) {
	return this.localTime + serverTimestamp - this.serverTime;
};

RONetworkSession.prototype.ReportSceneReady = function() {
	
	this.network.adviceLoadMapComplete();
	
	this.network.Request("PACKET_CZ_NOTIFY_ACTORINIT", {
	});
	
}

RONetworkSession.prototype.Authenticate = function(username, password) {
	
	if(Settings.encryptLogin) {
		this.network.Request("PACKET_CA_LOGIN4", {
			Version: this.network.packetVersion.version,
			ID: username.toUint8Array(24),
			Passwd: password.toUint8Array(24),
			PasswdMD5: new Uint8Array( md5(password).match(/.{2}/g).map(function(a) { return parseInt(a, 16); }) ),
			macData: new Uint8Array(13),
			clienttype: NetworkManager.ClientType,
		});
	} else {
		this.network.Request("PACKET_CA_LOGIN", {
			Version: this.network.packetVersion.version,
			ID: username.toUint8Array(24),
			Passwd: password.toUint8Array(24),
			clienttype: NetworkManager.ClientType,
		});
	}
	
};

RONetworkSession.prototype.SelectService = function(serviceID) {
	
	var service = this.serviceList[serviceID];
	
	if(service === undefined) {
		console.warn("RONetworkSession: Invalid service requested");
		return false;
	}
		
	this.network.connectAccountService(service.ip, service.port);
	
	return true;
	
};

RONetworkSession.prototype.SelectCharacter = function(charID) {
	
	if(this.charInfo[charID] === undefined) {
		console.warn("RONetworkSession: Invalid character selected");
		return false;
	}
	
	this.selectedChar = charID;
	
	this.network.Request("PACKET_CH_SELECT_CHAR", {
		CharNum: charID
	});
	
	return true;
	
};

//RONetworkSession.prototype.PlayerAttackTarget = function(targetGID) {

//};

RONetworkSession.prototype.MovePlayer = function(gatX, gatY) {
	
	// TODO: Direction
	
	this.network.Request("PACKET_CZ_REQUEST_MOVE2", {
		dest: NetworkManager.Util.setZoneCoord(gatX, gatY, 0)
	});
	
	return true;
	
};

RONetworkSession.prototype.PlayerChat = function( message ) {
	
	// Message must always be predfixed by char name, followed by a 
	// space, then a colon, then one more space.
	
	// The final string must also be delimited by null
	
	var s_msg = this.pc.actor.name + " : " + message;
	var len = s_msg.length + 1;
	
	this.network.Request("PACKET_CZ_REQUEST_CHAT", {
		msg: s_msg.toUint8Array( len )
	});
	
	return true;
	
};