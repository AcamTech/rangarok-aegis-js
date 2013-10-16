function GAT( buffer ) {
	
	var start = (new Date).getTime();
	
	this.header = {};
	this.blocks = [];
	this.baseOffset = null;
	this.float32Data = null;
	
	this.__defineGetter__( 'width', function() {
		return this.header.width;
	}); 
	
	this.__defineGetter__( 'height', function() {
		return this.header.height;
	});
	
	this.offsetToBlock = function(x, y) {
		return (this.header.width * y + x) * GAT.SIZEOF_STRUCT_BLOCK;
	}
	
	this.isValidBlock = function(x, y) {
		
		var idx = this.offsetToBlock(x, y) / 4;
		return idx < this.float32Data.length;
	};
	
	this.getBlock = function( x, y ) {
		
		if(!this.isValidBlock(x, y))
			return undefined;
		
		var idx = this.offsetToBlock(x, y) / 4;
		
		return {
			upperLeftHeight: this.float32Data[idx+0],
			upperRightHeight: this.float32Data[idx+1],
			lowerLeftHeight: this.float32Data[idx+2],
			lowerRightHeight: this.float32Data[idx+3],
			// type seems to be uint8, the remaining 3 bytes being padding
			type: this.uint8Data[4*(idx+4)],
		};
		
	}
	
	// block is considered underwater if avgDepth > waterLevel
	this.getBlockAvgDepth = function( x, y ) {	
		
		var block = this.getBlock( x, y );
		
		if(block === undefined)
			return 0;
		
		return averageDepth = (block.upperLeftHeight + block.upperRightHeight + block.lowerLeftHeight + block.lowerRightHeight) / 4;
		
	}
		
	this.hasProperty = function(x, y, property) {
	
		var block = this.getBlock(x, y);
		
		if(block === undefined || block === null) {
			return false;
		}
	
		return (GAT.BlockTypes[block.type] & property) != 0;
	};
	
	this.parseFormat = function(buffer) {
		
		var data = new DataView( buffer, 0 );
		var offset = 0;
		
		var header = {
			magic: data.getString( offset, 4 ),
			version: data.getUint16( offset + 4, true ),
			width: data.getUint32( offset + 6, true ),
			height: data.getUint32( offset + 10, true )
		};
		
		offset += 14;
		
		if(header.magic.localeCompare('GRAT') !== 0) {
			throw 'GAT :: uknown identifier ' + this.header.magic;
		}
		
		if(header.version !== 0x201)
			console.log('GAT :: Info: File format version 0x' + this.header.version.toString(16) );
		
		var datBuffer = buffer.slice(offset);
		
		this.float32Data = new Float32Array(datBuffer);
		this.uint8Data = new Uint8Array(datBuffer);
		
		this.header = header;
		
	}
	
	this.parseFormat( buffer );
	console.log('Parsed GAT file format in ' + ((new Date).getTime() - start) + ' ms');
	
};

GAT.SIZEOF_STRUCT_BLOCK = 20;

GAT.BlockProperties = {
	NONE: 0,
	WALKABLE: 1,
	WATER: 2,
	SNIPABLE: 4,
	CLIFF: 8
};

GAT.BlockTypes = {
	0: GAT.BlockProperties.WALKABLE,
	1: GAT.BlockProperties.NONE,
	2: GAT.BlockProperties.WATER,
	3: GAT.BlockProperties.WATER | GAT.BlockProperties.WALKABLE,
	4: GAT.BlockProperties.WATER | GAT.BlockProperties.SNIPABLE,
	5: GAT.BlockProperties.CLIFF | GAT.BlockProperties.SNIPABLE,
	6: GAT.BlockProperties.CLIFF
};