var PacketEntry = function(id, structure, fields) {
	this.id = id;
	this.structure = structure;
	this.fields = fields;
	this._fields0 = fields;
};

var PacketVersionException = function( message ) {
	this.message = message;
};

PacketVersionException.prototype.toString = function() {
	return "PacketVersionException: " + this.message;
};

// class PacketVersion
var PacketVersion = function( version ) {

	this.version = version;
	
	// Static buffer for packet creation
	this._staticBuffer = new ArrayBuffer( PacketVersion.MaxPacketBufferSize );
	
	this.buildVersion( version );
	
	
};

// Packet structures (index) which can not be changed to another (value)
PacketVersion.NoReplace = {
	"PACKET_CZ_MOVE_ITEM_FROM_BODY_TO_STORE": "PACKET_CZ_ENTER",
};

PacketVersion.MaxPacketBufferSize = 2048;

PacketVersion.prototype.getPacketLength = function( packet_id ) {
	return this.packetLengthTable[ packet_id ];
};

PacketVersion.prototype.getPacketStructureName = function( packet_id ) {
	return this.packetIdToStruct[ packet_id ];
};

PacketVersion.prototype.getPacketByName = function( fn ) {
	return this.entryTable[ fn ];
};

PacketVersion.prototype.parsePacketBufferToStruct = function( buffer ) {
	
	if( buffer.byteLength < 2 )
		throw new PacketVersionException("Too short buffer");
	
	var view = new DataView( buffer );
	
	var packet_id = view.getUint16(0, true);
	var length = this.getPacketLength(packet_id);
	
	if(!(packet_id in this.packetIdToStruct))
		throw new PacketVersionException("No packet associated with ID 0x" + packet_id.toString(16));
	
	var structureName = this.packetIdToStruct[packet_id];
	
	if( length == -1 ) {
	
		// Note: Structure may still mismatch, resulting in garbled data.
	
		if( buffer.byteLength < 4 ) {
			throw new PacketVersionException("Received too short buffer to parse packet 0x" + packet_id.toString(16));
		}
	
		length = view.getUint16(2, true);
		
		if(buffer.byteLength != length) {
			throw new PacketVersionException("Received incomplete packet.");
		}
	
	} else {
	
		// Packet of static length
		
		// Since we don't have any field indices the length needs to 
		// match with base length of structure
	
		if(length != PacketStructureLengthTable[structureName]) {
			throw new PacketVersionException("Unknown packet structure for " + structureName + ". Default length is " + PacketStructureLengthTable[structureName] + " while this version uses " + length);
		}
	
	}
	
	// Parse buffer structure
	
	var definition = PacketStructureDefinition[structureName];
	
	if(definition === undefined) {
		throw new PacketVersionException("Missing structure definition!");
	}
		
	var out_struct = {};
	
	var readAttributeFromBufferRecursive = function(offset, attribute, struct) {
		
		var name = attribute.name;
		var count = attribute.arrayLength;
		
		if(attribute.dataType == "struct") {
			
			if(count < 0) {
			
				// Variable length structure
				
				struct[name] = [];
				
				var n = 0;
				
				while(offset < buffer.byteLength) {
				
					struct[name].push({});
					
					for(var i = 0; i < attribute.properties.length; i++) {
						offset = readAttributeFromBufferRecursive(offset, attribute.properties[i], struct[name][n]);
					}
					
					n++;
					
				}
				
			} else {
				
				// Fixed length
				
				if(count == 1) {
				
					struct[name] = {};
				
					for(var i = 0; i < attribute.properties.length; i++) {
						offset = readAttributeFromBufferRecursive(offset, attribute.properties[i], struct[name]);
					}
				} else {
				
					struct[name] = [];
				
					for(var n = 0; n < count; n++) {
					
						struct[name].push({});
					
						for(var i = 0; i < attribute.properties.length; i++) {
							offset = readAttributeFromBufferRecursive(offset, attribute.properties[i], struct[name][n]);
						}
					}
				}
				
			
			}
			
		} else {
		
			var wf = PacketVersion.typeGetterFunction[attribute.dataType];
			
			if(count == 1) {
				
				struct[name] = wf.call(view, offset, true);
				offset += attribute.typeLength;
				
			} else {
				
				struct[attribute.name] = [];
				
				if(count < 0) {
					// Variable length
					
					while(offset < buffer.byteLength) {
						
						struct[name].push(
							wf.call(view, offset, true)
						);
						
						offset += attribute.typeLength;
						
					}
					
				} else {
					
					for(var i = 0; i < count; i++) {
						
						struct[name].push(
							wf.call(view, offset, true)
						);
						
						offset += attribute.typeLength;
						
					}
				
				}
				
			}
			
		}
		
		
		return offset;
		
	};
	
	var offset = 0;
	
	for(var i = 0; i < definition.properties.length; i++) {
		
		offset = readAttributeFromBufferRecursive(offset, definition.properties[i], out_struct);
	}
	
	if(offset != buffer.byteLength) {
		console.warn("PacketVersion: Didn't read whole packet. Probably incompatible structure.");
	}
	
	out_struct.constructor = structureName;
	
	return out_struct;
	
};

