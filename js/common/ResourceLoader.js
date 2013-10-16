var ResourceLoader = {};

ResourceLoader.files = new Map();
ResourceLoader.processing = new Map();
ResourceLoader.requests = new Map();

ResourceLoader.baseUrl = Settings.dataFolderUri;

ResourceLoader.useFileSystem = false;
ResourceLoader.useNativeFileSystem = false;

ResourceLoader.fs = null;

if( Settings.desktop ) {

	ResourceLoader.useNativeFileSystem = true;
	ResourceLoader.nativeFs = require('fs');

}

ResourceLoader.init = function() {
	
	ResourceLoader.ready = new Deferred();
	
	if(window.requestFileSystem) {
		window.requestFileSystem(
			window.TEMPORARY, 
			(1024 + 512) * 1024 * 1024, // 1.5GB
			function(fs) {
				console.log("Info: File system API seems to be available");
				ResourceLoader.useFileSystem = true;
				ResourceLoader.fs = fs;
				ResourceLoader.ready.success(true);
			},
			function() {
				console.warn("Info: File system API not available");
				ResourceLoader.ready.success(false);
			}
		);
	}
	
};

ResourceLoader.init();

ResourceLoader.storeTextureAtlas = function(mapName, index, data) {
	
};

ResourceLoader.removeDirectory = function(dirName) {
	
	return ResourceLoader.getDirectory(dirName).then(function(ret) {
		if(ret !== false) {
			ret.removeRecursively(function() {
				console.log("Removed directory!");
			}, function(e) {
				console.log("Error!", e);
			});
		} else
			console.log("Error getting directory!", ret);
	});
	
};

// Create or get existing directory
ResourceLoader.createDirectory = function(dirName) {
	
	var p = new Deferred();
	
	ResourceLoader.fs.root.getDirectory(
		dirName,
		{ create: true },
		function(dirEntry) {
			p.success(dirEntry);
		},
		function(error) {
			console.log("error!", error);
			p.success(false);
		}
	);
	
	return p;
};

// Get directory if it exists
ResourceLoader.getDirectory = function(dirName) {
	
	var p = new Deferred();
	
	var dirReader = ResourceLoader.fs.root.getDirectory(
		dirName,
		{},
		function(dirEntry) {
			//console.log("Has dir!");
			p.success(dirEntry);
		},
		function(error) {
			console.log("Error!", error);
			p.success(false);
		}
	);
	
	return p;
};

// Get file from the temporary web storage
ResourceLoader.getFile = function(dirName, fileName, returnType) {
	
	var p = new Deferred();
	
	ResourceLoader.getDirectory(dirName)
		.then(function(dirEntry) {
			if(dirEntry !== false) {
				dirEntry.getFile(
					fileName, 
					{},
					function(fileEntry) {
						//console.log(fileEntry);
						fileEntry.file(function(file) {
							var reader = new FileReader();
							//console.log("Reading file");
							reader.onloadend = function(e) {
								//console.log("Got the file here!", e.target.result);
								p.success(e.target.result);
							};
							switch(returnType) {
								case 'binarystring': reader.readAsBinaryString(file); break;
								case 'dataurl': reader.readAsDataURL(file); break;
								case 'text': reader.readAsText(file); break;
								case 'arraybuffer': 
								default:
									reader.readAsArrayBuffer(file);
							}
							
						});
					},
					function(error) {
						console.log("Failed to fetch file entry");
						p.success(false)
					}
				);
			} else {
				console.log("Failed to fetch directory entry");
				p.success(false);
			}
		});
	
	return p;
	
};

ResourceLoader.createFile = function(dirName, fileName, fileData, type) {
	
	var p = new Deferred();
	
	ResourceLoader.createDirectory(dirName)
		.then(function(dirEntry) {
			if(dirEntry !== false) {
				dirEntry.getFile(
					fileName, 
					{ create: true },
					function(fileEntry) {
						fileEntry.createWriter(function(fileWriter) {
							fileWriter.onwriteend = function() {
								console.log("Wrote file " + fileName + " to disk");
								p.success(true);
							};
							
							fileWriter.onerror = function() {
								console.log("Writing file failed");
								p.success(false);
							};
							
							var blobEntry;
							
							switch(type) {
								case "text/plain": 
									blobEntry = [fileData];
									break;
								case "application/octet-binary":
								default:
									blobEntry = [new Uint8Array(fileData)];
							}
							
							fileWriter.write(new Blob(
								blobEntry,
								{ type: type }
							));
							
						}, function() {
							console.log("Failed to create file writer");
							p.success(false);
						});
					},
					function(error) {
						console.log("Failed to fetch file entry");
						p.success(false)
					}
				);
			} else {
				console.log("Failed to create directory");
				p.success(false);
			}
		});
	
	return p;
};

