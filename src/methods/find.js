_defineMethod('find', function(selector){

	this._selector(selector, this[0]);

	return this;

});