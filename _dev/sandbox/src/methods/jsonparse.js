	if(typeof JSON !== 'object'){

		_defineMethod('parseJSON', function(string){

			return ( new Function('return '+string) )();

		}, false);

		_defineMethod('stringifyJSON', function(obj){

			return ''+obj;

		}, false);

	} else {

		_defineMethod('parseJSON', function(string){

			return JSON.parse(string);

		}, false);

		_defineMethod('stringifyJSON', function(obj){

			return JSON.stringify(obj);

		}, false);

	}