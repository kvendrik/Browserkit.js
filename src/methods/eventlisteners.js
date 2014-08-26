_defineMethod('on', function(type, handler){
	this[0].addEventListener(type, handler, false);
	return this;
});

_defineMethod('off', function(type, handler){
	this[0].removeEventListener(type, handler, false);
	return this;
});