// Constructs and returns a packet associated with the function name
PacketVersion.prototype.getPacketBufferByNamedEntry = function( fn, struct ) {

	var entry = this.entryTable[ fn ];
	
	if(entry === undefined) {
		throw new PacketVersionException("No entry for named function " + fn);
	}
	
	var id = entry.id;
	var structName = entry.structure;
	
	var useDefaults = true;
	
	var fields = entry.fields;
	var fieldNames;
	
	if( fields !== undefined && fields instanceof Array) {
		
		// No fields are defined for this outgoing packet
		// Try to use base structure
		
		useDefaults = false;
		
		fieldNames = PacketStructureIndexedFields[structName];
		
		if(fieldNames === undefined) {
			throw new PacketVersionException("Missing field names for " + structName);
		}
		
		if(fieldNames.length != fields.length) {
			throw new PacketVersionException("Packet " + structName + " has " + fieldNames.toString() + " defined field names, but " + fields.length.toString() + " fields are used.");
		}

	}
	
	var definition = PacketStructureDefinition[structName];
		
	var length = this.packetLengthTable[ id ];
	
	if( length === undefined ) {
		throw new PacketVersionException("Undefined length for packet ID 0x" + id.toString(16) + " with associated structure " + structName);
	}
	
	var buffer = this._staticBuffer;
	var view = new DataView( buffer );
	
	// Build packet
	
	var writeAttributeToBuffer = function(offset, attribute, value) {
		
		if(value === undefined)
			throw new PacketVersionException("Attribute " + attribute.name + " has no value!");
		
		// TODO: array of struct
		if(attribute.dataType == "struct") {
			
			for(var i = 0; i < attribute.properties.length; i++) {
			
				offset += writeAttributeToBuffer(offset, attribute.properties[i], value[attribute.properties[i].name]);
				
			}
		}
		
		var wf = PacketVersion.typeSetterFunction[attribute.dataType];
		
		if(attribute.arrayLength == 1) {
			wf.call(view, offset, value, true);
			offset += attribute.typeLength;
		} else {
			
			// If variable length attribute, write full input value
			var arrayLength = attribute.arrayLength > 0 ? attribute.arrayLength : value.length;
			
			for(var i = 0; i < arrayLength; i++) {
			
				if(i < value.length) {
					wf.call(view, offset, value[i], true);
				} else {
					// Write NULL when value is smaller than field length
					wf.call(view, offset, 0, true);
				}
				
				offset += attribute.typeLength;
			}		
		}
		
		return offset;
		
	};
	
	var attributes = definition.properties;
	var offset = 0;
	var lastOffset;
	var packet;
	
	if( !useDefaults ) {
		
		// If we're using field indexed values just ignore all other 
		// properties. Athena won't read them anyway!
		
		// Note to self: Packets may carry junk left over from previous
		// packets because of buffer reuse.
		
		var getAttribute = function( name ) {
			// Closure on attributes
			for(var i = 0; i < attributes.length; i++) {
				if(attributes[i].name == name)
					return attributes[i];
			}
			return null;
		};
		
		
		for(var i = 0; i < fields.length; i++) {
		
			var attr = getAttribute( fieldNames[i] );
			var attrOffset = fields[i];
			
			if(attr.name == "PacketLength" || attr.name == "PacketType")
				continue;
			
			if(attr === null) {
				throw new PacketVersionException("Structure " + structName + " has no attribute " + fieldNames[i]);
			}
			
			if(struct[attr.name] === undefined) {
				throw new PacketVersionException("Missing important field " + attr.name + " for structure " + structName);
			}
			
			// Write out attribute at offset from field
			// TODO: check if data overlap (unlikely?)
			offset = writeAttributeToBuffer(attrOffset, attr, struct[attr.name]);
			
			//console.log(attrOffset, offset, attr, struct[attr.name], attr.name);
		
		}
		
		lastOffset = offset;
		
	} else {
		
		// No fields have been specified. Create complete packet from
		// our own structure definition.
		
		var structLen;
		
		if( definition.variableLength ) {
			structLen = -1;
		} else {
			structLen = PacketStructureLengthTable[ structName ];
		}
		
		//console.log("Building " + structName + " of length " + structLen + " as packet 0x" + id.toString(16) + " with length " + length);
		
		if( structLen != length ) {
			throw new PacketVersionException("Packet 0x" + id.toString(16) + " has a different length than it's associated structure " + structName + ", but the database contains no attribute indices for this packet.");
		}
		
		// Skip setting `PacketType` and `PacketLength` if applicable
		var startIdx = length == -1 ? 2 : 1;
		
		var nextOffset = startIdx * 2;
		
		for(var i = startIdx; i < attributes.length; i++) {
			
			var attr = attributes[i];
			
			// Offset from structure
			offset = attr.offset;
			
			if( nextOffset != offset ) {
				throw new PacketVersionException("Attribute fields are overlapping in structure " + structName);
			}
			
			nextOffset = writeAttributeToBuffer(offset, attr, struct[attr.name]);
			
		}
		
		lastOffset = nextOffset;
		
	}
	
	// Set packet ID
		
	view.setUint16(0, id, true);
	
	if( length == -1 ) {
		// Set field `PacketLength` - always at offset 2 for packets with variable length
		// Use last offset as packet length
		view.setUint16(2, lastOffset, true );
	}
	
	// Slice buffer down to real length
	
	if( length == -1 ) {
		// Slice buffer down to real size
		packet = buffer.slice(0, lastOffset);
	} else {
		// Copy
		packet = buffer.slice(0, length);
	}
	

	return new Uint8Array(packet);

};

