_defineMethod('click', (function(){
	var addEventToEl;

	return function(handler){

		//on first invoke check if Google FastButton should be used
		if(!addEventToEl){
			if(typeof window.FastButton === 'function'){
				addEventToEl = function(handler){
					new FastButton(this[0], handler);
				};
			} else {
				addEventToEl = function(handler){
					this.on('click', handler);
				};
			}
		}

		addEventToEl.call(this, handler);

		return this;
	};
}()));


//RESIZE END
_defineMethod('resizeEnd', function(handler){

	this.on('resize', function(){
		if(typeof this.resizeEndTimeout !== undefined) clearTimeout(this.resizeEndTimeout);
		this.resizeEndTimeout = setTimeout(handler, 200);
	});

	return this;

});