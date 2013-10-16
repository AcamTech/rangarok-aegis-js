var Ragnarok = function( document ) {
	
	if(!(this instanceof Ragnarok)) {
		return new Ragnarok;
	}

	EventHandler.call( this );
	
	this.graphics = {
		scene: new SceneManager(),
		gui: new InterfaceManager( document )
	};
	
	this.input = new InputEventHandler( document );
	this.session = new RONetworkSession();
	
	this.session.attachEventListener("OnServerReject", function() {
	
		console.warn("We were rejected from the server. Resetting.");
	
		this.reset();
		this.displayLogin();
	
	});
	
	// Purge old files every three minutes (minimum age 6 minutes)
	//MemoryHelper.setPurgeInterval(360, 180 * 1000);
	
	window.ragnarok = this;
	
};

Ragnarok.prototype = Object.create(EventHandler.prototype);

Ragnarok.prototype.init = function() {

	this.graphics.gui.init();
	this.graphics.scene.Init();
	this.ready();

};

Ragnarok.prototype.ready = function() {
	
	// Client is ready to start
	
	this.attachGuiInput();
	
	this.displayLogin();
	
	if(Settings.music)
		SoundPlayer.playBgm("01");
	
};

Ragnarok.prototype.reset = function() {
	
	this.session.Reset();
	this.init();
	
};

Ragnarok.prototype.attachGuiInput = function() {
	this.input.attachEventListener("mousemove", this.graphics.gui.mouseMoveEvent );
	this.input.attachEventListener("mouseup", this.graphics.gui.mouseUpEvent );
	this.input.attachEventListener("mousedown", this.graphics.gui.mouseDownEvent );
};

Ragnarok.prototype.detachGuiInput = function() {
	this.input.detachEventListener("mousemove", this.graphics.gui.mouseMoveEvent );
	this.input.detachEventListener("mouseup", this.graphics.gui.mouseUpEvent );
	this.input.detachEventListener("mousedown", this.graphics.gui.mouseDownEvent );
};

Ragnarok.prototype.attachSceneInput = function() {
	this.input.attachEventListener("mousemove", this.graphics.scene.loader.mouseMoveEvent );
	this.input.attachEventListener("mouseup", this.graphics.scene.loader.mouseUpEvent );
	this.input.attachEventListener("mousedown", this.graphics.scene.loader.mouseDownEvent );
};

Ragnarok.prototype.detachSceneInput = function() {
	this.input.detachEventListener("mousemove", this.graphics.scene.loader.mouseMoveEvent );
	this.input.detachEventListener("mouseup", this.graphics.scene.loader.mouseUpEvent );
	this.input.detachEventListener("mousedown", this.graphics.scene.loader.mouseDownEvent );
};

Ragnarok.prototype.displayLogin = function() {
	
	var window = this.graphics.gui.create( Interface.LoginWindow );
	
	window.onEvent = (function( event ) {
				
		if( event.action == Interface.Button.Login ) {
			
			// TODO: validate input here
			
			this.graphics.gui.remove( event.window );
			this.userRequestLogin(event.username, event.password);
			
		} else if( event.action == Interface.Button.Exit ) {
			// TODO: Exit native application
		}
		
	}).bind(this);
	
	window.userTextField.data = 'dev001';
	window.passwordTextField.data = 'development';
	
	this.graphics.gui.add(window, InterfaceAlignment.Center, InterfaceAlignment.Center);
	
};

Ragnarok.prototype.userRequestLogin = function(username, password) {

	// Connect to host
	this.session.Init();
	
	this.session.attachEventListener("OnSessionError", function() {
		console.error("Game session error!"); 
	});
	
	this.session.attachEventListener("OnSessionReady", (function() {
		this.session.Authenticate(username, password);
	}).bind(this));
	
	this.session.attachEventListener("OnAuthenticationResponse", (function(success) {
		
		if(success) {
			this.displayServiceSelect();
		} else {
			console.error('Error: Login was rejected');
		}
	
	}).bind(this));

	
};

Ragnarok.prototype.displayServiceSelect = function() {

	var window = this.graphics.gui.create( Interface.ServiceWindow );
	
	var services = this.session.GetServiceList();
	
	for( var i = 0; i < services.length; i++ )
		window.addService( services[i].name, services[i].id );
	
	window.onEvent = (function( event ) {
		
		if( event.action == Interface.Button.Select ) {
			
			this.graphics.gui.remove( event.window );
			this.onStateServiceSelected( event.serverId );
			
		} else if( event.action == Interface.Button.Cancel ) {
			
			// Service select has been canceled
			
			this.graphics.gui.remove( event.window );
			this.reset();
			
		}
		
	}).bind(this);
	
	this.graphics.gui.add(window, InterfaceAlignment.Center, InterfaceAlignment.Center);

};

Ragnarok.prototype.playerRequestMove = function(gatPosition) {
	
	this.session.MovePlayer(gatPosition.x, gatPosition.y);
	
};