PacketVersion.typeSetterFunction = {
	"Uint32": DataView.prototype.setUint32,
	"Uint16": DataView.prototype.setUint16,
	"Uint8": DataView.prototype.setUint8,
	"Int32": DataView.prototype.setInt32,
	"Int16": DataView.prototype.setInt16,
	"Int8": DataView.prototype.setInt8
};

PacketVersion.typeGetterFunction = {
	"Uint32": DataView.prototype.getUint32,
	"Uint16": DataView.prototype.getUint16,
	"Uint8": DataView.prototype.getUint8,
	"Int32": DataView.prototype.getInt32,
	"Int16": DataView.prototype.getInt16,
	"Int8": DataView.prototype.getInt8
};

PacketVersion.typeSetterArray = {
	"Uint32": Uint32Array,
	"Uint16": Uint16Array,
	"Uint8": Uint8Array,
	"Int32": Int32Array,
	"Int16": Int16Array,
	"Int8": Int8Array
};

PacketVersion.prototype.checkConflicts = function( version ) {

	console.log( this.getPacketBufferByNamedEntry("wanttoconnection", {
		"AID": 1000,
		"GID": 1002,
		"AuthCode": 2321,
		"clientTime": 1001,
		"Sex": 1
	}) );

	console.log( this.getPacketBufferByNamedEntry("PACKET_CZ_REQUEST_CHAT", {
		"msg": "sliceo f lief".toUint8Array()
	}) );

	console.log( this.getPacketBufferByNamedEntry("loginreq", {
		"Version": 20,
		"ID": "password".toUint8Array(),
		"Passwd": "password".toUint8Array(),
		"PasswdMD5": "password".toUint8Array(),
		"macData": "none".toUint8Array(),
		"clienttype": 1
	}) );

	console.log( this.getPacketBufferByNamedEntry("CZ_REQUEST_MOVE2", {
		"dest": "abc".toUint8Array()
	}) );


	//document.writeln(a + " conflicts<br /><br />");
	//document.writeln(mes.join("<br />"));
	
	a = 0;
	
	for(var id in this.packetIdToStruct) {
	
		id = parseInt(id, 10);
	
		var structName = this.packetIdToStruct[id];
		var structLen = PacketStructureLengthTable[structName];
	
		//if(PacketStructureIndexedFields[structName].length != ) {
		
		//}
		
		if(structLen != this.packetLengthTable[id]) {
			a++;
			
			//console.log("0x" + id.toString(16) + " " + this.packetIdToStruct[id], structLen, this.packetLengthTable[id]);
			
			
			//console.log("0x" + id.toString(16), size, this.packetLengthTable[id]);
		}
	
	
	}
	
	//console.log(a);

}

