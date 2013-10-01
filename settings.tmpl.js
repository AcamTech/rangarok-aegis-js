var Settings = {
	
	dataFolderUri: "data/",
	loginHost: "127.0.0.1",
	loginPort: 6900,
	
	packetVersion: 99,
	
	useFixedPacketVersion: true,
	encryptLogin: false,
	music: true,
	
	fontSize: 12,
	fontFamily: "Tahoma",
	
	// Use features from node-webkit?
	
	desktop: !true,
	
	// 0 = websocket
	// 1 = tcp/4 (requires desktop=true)
	socketType: 0,
	
	// Debug
	
	DEBUG: true,
	
	/* ! These settings are only applicable for socketType=0 ! */
	
	// Port offset to WebSocket-TCP tunnel:
	
	webSocketPortOffset: -1,
	
	// Override remote host address for all server connections:
	// (Use in case of conflict between tunnel host and client address)
	
	webSocketRemoteHost: "192.168.1.1",

};