Ragnarok.prototype.createMainInterface = function() {

	// Setup chat window and listen for player chat

	this.chatWindow = this.graphics.gui.create( Interface.ChatWindow );
	
	this.chatWindow.onEvent = (function(msg) {
		if(msg && typeof msg == "string" && msg.length > 0) {
			this.chatWindow.pushHistory( msg );
			this.session.PlayerChat(msg);
		}
	}).bind(this);
	
	this.session.attachEventListener("OnPlayerChat", (function(data) {
		
		this.chatWindow.writeLine(data.msg);
		
		// Note: will receive player's AID for system messages
		// Probably better to not display messages by 
		// PACKET_ZC_NOTIFY_PLAYERCHAT and instead display message before
		// sending chat packet.
		
		// Try to map into (name) : (message)
		var m = data.msg.match(/(.*) : (.*)/);
		
		if(m != null) {
			var str = m[1] + ": " + m[2];
			this.graphics.scene.SetActorChat(data.GID, str);		
		}
		
		
	}).bind(this));
	
	this.minimap = new Minimap(128, 128);
	
};

Ragnarok.prototype.hideMainInterface = function() {

	// TODO

};

Ragnarok.prototype.displayMainInterface = function() {
	
	// Add chat window
	
	this.graphics.gui.add(
		this.chatWindow, 
		InterfaceAlignment.Left, 
		InterfaceAlignment.Bottom
	);
	
	// Minimap
	
	
	this.minimap.setMap( this.graphics.scene.getCurrentMapName() );
	
	this.graphics.gui.add(this.minimap, InterfaceAlignment.Right, InterfaceAlignment.Top, -10, 10);
	
	
	// TODO (can't keep reference to actor entity)
	
	//var actor = this.graphics.scene.entityMap.get(this.session.AID);
	
	//actor.attachEventListener("OnGatPositionChange", (function( position ) {
		
	//	this.minimap.setPosition(
	//		position.x, 
	//		position.y, 
			// move these to constructor...
	//		this.graphics.scene.loader.gatFileObject.width, 
	//		this.graphics.scene.loader.gatFileObject.height, 
	//		actor.standingDirection
	//	);
	
	//}).bind(this));

};

Ragnarok.prototype.setupSessionHandlers = function() {

	this.session.attachEventListener("OnActorAppear", (function(session_actor) {
		
		//console.warn("Actor appeared");
		
		this.graphics.scene.AddEntity(
			session_actor.GID,
			session_actor
		);
		
	}).bind(this));
	
	this.session.attachEventListener("OnActorDie", (function(session_actor) {
		
		//console.warn("Actor died");
		
		this.graphics.scene.KillEntity(
			session_actor.GID
		);
		
	}).bind(this));
	
	this.session.attachEventListener("OnActorVanish", (function(session_actor) {
		
		//console.warn("Actor vanished");
		
		this.graphics.scene.RemoveEntity(
			session_actor.GID
		);
		
	}).bind(this));
	
	this.session.attachEventListener("OnActorPositionChange", (function(session_actor) {
		
		//console.warn("Actor changed position");
		
		this.graphics.scene.SetEntityPosition(
			session_actor.GID,
			session_actor.x,
			session_actor.y
		);
		
	}).bind(this));
	
	this.session.attachEventListener("OnActorAttacked", (function(attackData) {
		
		
		console.warn("Actor " + attackData.GID + " attacks " + attackData.targetGID, attackData);
		
		this.graphics.scene.ActorAttack(
			attackData.GID,
			attackData.targetGID,
			attackData.attackMT,
			attackData.attackedMT
		);
		
	}).bind(this));

	
	this.session.attachEventListener("OnActorMovement", (function(session_actor) {
		
		
		//console.warn("Actor moved", session_actor.x,
		//	session_actor.y,
		//	session_actor.x1,
		//	session_actor.y1);
		
		this.graphics.scene.MoveEntityPosition(
			session_actor.GID,
			session_actor.x,
			session_actor.y,
			session_actor.x1,
			session_actor.y1,
			session_actor.moveStartTime
		);
		
	}).bind(this));

	this.session.attachEventListener("OnMapChange", (function(mapName) {
	
		this.onStateChangeMap();
	
	}).bind(this));

};

Ragnarok.prototype.setupSceneHandlers = function() {

	this.graphics.scene.attachEventListener("OnMoveRequest", 
		this.playerRequestMove.bind(this));

	this.graphics.scene.attachEventListener("OnSceneLoadDone", 
		this.loadSceneAfter.bind(this));
	
};

Ragnarok.prototype.removeSceneHandlers = function() {

	this.graphics.scene.detachAllEventListeners();

};

Ragnarok.prototype.removeSessionHandlers = function() {

	this.session.detachAllEventListeners();

};

Ragnarok.prototype.addPlayerCharacterToScene = function() {
	
	this.graphics.scene.AddEntity(
		this.session.AID,
		this.session.pc.actor
	);
	
};

