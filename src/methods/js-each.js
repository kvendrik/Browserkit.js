_defineMethod('each', function(obj, handler){

	if(obj instanceof Array){
		for(var i = 0, count = obj.length; i < count; i++){
			handler(i);
		}
	} else if(obj instanceof Object){
		for(var i in obj){
			if(obj.hasOwnProperty(i)){
				handler(i);
			}
		}
	}

	return this;

}, false);