ResourceLoader.escapeRemotePath = function(fileName) {
	fileName = fileName.replace("\\", "/");
	var name = "";
	for(var i = 0; i < fileName.length; i++){
		if(fileName.charAt(i) != "/") {
			name += encodeURIComponent(fileName.charAt(i));
		} else {
			name += "/";
		}
	}
	return name;
};

ResourceLoader.files = new Map();
ResourceLoader.requests = new Map();
ResourceLoader.cacheList = [];

ResourceLoader.getLocalFile = function( fileName ) {

	var item = new Deferred();
	
	var toArrayBuffer = function( buffer ) {
	
		if(buffer === undefined)
			throw "Buffer is undefined";
	
		if(ArrayBuffer === undefined)
			throw "Global ArrayBuffer object is undefined";
			
		var ab = new ArrayBuffer(buffer.length);
		var view = new Uint8Array(ab);
		for (var i = 0; i < buffer.length; ++i) {
			view[i] = buffer[i];
		}
		return ab;
	};
	
	ResourceLoader.nativeFs.readFile( ResourceLoader.baseUrl + fileName, undefined, function(err, data) {
		
		if(err != null) {
			console.log( "Error reading local file \"" + fileName + "\"", err, data, typeof data );
			return;
		}
		
		if(data !== undefined) {
			
			item.success(toArrayBuffer(data));
		
		} else {
			
			console.error("ResourceLoader: Read file success but no data");
			
			item.success(null);
			
		}
		
	});
	
	return item;

};

ResourceLoader.getRemoteFile = function(fileName) {
		
	var item = new Deferred();
	
	var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.open('GET', ResourceLoader.baseUrl + ResourceLoader.escapeRemotePath(fileName), true);
	xmlhttp.responseType = 'arraybuffer';
	xmlhttp.onreadystatechange = function() {
		
		if( this.readyState == 4 ) {
			
			item.success(this.response);
			
		}
	}
	
	xmlhttp.send(null);
	
	return item;
	
};

ResourceLoader.requestFile = function(name) {
	
	name = name.replace("\\", "/");
	
	var fn;
	var task = new Deferred();
	
	if( ResourceLoader.useNativeFileSystem ) {
		fn = ResourceLoader.getLocalFile;
	} else {
		fn = ResourceLoader.getRemoteFile;
	}
	
	if(ResourceLoader.files.has(name)) {
		
		// Update last access time
			
		for(var i = 0; i < ResourceLoader.cacheList.length; i++) {
			if(ResourceLoader.cacheList[i].id == name) {
				ResourceLoader.cacheList[i].time = Date.now();
				break;
			}
		}
		
		// Fetch complete
		
		item.success(ResourceLoader.files.get(name));
		
	} else if(ResourceLoader.requests.has(name)) {
	
		var reqs = ResourceLoader.requests.get(name);
		
		if(reqs.length > 0) {
		
			reqs.push(task);
		
			return task;
		
		}
	
	}
	
	ResourceLoader.requests.set(name, [task]);
	
	fn(name).then(function(response) {
		
		// Add reference
		
		ResourceLoader.cacheList.push({ id: name, time: Date.now() });
		
		// Store
		
		ResourceLoader.files.set(name, response);
		
		// Resolve requests
		
		var reqs = ResourceLoader.requests.get(name);
		
		ResourceLoader.requests.set(name, []);
		
		for(var i = 0; i < reqs.length; i++) {
			(reqs[i]).success(response);
		}
		
	});
	
	return task;
	
};

ResourceLoader.getRsw = function(rswName) { return ResourceLoader.requestFile(rswName); };
ResourceLoader.getGnd = function(gndName) { return ResourceLoader.requestFile(gndName); };
ResourceLoader.getGat = function(gatName) { return ResourceLoader.requestFile(gatName); };
ResourceLoader.getRsm = function(rsmName) { return ResourceLoader.requestFile("model/" + rsmName); };

