var PathHelper = {
	
	spritePath: 'sprite',
	classPath: decodeURIComponent("%C3%80%C3%8E%C2%B0%C2%A3%C3%81%C2%B7"), // "ÀÎ°£Á·",
	bodyPath: decodeURIComponent("%C2%B8%C3%B6%C3%85%C3%AB"), // "¸öÅë",
	headPath: decodeURIComponent("%C2%B8%C3%93%C2%B8%C2%AE%C3%85%C3%AB"), // "¸Ó¸®Åë",
	headTopPath: decodeURIComponent("%C2%BE%C3%87%C2%BC%C2%BC%C2%BB%C3%A7%C2%B8%C2%AE"), //"¾Ç¼¼»ç¸®",
	genderMale: decodeURIComponent("%C2%B3%C2%B2"), //"³²",
	genderFemale: decodeURIComponent("%C2%BF%C2%A9"), //"¿©",
	monsterPath: "¸ó½ºÅÍ",
	npcPath: "npc",
	weaponPath: "ÀÎ°£Á·",
	weaponEffectSuffix: "_°Ë±¤",
	
	// Missing NPCs defaults to this
	defaultBodyResName: "sprite/¸ó½ºÅÍ/dark_priest",
	
	assetFolder: "assets",
	loginInterfacePath: "assets/login_interface",
	basicInterfacePath: "assets/basic_interface",
	loadingScreenPath: "assets/load_kr",
	loadingScreenBitmapExtension: "bmp",
	interfaceBitmapExtension: "gif",
	
	getInterface: function(name, _type) {
		var fname = name + "." + PathHelper.interfaceBitmapExtension;
		return PathHelper.createPath(_type, fname);
	},
	
	getBackgroundResPath: function(name) {
		var fname = name + "." + PathHelper.loadingScreenBitmapExtension;
		return PathHelper.createPath(PathHelper.loadingScreenPath, fname);
	},
	
	getResPathBasicInterface: function(name) {
		return PathHelper.getInterface(name, PathHelper.basicInterfacePath);
	},
	
	getResPathLoginInterface: function(name) {
		return PathHelper.getInterface(name, PathHelper.loginInterfacePath);
	},
	
	getMinimapResPath: function(name) {
		return PathHelper.createPath(
			Settings.dataFolderUri,
			"texture/À¯ÀúÀÎÅÍÆäÀÌ½º/map/",
			name.replace(".rsw", ".bmp")
		);
	},
	
	createPath: function() {
		var a = [];
		for(var i = 0; i < arguments.length; i++) {
			a[i] = arguments[i];
		}
		return a.join("/");
	},
	
	getWeaponResPath: function(weapon_type, job_id, sex) {
	
		var jobResName = ClassResNameTable[job_id];
		var resName = jobResName + "_" + PathHelper.getGenderName(sex) + WeaponNameTable[weapon_type];
	
		return PathHelper.createPath(
			PathHelper.spritePath,
			PathHelper.weaponPath,
			jobResName,
			resName
		);
	
	},
	
	getWeaponEffectResPath: function(weapon_type, job_id, sex) {
		return PathHelper.getWeaponResPath(weapon_type, job_id, sex) + PathHelper.weaponEffectSuffix;
	},
		
	getGenderName: function( sex ) {
		return ( sex == 1 )
			? PathHelper.genderMale
			: PathHelper.genderFemale;
	},
	
	// job res name
	getClassResName: function( class_id, sex ) {
		
		var resName = ClassResNameTable[ class_id ];
		
		return resName + '_' + PathHelper.getGenderName( sex );
		
	},
	
	// job body res path
	getClassBodyResPath: function( class_id, sex ) {
		
		return PathHelper.spritePath + '/'
			+ PathHelper.classPath + '/'
			+ PathHelper.bodyPath + '/'
			+ PathHelper.getGenderName( sex ) + '/'
			+ PathHelper.getClassResName( class_id, sex );
	},
	
	// hair res name
	getHeadResName: function( head_id, sex ) {
		
		return HeadIdTable[sex][head_id].toString() + '_' + PathHelper.getGenderName( sex );
		
	},
	
	// hair res path
	getHeadResPath: function( head_id, sex ) {
		
		return PathHelper.spritePath + '/'
			+ PathHelper.classPath + '/'
			+ PathHelper.headPath + '/'
			+ PathHelper.getGenderName( sex ) + '/'
			+ PathHelper.getHeadResName( head_id, sex );
	
	},
	
	getAccessoryResName: function( access_id, sex ) {
		
		return PathHelper.getGenderName( sex ) + AccessoryNameTable[ access_id ]
		
	},
	
	// view ID res path
	getAccessoryResPath: function( access_id, sex ) {
		
		return PathHelper.spritePath + '/'
			+ PathHelper.headTopPath + '/'
			+ PathHelper.getGenderName( sex ) + '/'
			+ PathHelper.getAccessoryResName( access_id, sex );
	},
		
	getMonsterResName: function( monster_id ) {
	
		if(!(monster_id in JobNameTable)) {
			return PathHelper.defaultBodyResName;
		}
	
		return PathHelper.createPath(
			PathHelper.spritePath,
			PathHelper.monsterPath,
			JobNameTable[monster_id].toLowerCase()
		);
		
	},
	
	getNpcResName: function( npc_id ) {
	
		if(!(npc_id in JobNameTable)) {
			return PathHelper.defaultBodyResName;
		}
	
		return PathHelper.createPath(
			PathHelper.spritePath,
			PathHelper.npcPath,
			JobNameTable[npc_id].toLowerCase()
		);
		
	}
	
};