// Build version from packet database rules
PacketVersion.prototype.buildVersion = function( version ) {

	// Start with default packet ID => structure mapping
	this.packetIdToStruct = Object.create( PacketDefaultIdTable );
	
	this.entryTable = {};
	
	this.packetLengthTable = {};
	
	// Set default packet lengths
	for(var i in this.packetIdToStruct) {
		this.packetLengthTable[i] = PacketStructureLengthTable[ this.packetIdToStruct[i] ];
	}
	
	if (Settings.useFixedPacketVersion)
	{
		var rules = PacketDb[Settings.packetVersion];
		
		for(var j = 0; j < rules.length; j++) {
			this.addRule( rules[j] );
		}
	} else {
	for(var i = 0; i <= version; i++) {
	
		if(!(i in PacketDb)) continue;
		
		var rules = PacketDb[i];
		
		for(var j = 0; j < rules.length; j++) {
			this.addRule( rules[j] );
		}
	}
		
	
	}
	
	//this.checkConflicts();
	
	//document.body.innerHTML = "<pre>" + JSON.stringify( PacketStructureIndexedFieldIdentifiers, undefined, "\t" ) + "</pre> ";
	
	
};

var PacketStructureIndexedFieldIdentifiers = {};

// Add a new packet rule to the packet version
PacketVersion.prototype.addRule = function(rule) {

	// TODO:
	// Packet ID => function name
	// Need to add function name (and field structure) to server => client packets in packet database

	var id;
	var size;
	var fn;
	var fields;
	
	var struct;
	var structSize;
	
	id = rule[0];
	size = rule[1];
		
	if(rule.length > 2) {
	
		fn = rule[2];
		fields = rule[3] || false;
		
		if(!(fn in this.entryTable)) {
			
			// Set to structure to function name
			
			struct = this.packetIdToStruct[id];
			
			this.entryTable[fn] = new PacketEntry(id, struct, fields);
			
			// Update length in case of mismatch
			this.packetLengthTable[id] = size;
			
			//PacketStructureIndexedFieldIdentifiers
			
			//console.log( PacketStructureDefinition[struct] );
			
			/*
			
			var def = PacketStructureDefinition[struct];
			
			if( def !== undefined ) {
				
				var lastIndexId = -1;
				
				var fieldNames = [];
				
				for(var i = 0; i < fields.length; i++) {
					
					var result = false;
					
					for(var j = lastIndexId + 1; j < def.properties.length; j++) {
					
						if(def.properties[j].offset == fields[i]) {
							result = true;
							fieldNames.push( def.properties[j].name );
							lastIndexId = j;
							break;
						}
						
					}
					
					if( !result ) {
						console.log("Couldn't find appropriate indexed fields for packet " + struct, fields);
						break;
					}
						
				}
				
				PacketStructureIndexedFieldIdentifiers[struct] = fieldNames;
				
				console.log("Packet " + struct + ": " + (fieldNames.join(", ")) );
			}
			*/
			
			//mes.push(fn + ": 0x" + id.toString(16) + " => " + struct);
			
		} else {
			
			// Size of current structure
			structSize = this.packetLengthTable[this.entryTable[fn].id];
			
			if(this.entryTable[fn].id != id && size == structSize) {
				
				// Swap ID for structure
				this.entryTable[fn].id = id;
				
				// Swap fields 
				if(fields != false) {
					this.entryTable[fn].fields = fields;
				}
				
				// Overwrite structure name for ID
				this.packetIdToStruct[id] = this.entryTable[fn].structure;
				// Overwrite length for ID
				this.packetLengthTable[id] = size;
				
				
				
			} else if(this.entryTable[fn].id == id && size != structSize ) {
				
				// Same ID, different length
				// Update size and field indices
				
				this.packetLengthTable[id] = size;
				this.entryTable[fn].fields = fields;
				
			} else if(this.entryTable[fn].id != id && size != structSize) {
				
				// Check if replacement structure matches length
				
				if(this.packetIdToStruct[id] && PacketStructureLengthTable[this.packetIdToStruct[id]] == size
					&& PacketVersion.NoReplace[this.entryTable[fn].structure] != this.packetIdToStruct[id]) {
				
					// If we've already got a structure registered for 
					// this packet ID that matches the size for this 
					// function, use that structure instead.
					
					// Swap packet
					this.entryTable[fn].id = id;
					this.entryTable[fn].structure = this.packetIdToStruct[id];
					this.entryTable[fn].fields = fields;
					this.packetLengthTable[id] = size;
					
					
				} else {				
					
					// Use the same structure for this function with new
					// parameters.
					
					this.entryTable[fn].id = id;
					this.packetIdToStruct[id] = this.entryTable[fn].structure;
					this.packetLengthTable[id] = size;
					this.entryTable[fn].fields = fields;
					
					
				}
				
				
			} else {
				
				// Update field indices in case changed
				this.entryTable[fn].fields = fields;
				
			}
				
			
		}
		
	} else {
		// Just update packet length
		this.packetLengthTable[id] = size;
	}
	
};