function SceneManager() {

	EventHandler.call(this);
	
};

SceneManager.FadeTransitionTime = 1000;

SceneManager.prototype = Object.create(EventHandler.prototype);

SceneManager.prototype.Init = function() {
	
	this.entityMap = new Map();
	this.entityList = [];
	
	this.reset();
	
};

SceneManager.prototype.reset = function() {

	this._sceneActive = false;
	this._sceneReady = false;
	
	this.loader = null;
	
	if(this.entityList instanceof Array && this.entityList.length > 0) {
		this.UnloadAllEntities();
	}
	
	this.entityMap = new Map();
	this.entityList = [];
	
	if(this.updateInterval)
		clearInterval(this.updateInterval);
	
	this.updateInterval = setInterval(this.Update.bind(this), 10);
	this.lastUpdate = Date.now();
	
	this.loader = new MapLoader();
	
};

SceneManager.prototype.Update = function() {
	
	if(!this._sceneReady)
		return;
	
	var dt = Date.now() - this.lastUpdate;
	
	for(var i = 0; i < this.entityList.length; i++) {
	
		var GID = this.entityList[i];
		var entity = this.entityMap.get(GID);
	
		if(entity.userData.markedForDeletion !== undefined) {
			
			var duration = Date.now() - entity.userData.markedForDeletion;
			
			if(duration >= entity.userData.deletionDelay) {
				this.removeEntity(GID);
				continue;
			}
			
		}
	
		entity.Update( this.loader.camera );
		
	}
	
	this.lastUpdate = Date.now();
	
};

SceneManager.prototype.SetEntityPosition = function(GID, x, y) {

	if(!this._sceneReady)
		return;

	if(!this.entityMap.has(GID)) {
		console.warn("SceneManager: Can't set unknown entity position");
		return;
	}
	
	var entity = this.entityMap.get(GID);
	
	entity.SetGatPosition(x, y);

};

SceneManager.prototype.MoveEntityPosition = function(GID, x, y, x1, y1, moveStartTime) {

	if(!this._sceneReady)
		return;

	if(!this.entityMap.has(GID)) {
		console.warn("SceneManager: Can't set unknown entity position");
		return;
	}
	
	// TODO: Check x, y vs. entity's gat position
	//entity.SetGatPosition(x, y);
	
	var entity = this.entityMap.get(GID);
	
	if(entity.gatPosition.x != x || entity.gatPosition.y != y) {
		//console.log("Incorrect gat position, setting to ", x, y);
		
		var dx = Math.abs(entity.gatPosition.x - x);
		var dy = Math.abs(entity.gatPosition.y - y);
		
		// Tolerate tile displacement of 1 to avoid sprites "jumping"
		if(dx > 1 || dy > 1) {
			entity.SetGatPosition(x, y);
		}
		
		// TODO
		// check "star" area (dx*dx + dy*dy <= 25)
		// 	if true:	fake display of walking from current position
		//				to (x1,y1). use path cost/movement time of (x,y)->(x1,y1)
		//  else:		set gat position directly
		
	}
	
	entity.MoveToGatPosition(x1, y1, moveStartTime);

};

SceneManager.prototype.SetActorMovementSpeed = function(actor, value) {
	
	actor.MovementSpeed = value;
	
};

SceneManager.prototype.SetActorChat = function(GID, msg) {

	var actor;
	
	if(this.entityMap.has(GID)) {
	
		actor = this.entityMap.get(GID);
		
		actor.displayMessageLabel(msg);
	
	} else {
		
		console.warn("SceneManager: Invalid actor (" + GID + ")");
	
	}

};

SceneManager.prototype.KillEntity = function(GID) {

	var entity;
	
	if(this.entityMap.has(GID)) {
		
		entity = this.entityMap.get(GID);
		
		entity.Die();
		
		if(entity.type != SpriteActor.Types.PLAYER) {
			
			// Players shouldn't be removed when they die
			
			this.removeEntityOnTimer(GID, 5000.0);
			
		}
		
		
	} else {
		
		console.warn("SceneManager: Killing non-existant entity");
		
	}

};

// Add a new actor entity to the scene
SceneManager.prototype.AddEntity = function(GID, charInfo) {
	
	if(this.loader === null || this.loader === undefined)
		throw "SceneManager: Attempted to add entity while no scene is active";
	
	var entity;
	
	if(this.entityMap.has(GID)) {
		
		entity = this.entityMap.get(GID);
		
		if(entity.userData.markedForDeletion !== undefined) {
			entity.userData.markedForDeletion = undefined;
		}
		
		this.updateActorDisplay(entity, charInfo);
		
	} else {
	
		entity = this.createEntity(charInfo);
		
		this.entityMap.set(GID, entity);
		this.entityList.push(GID);
		
	}
	
	entity.fadeTargetAlpha = 0;
	entity.fadeTarget(1.0, Date.now() + SceneManager.FadeTransitionTime);
	
	
};

