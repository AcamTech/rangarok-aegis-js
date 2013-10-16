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
	
	[["PACKET_ZC_PAR_CHANGE", "PACKET_ZC_LONGPAR_CHANGE"], function( struct ) {
		
		var varID = struct.varID;
		var value;
		
		if(struct.count !== undefined) {	
			value = struct.count;
		} else {
			value = struct.amount;
		}
		
		this.SetPCStatus(varID, value);
	}],
	
	[["PACKET_ZC_COUPLESTATUS"], function( struct ) {
		
		this.SetPCStatus(struct.statusType, struct.defaultStatus);
		
		// TODO find enum ID for plus status
		//this.SetPCStatus(struct.statusType + (0x67 - 0xd), struct.plusStatus);
		
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
		
		var GID = struct.constructor == "PACKET_ZC_NOTIFY_CHAT"
			? struct.GID
			: this.AID;
		
		this._fireEvent("OnPlayerChat", {
			GID: GID,
			msg: charCodeArrayToString(struct.msg)
		});
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
		
		this.SpawnActor(struct.GID, struct);
		
		//PosDir
		
	}],
	
	// Actor vanish
	
	[["PACKET_ZC_NOTIFY_VANISH"], function( struct ) {
	
		if(struct.type == 1) {
			this.KillActor(struct.GID);
		} else {
			this.VanishActor(struct.GID);
		}
	
	
	}],
	
	[["PACKET_ZC_SPRITE_CHANGE2"], function(struct) {
	
		// 0 LOOK_BASE,
		// 1 LOOK_HAIR,
		// 2 LOOK_WEAPON,
		// 3 LOOK_HEAD_BOTTOM,
		// 4 LOOK_HEAD_TOP,
		// 5 LOOK_HEAD_MID,
		// 6 LOOK_HAIR_COLOR,
		// 7 LOOK_CLOTHES_COLOR,
		// 8 LOOK_SHIELD,
		// 9 LOOK_SHOES,
		// 10 LOOK_BODY,
		// 11 LOOK_FLOOR,
		// 12 LOOK_ROBE,
		
		// struct.GID
		
		if(struct.type == 2 || struct.type == 8) {
		
			if(struct.type < 0)
				console.warn("fix int32 to uint16[2]");
		
			var weaponId = struct.value & 0xffff;
			var shieldId = (struct.value >> 16) & 0xffff;
			
			
		} else {
			var viewId = struct.value;
		}
		
		// TODO
		
		//this._fireEvent("OnLookChange");
	
	}],
	
	[["PACKET_ZC_NOTIFY_ACT2"], function( struct ) {
	
		///     0 = damage [ damage: total damage, div: amount of hits, damage2: assassin dual-wield damage ]
		///     1 = pick up item
		///     2 = sit down
		///     3 = stand up
		///     4 = damage (endure)
		///     5 = (splash?)
		///     6 = (skill?)
		///     7 = (repeat damage?)
		///     8 = multi-hit damage
		///     9 = multi-hit damage (endure)
		///     10 = critical hit
		///     11 = lucky dodge
		///     12 = (touch skill?)
	
		if(struct.action == 0 || struct.action == 11 || struct.action == 10) {
			
			this.AttackActor(
				struct.GID, struct.targetGID, struct.attackMT, 
				struct.attackedMT, struct.count, struct.damage,
				struct.leftDamage, struct.startTime
			);
			
		} else {
			console.warn("Unimplemented action " + struct.action);
		}
	
	
	}],
	
	// Keepalive response
	
	[["PACKET_ZC_NOTIFY_TIME"], function( struct ) {
		
		this.SetServerTime(struct.time)
		
	}]
	
];
