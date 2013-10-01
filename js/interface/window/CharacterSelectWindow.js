var CharacterSelectWindow = function() {
	
	BaseWindow.call( this, 576, 358 );
	
	this.addBitmap( PathHelper.getResPathLoginInterface("win_select2"), 0 );
	this.addBitmap( PathHelper.getResPathLoginInterface("box_select"), 1 );
	
	this.draggable = true;
	this.numSlots = 3;
	
	this.__dispAttrs = [ 
		'name', 'job', 'level',
		'exp', 'hp', 'sp',
		'Str', 'Agi', 'Vit',
		'Int', 'Dex', 'Luk'
	];
	
	this.__attrDim = [ 90, 16 ];
	this.__slotPos = [ [ 55, 40 ], [ 218, 40 ], [ 382, 40 ] ];
	this.__slot = null;
	this.__charComponents = [];
	this.__attrLabels = [];
	
	// Setup labels
	
	var baseX = 68, baseY = 204;
	var offsetX = 0, offsetY = 0;
	
	for( var i = 0; i < this.__dispAttrs.length; i++ ) {
		
		if( i > 0 && i % 6 == 0 ) {
			offsetY = 0;
			offsetX += 145;
		}
		
		var label = new CanvasTextfield( this.__attrDim[0], this.__attrDim[1] );
		
		//label.data = this.__dispAttrs[i];
		
		this.__attrLabels.push( label );
		
		this.addComponent( label, '0px', '0px', baseX + offsetX, baseY + offsetY );
		
		offsetY += this.__attrDim[1];
		
	};
	
	// mapname
	label = new CanvasTextfield( 180, 16 );
	this.__attrLabels.push( label );	
	this.addComponent( label, '0px', '0px', 68, 300 );
	
	// Buttons
	
	var buttonSelect = new InputButton( Interface.Button.Select, 42, 20 );
	
	buttonSelect.addListener( this );
	
	buttonSelect.addBitmap( PathHelper.getResPathLoginInterface("btn_ok"), 0 );
	buttonSelect.addBitmap( PathHelper.getResPathLoginInterface("btn_ok_a"), 1 );
	buttonSelect.addBitmap( PathHelper.getResPathLoginInterface("btn_ok_b"), 2 );
	
	this.addComponent( buttonSelect, InterfaceAlignment.Right, InterfaceAlignment.Bottom, -50, -4 );
	
	var buttonCancel = new InputButton( Interface.Button.Cancel, 42, 20 );
	
	buttonCancel.addListener( this );
	
	buttonCancel.addBitmap( PathHelper.getResPathLoginInterface("btn_cancel"), 0 );
	buttonCancel.addBitmap( PathHelper.getResPathLoginInterface("btn_cancel_a"), 1 );
	buttonCancel.addBitmap( PathHelper.getResPathLoginInterface("btn_cancel_b"), 2 );
	
	this.addComponent( buttonCancel, InterfaceAlignment.Right, InterfaceAlignment.Bottom, -4, -4 );
	
};

CharacterSelectWindow.prototype = Object.create( BaseWindow.prototype );

CharacterSelectWindow.prototype.__onEvent = function( obj ) {
	
	if( obj instanceof CharacterComponent ) {
		
		this.__slot = obj.__charInfo.CharNum;
		
		if( !obj.__empty ) {
			// Display attributes
			for( var i = 0; i < this.__attrLabels.length; i++ ) {
				// Set __data directly, click event refreshes anyway...
				this.__attrLabels[i].__data 
					= obj.__charInfo[ this.__dispAttrs[i] ];
			}
			
			// mapname
			this.__attrLabels[12].__data = obj.__charInfo[ 'lastMap' ];
		}
		
		
	} else if( obj instanceof InputButton ) {
		
		this.onEvent({
			window: this,
			action: obj.__event,
			charId: this.__slot
		});
		
	}
	
};

CharacterSelectWindow.prototype.draw = function( context, sx, sy ) {

	// Draw the characters in the three first slots
	for( var i = 0; i < 3; i++ ) {
		if( this.__charComponents[i] !== undefined ) {
			this.__charComponents[i].__visible = true;
		}
	}
	
	context.fillStyle = "black";
	
	BaseWindow.prototype.draw.call( this, context, sx, sy );
	
	if( this.__slot !== null && this.__ready && this.__bitmaps.length > 1 ) {
		
		var selected_position = this.__slotPos[ this.__slot % 3 ];
		
		context.drawImage(
			this.__bitmaps[1],
			sx + selected_position[0],
			sy + selected_position[1]
		);
	
	}

};

CharacterSelectWindow.prototype.addCharacter = function( charInfo ) {
	
	var roChar = new CharacterComponent( charInfo );
	
	roChar.__visible = false;
	roChar.addListener( this );
	
	var pos = this.__slotPos[ charInfo.CharNum % 3 ];
	
	this.__charComponents[ charInfo.CharNum ] = roChar;
	this.addComponent( roChar, null, null, pos[0], pos[1] );
	
	this.refresh();
	
};