SceneManager.prototype.createEntity = function(charInfo) {
	
	var name = "Unknown";
	
	// If possible, set name
	
	if(charInfo.name !== undefined) {
		if(typeof charInfo.name != "string") {
			name = charCodeArrayToString(charInfo.name);
		} else {
			name = charInfo.name;
		}
	}
	
	var actor = new SpriteActor(this.loader, name);
	
	// Find actor type
	
	var type = 0;
	
	switch(charInfo.objecttype) {
		case 0: type = SpriteActor.Types.PLAYER; break;
		case 5: type = SpriteActor.Types.MONSTER; break;
		case 6: type = SpriteActor.Types.NPC; break;
		//case 6: type = SpriteActor.Types.WARPPORTAL; break;
		default: type = SpriteActor.Types.NPC; break;
	}
	
	actor.type = type;
	
	this.updateActorDisplay(actor, charInfo);
	
	return actor;

};

SceneManager.prototype.updateActorDisplay = function(actor, charInfo) {

	var type = actor.type;

	if(charInfo.speed) {
		this.SetActorMovementSpeed(actor, charInfo.speed);
	}
	
	// Add shadow.spr
	
	this.createActorAttachment(actor, "sprite/shadow", SpriteActor.Attachment.SHADOW);
	
	// Player character
	
	if(type == SpriteActor.Types.PLAYER) {
	
		if(charInfo.sex === undefined) {
			console.warn("SceneManager: No gender");
			charInfo.sex = 1; // default to male
		}
		
		if(charInfo.job >= 0)
			this.changePcActorDisplay(actor, charInfo, GameVar.JOB, charInfo.job);

		if(charInfo.head >= 0)
			this.changePcActorDisplay(actor, charInfo, GameVar.HEAD, charInfo.job);
		
		if(charInfo.accessory > 0) // bottom
			this.changePcActorDisplay(actor, charInfo, GameVar.ACCESSORY, charInfo.accessory);
		
		if(charInfo.accessory2 > 0) // top
			this.changePcActorDisplay(actor, charInfo, GameVar.ACCESSORY2, charInfo.accessory2);
		
		if(charInfo.accessory3 > 0) // mid
			this.changePcActorDisplay(actor, charInfo, GameVar.ACCESSORY3, charInfo.accessory3);
	
	} else if(type == SpriteActor.Types.MONSTER) {
	
		this.changeMonsterDisplay(actor, charInfo);
	
	} else if(type == SpriteActor.Types.NPC) {
	
		this.changeNpcDisplay(actor, charInfo);
		
	}

};

// Change appearance of non-playable actor

SceneManager.prototype.changeNpcDisplay = function(actor, charInfo) {

	var jobResName = PathHelper.getNpcResName(charInfo.job);

	if(jobResName.match(".gr2") !== null) {
		// TODO (I guess?)
		return false;
	}

	this.createActorAttachment(
		actor,
		jobResName,
		SpriteActor.Attachment.BODY
	);
	
	return true;

};

// Change appearance of non-playable actor

SceneManager.prototype.changeMonsterDisplay = function(actor, charInfo) {

	this.createActorAttachment(
		actor,
		PathHelper.getMonsterResName(charInfo.job),
		SpriteActor.Attachment.BODY
	);

};

// Change appearance of a playable character by parameter

SceneManager.prototype.changePcActorDisplay = function(actor, charInfo, varID, value) {
	
	switch(varID) {
		
		case GameVar.JOB:
			this.createActorAttachment(
				actor,
				PathHelper.getClassBodyResPath(charInfo.job, charInfo.sex),
				SpriteActor.Attachment.BODY
			);
			break;
		
		case GameVar.HEAD:
			this.createActorAttachment(
				actor,
				PathHelper.getHeadResPath(charInfo.head, charInfo.sex),
				SpriteActor.Attachment.HEAD
			);
			break;
		
		case GameVar.ACCESSORY:
			this.createActorAttachment(
				actor,
				PathHelper.getAccessoryResPath(charInfo.accessory, charInfo.sex),
				SpriteActor.Attachment.BOTTOM
			);
			break;
		
		case GameVar.ACCESSORY2:
			this.createActorAttachment(
				actor,
				PathHelper.getAccessoryResPath(charInfo.accessory2, charInfo.sex),
				SpriteActor.Attachment.TOP
			);
			break;
		
		case GameVar.ACCESSORY3:
			this.createActorAttachment(
				actor,
				PathHelper.getAccessoryResPath(charInfo.accessory3, charInfo.sex),
				SpriteActor.Attachment.MID
			);
			break;
		
		default:
			console.warn("SceneManager: a spoaijda oijeqoj");
			break;
	}
	
};

