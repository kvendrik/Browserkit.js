_defineMethod('forEach', function(obj, handler){

	if(Array.isArray(obj)){

		obj.forEach(handler);

	} else if(typeof obj === 'object'){

		for(var i in obj){
			if(obj.hasOwnProperty(i)){
				handler( obj[i], i, obj ); //value, index, array
			}
		}

	}

	return this;

}, false);