ResourceLoader.getSpr = function(spriteName) { return ResourceLoader.requestFile(spriteName); };
ResourceLoader.getAct = function(rsmName) { return ResourceLoader.requestFile(rsmName); };

ResourceLoader.FileType = {
	SPR: 0,
	ACT: 1,
	RSW: 2,
	GAT: 3,
	GND: 4,
	RSM: 5
};

ResourceLoader.FileFormatParser = {};

ResourceLoader.FileFormatParser[ ResourceLoader.FileType.SPR ] = SprParser;
ResourceLoader.FileFormatParser[ ResourceLoader.FileType.ACT ] = ActParser;
ResourceLoader.FileFormatParser[ ResourceLoader.FileType.RSM ] = RSM;

ResourceLoader.getBinaryFileData = function(fileType, pathName) {
	
	var fn = null;
	
	switch(fileType) {
		case ResourceLoader.FileType.SPR: fn = ResourceLoader.getSpr; break;
		case ResourceLoader.FileType.ACT: fn = ResourceLoader.getAct; break;
		case ResourceLoader.FileType.RSW: fn = ResourceLoader.getRsw; break;
		case ResourceLoader.FileType.GAT: fn = ResourceLoader.getGat; break;
		case ResourceLoader.FileType.GND: fn = ResourceLoader.getGnd; break;
		case ResourceLoader.FileType.RSM: fn = ResourceLoader.getRsm; break;
	};
	
	if(!fn)
		throw "ResourceLoader: Invalid format type in request for processed file object";
	
	return fn(pathName);
	
};

ResourceLoader._processedFileRequests = new Map();
ResourceLoader._processedFileObjects = new Map();
ResourceLoader._processedFileList = [];

ResourceLoader.getProcessedFileObject = function(fileType, pathName) {
	
	var task = new Deferred();
	
	var id = pathName + "_" + fileType;
	
	if(ResourceLoader._processedFileRequests.has(id)) {
	
		if(ResourceLoader._processedFileObjects.has(id)) {
		
			// Update last access time
			
			for(var i = 0; i < ResourceLoader._processedFileList.length; i++) {
				if(ResourceLoader._processedFileList[i].id == id) {
					ResourceLoader._processedFileList[i].time = Date.now();
					break;
				}
			}
			
			// Fetching object succeeded
			
			task.success(ResourceLoader._processedFileObjects.get(id));
			
			return task;
			
		} else {
			
			var req = ResourceLoader._processedFileRequests.get(id);
			
			if(req.length > 0) {
			
				req.push(task);
				
				return task;
			
			}
			
		}
		
	}
	
	ResourceLoader._processedFileRequests.set(id, [task]);
	
	ResourceLoader.getBinaryFileData(fileType, pathName)
		
		.then(function(data) {
			
			var reqs = ResourceLoader._processedFileRequests.get(id);
			
			ResourceLoader._processedFileRequests.set(id, []);
			
			var parser = ResourceLoader.FileFormatParser[fileType];
			
			
			var pobj;
			
			try {
				pobj = new parser(data);
			} catch(e) {
				console.warn("ResourceLoader: Error parsing file. (" + String(e) + ")");
				pobj = null;
			}
			
			ResourceLoader._processedFileList.push({
				id: id, 
				time: Date.now()
			});
			
			ResourceLoader._processedFileObjects.set(id, pobj);
						
			for(var i = 0; i < reqs.length; i++) {
				reqs[i].success(pobj);
			}
			
		});
	
	return task;
	
};

/* object getters */

ResourceLoader.getSpriteObjectTask = function( path ) {
	return ResourceLoader.getProcessedFileObject.bind( this, ResourceLoader.FileType.SPR, path + ".spr" );
};

ResourceLoader.getActorObjectTask = function( path ) {
	return ResourceLoader.getProcessedFileObject.bind( this, ResourceLoader.FileType.ACT, path + ".act" );
};


/* texture stuff */

ResourceLoader.getTexture = function(texturePath) {
	return THREE.ImageUtils.loadTexture(ResourceLoader.baseUrl + "texture/" + ResourceLoader.escapeRemotePath(texturePath), {});
};

ResourceLoader.getTextureImage = function(imagePath) {
	
	var q = new Deferred;
	var img = new Image;
	
	img.src = ResourceLoader.baseUrl + "texture/" + ResourceLoader.escapeRemotePath(imagePath);
	
	img.onload = function() {
		q.success(this);
	};
	
	return q;
};