SceneManager.prototype.createActorAttachment = function(actor, resName, attachmentType) {
	
	var sprFileObject;
	var actFileObject;
	
	var sprFileName = resName + ".spr";
	var actFileName = resName + ".act";
	
	var task = Deferred();
	
	// Fetch SPR object
	
	task.then(ResourceLoader.getProcessedFileObject.bind(
		this, 
		ResourceLoader.FileType.SPR, 
		sprFileName
	)).then(function(obj) {
		sprFileObject = obj;
	})
	
	// Fetch ACT object
	
	task.then(ResourceLoader.getProcessedFileObject.bind(
		this,
		ResourceLoader.FileType.ACT, 
		actFileName
	))
	.then(function(obj) {
		actFileObject = obj;
	});
	
	// Return task
	
	return task.finally((function() {
		actor.SetAttachment(attachmentType, sprFileObject, actFileObject);
		actor.addAttachmentToScene(this.loader.scene, attachmentType);
	}).bind(this))
	
};

SceneManager.prototype.removeEntityOnTimer = function(GID, duration) {

	var entity = this.entityMap.get(GID);
	
	entity.userData.markedForDeletion = Date.now();
	entity.userData.deletionDelay = duration;
	
	entity.fadeTarget(0.0, Date.now() + duration);

};

SceneManager.prototype.RemoveEntity = function(GID) {
	
	if(!this.entityMap.has(GID)) {
		console.warn("SceneManager: Unable to remove non-existant entity");
		return;
	}
	
	this.removeEntityOnTimer(GID, SceneManager.FadeTransitionTime);
	
};

SceneManager.prototype.removeEntity = function(id) {
	
	var entity = this.entityMap.get(id);
	
	this.unloadEntity(entity);
	
	this.entityMap.delete(id);
	
	var idx = this.entityList.indexOf(id);
	
	if(idx < 0) {
		throw "SceneManager: Lost entity!";
	}
	
	this.entityList.splice(idx, 1);
	
};

SceneManager.prototype.unloadEntity = function(entity) {
	
	entity._active = false;
	entity.UnloadFromScene();

};

SceneManager.prototype.enterScene = function() {

	this._sceneReady = true;
	
	this.loader.attachEventListener("OnPCRequestMove", (function(pos) {
		this._fireEvent("OnMoveRequest", pos);
	}).bind(this));
	
	this._fireEvent("OnSceneLoadDone", null);
	
};

SceneManager.prototype.bindActorToCamera = function(id) {
	
	if(!this.entityMap.has(id))
		return;
	
	if(this._sceneReady) {
	
		var e = this.entityMap.get(id);
	
		if(!(e instanceof SpriteActor)) {
			console.warn("SceneManager: Binding camera to non-actor object");
		}
	
		this.loader.bindCamera(e);
	
	}
	
};

SceneManager.prototype.getCurrentMapName = function() {
	return this.loader.getMapName();
};

SceneManager.prototype.Ready = function() {
	return this._sceneReady;
};

SceneManager.prototype.Load = function(mapName) {
	
	this._sceneActive = true;
	
	var task = this.loader.loadMap(mapName);
	
	task.then((function() {
		console.log("Info: Loading is done! Entering scene.", this._sceneActive);
		this.enterScene();
	}).bind(this));
	
	return true;
	
};

SceneManager.prototype.UnloadAllEntities = function() {

	for(var i = 0; i < this.entityList.length; i++) {
		this.removeEntity(this.entityList[i]);
	}
	
};

SceneManager.prototype.Unload = function() {
	
	console.log("Unloading map");
	
	if(!this._sceneActive) {
		console.warn("SceneManager: No scene to unload");
		return;
	}
	
	if(!this._sceneReady)
		console.warn("SceneManager: Unloading before scene is ready");
	
	clearInterval(this.updateInterval);
	
	this.updateInterval = null;
	
	this.UnloadAllEntities();
	
	delete this.loader;
	
	this.reset();
	
};

SceneManager.prototype.Start = function() {
	
	this.loader.start();
	
};

SceneManager.prototype.Stop = function() {
	
	console.log("Stopping map rendering");
	
	this.loader.stop();
};
