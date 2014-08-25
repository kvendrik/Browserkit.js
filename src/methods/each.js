_defineMethod('each', function(handler){

	for(var prop in this){
		if( this[prop].nodeType === 1 ){
			handler(this[prop]);
		}
	}

	return this;

});