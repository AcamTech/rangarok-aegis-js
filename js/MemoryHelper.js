var MemoryHelper = (function() {
	
	var purge = function(fileList, dataMap, requestMap, expirationTime) {
		
		var now = Date.now();
		var keep = [];
	
		for(var i = 0; i < fileList.length; i++) {
			
			var item = fileList[i];
			var age = now - item.time;
			
			if(age < expirationTime) {
				keep.push(item);
				continue;
			}
			
			var req = requestMap.get(item.id);
			
			if(req instanceof Array && req.length > 0) {
				console.warn("MemoryHelper: Can't delete reference to " + item.id + ", requests still pending ...");
				keep.push(item);
				continue;
			}
			
			dataMap.delete(item.id);
			
		}
		
		// Update original array (note that we need to keep reference)
		
		fileList.length = keep.length;
		
		for(var i = 0; i < keep.length; i++) {
			fileList[i] = keep[i];
		}
		
	};
	
	// Free ResourceLoader's references to processed objects
	var purgeObjects = function(expirationTime) {
	
		purge(
			ResourceLoader._processedFileList,
			ResourceLoader._processedFileObjects,
			ResourceLoader._processedFileRequests,
			expirationTime
		);
		
	};
	
	// Free ResourceLoader's references to downloaded files
	var purgeFileCache = function(expirationTime) {
	
		purge(
			ResourceLoader.cacheList,
			ResourceLoader.files,
			ResourceLoader.requests,
			expirationTime
		);
	
	};
	
	var purgeIntervalKey = null;
	
	var clearPurgeTimer = function() {
		
		if(purgeIntervalKey !== null)
			clearInterval(purgeIntervalKey);
	
	};
	
	var purgeTimer = function(expirationTime, purgeIntervalDelay) {
		
		clearPurgeTimer();
		
		var onPurge = function() {	
			purgeObjects(expirationTime);
			purgeFileCache(expirationTime);
		};
		
		setInterval(onPurge, purgeIntervalDelay);
		
	};
	
	return {
		dereferenceProcessedObjects: purgeObjects.bind(MemoryHelper, 0),
		dereferenceCachedObjects: purgeFileCache.bind(MemoryHelper, 0),
		setPurgeInterval: purgeTimer,
		clearPurgeInterval: clearPurgeTimer
	};
	
})();