Ragnarok.prototype.loadSceneAfter = function() {
	
	this.graphics.scene.bindActorToCamera(this.session.AID);
	
	// Update entity positions 
	// Needs to be done as entities can't currently be positioned while 
	// the map is still loading
	
	var entities = this.graphics.scene.entityList;
	
	for(var i = 0; i < entities.length; i++) {
		
		// TODO: Issue if actor is walking?
		
		var GID = entities[i];
		var charInfo = this.session.GetActor(GID);
		
		this.graphics.scene.SetEntityPosition(
			GID,
			charInfo.x,
			charInfo.y
		);
		
	}
		
	// Display interface

	this.graphics.gui.clearBackground();
	
	this.displayMainInterface();

	// Music
	
	var rswName = this.graphics.scene.getCurrentMapName();
	
	if(Settings.music && rswName in mp3NameTable) {
		SoundPlayer.playBgm(mp3NameTable[rswName]);
	}
	
	// Dereference objects
	
	MemoryHelper.dereferenceProcessedObjects();
	MemoryHelper.dereferenceCachedObjects();
			
	// Start rendering
	this.graphics.scene.Start();
	
	this.attachSceneInput();
	
	// Report to session that we're ready to start playing
	this.session.ReportSceneReady();

};

Ragnarok.prototype.onLeaveMap = function() {

	console.log("Info: Leaving map");
	
	SoundPlayer.stopBgm();
	
	this.graphics.gui.removeAll();
	
	this.detachSceneInput();
	
	this.removeSceneHandlers();
	this.removeSessionHandlers();
	
	this.graphics.scene.Stop();
	this.graphics.scene.Unload();

};

Ragnarok.prototype.onStateChangeMap = function() {
	
	var sceneMap = this.graphics.scene.getCurrentMapName().split(".")[0];
	var sessionMap = this.session.GetMapName().split(".")[0];
	
	if(sceneMap == sessionMap) {
		
		// Map is the same, just remove current entities and continue
		
		this.graphics.scene.UnloadAllEntities();
		this.addPlayerCharacterToScene();
		this.graphics.scene.bindActorToCamera(this.session.AID);
		
		if(this.graphics.scene.Ready()) {
			this.session.ReportSceneReady();
		}
		
	} else {
		
		this.onLeaveMap();
		this.onStateLoadMap();
		
	}
}

// Called when entering map on the zone server for the first time
Ragnarok.prototype.onStateLoadMap = function() {
	
	console.log('Info: Map is now ' + this.session.GetMapName());
	
	this.graphics.gui.showBackground();
	
	this.createMainInterface();
	
	this.setupSessionHandlers();
	this.setupSceneHandlers();
	
	// Add player as first entity
	
	this.addPlayerCharacterToScene();
	
	// Load scene
	
	var rswName = this.session.GetMapName().replace(/gat$/, "rsw");
	
	this.graphics.scene.Load(rswName);
	
};

// Called when character is selected
Ragnarok.prototype.onStateCharacterSelected = function( charID ) {
	
	// Network send character select
	
	this.session.attachEventListener("OnMapChangeRequestResponse", (function(response) {
		
		if( response ) {
			console.log("Map change request OK ...");
			this.onStateLoadMap();
		} else {
			console.error('Error: Zone server authentication request rejected');
			this.reset();
		}
		
	}).bind(this));
	
	// Setup handlers to scene
	
	this.session.SelectCharacter(charID);
	
}

// Called when client is ready to list characters
Ragnarok.prototype.onStateCharSelect = function() {
	
	var charSelectWindow = this.graphics.gui.create( Interface.CharSelect );
	
	var accountData = this.session.GetAccountCharInfo();
	
	for( var i = 0; i < accountData.length && i < 3; i++ ) {
		
		var data = Object.create(accountData[i]);
		
		data.name = charCodeArrayToString(data.name);
		data.lastMap = charCodeArrayToString(data.lastMap);
		
		charSelectWindow.addCharacter( data );
		
	}
	
	charSelectWindow.onEvent = (function( event ) {
		
		// Select character
		if( event.action == Interface.Button.Select ) {
			
			// validation should be done first
			// simple for now...
			if( event.charId === null || event.charId < 0 ) {
				return;
			}
			
			this.graphics.gui.remove( event.window );
			
			this.onStateCharacterSelected( event.charId );
			
		} else if( event.action == Interface.Button.Cancel ) {
			
			this.graphics.gui.remove( event.window );
			this.reset();
			
		}
		
	}).bind(this);
	
	this.graphics.gui.add(
		charSelectWindow,
		InterfaceAlignment.Center, 
		InterfaceAlignment.Center
	);

};

// Called when the user has requested access to a server
Ragnarok.prototype.onStateServiceSelected = function( serviceID ) {

	this.session.attachEventListener("OnAccountCharSelect", (function(success) {
		if( success ) {
			this.onStateCharSelect();
		} else {
			console.error('Error: Server access was denied');
			this.reset();
		}
	}).bind(this));

	this.session.SelectService(serviceID);

}

