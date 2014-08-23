_defineMethod('each', function(handler){

	for(var prop in this){
		if( this.hasOwnProperty(prop) ){
			handler(this[prop]);
		}
	}

	return this;

});