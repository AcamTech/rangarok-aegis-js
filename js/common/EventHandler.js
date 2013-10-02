var EventHandler = function() {
	this._eventListeners = new Map();
}

EventHandler.prototype.attachEventListener = function(event, fn) {
	
	var listeners;
	
	if(this._eventListeners.has(event)) {
		listeners = this._eventListeners.get(event);
	} else {
		listeners = [];
	}
	
	listeners.push(fn);
	
	this._eventListeners.set(event, listeners);
	
};

EventHandler.prototype.detachAllEventListeners = function() {
	this._eventListeners = new Map();
};

EventHandler.prototype.detachEventListener = function(event, fn) {
	
	if(fn === undefined) {
		this._eventListeners.set(event, []);
		return;
	}
	
	var listeners;
	
	if(this._eventListeners.has(event)) {
		listeners = this._eventListeners.get(event);
	} else {
		console.warn("EventHandler: Can't remove listener " + fn);
		return;
	}
	
	var idx = listeners.indexOf(fn);
	
	if(idx > -1) {
		listeners.splice(idx, 1);
	}
	
	this._eventListeners.set(event, listeners);
	
};

EventHandler.prototype._fireEvent = function(event, value) {
	
	if(this._eventListeners.has(event)) {
				
		var listeners = this._eventListeners.get(event);
		
		for(var i = 0; i < listeners.length; i++) {
			if(typeof listeners[i] == "function")
				listeners[i](value);
		}
		
	}
		
};
