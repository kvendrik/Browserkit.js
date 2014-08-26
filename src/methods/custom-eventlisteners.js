//import Google fastbutton before Browserkit.js
//if not Browserkit won't be able to find the FastButton Object
if(typeof window.FastButton === 'function'){

	_defineMethod('click', function(handler){
		new FastButton(this[0], handler);
		return this;
	});

} else {

	_defineMethod('click', function(handler){
		this.on('click', handler);
		return this;
	});

}


//RESIZE END
_defineMethod('resizeEnd', function(handler){

	this.on('resize', function(){
		if(typeof this.resizeEndTimeout !== undefined) clearTimeout(this.resizeEndTimeout);
		this.resizeEndTimeout = setTimeout(handler, 200);
	});

	return this;

});