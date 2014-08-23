if(typeof window.addEventListener === 'function'){

	_defineMethod('on', function(type, handler){
		this[0].addEventListener(type, handler, false);
		return this;
	});

	_defineMethod('off', function(type, handler){
		this[0].removeEventListener(type, handler, false);
		return this;
	});

} else if(typeof window.attachEvent === 'function') {

	_defineMethod('on', function(type, handler){
		this[0].attachEvent('on'+type, handler);
		return this;
	});

	_defineMethod('off', function(type, handler){
		this[0].detachEvent('on'+type, handler);
		return this;
	});

} else {

	_defineMethod('on', function(type, handler){
		this[0]['on'+type] = handler;
		return this;
	});

	_defineMethod('off', function(type, handler){
		this[0]['on'+type] = null;
		return this;
	});

}