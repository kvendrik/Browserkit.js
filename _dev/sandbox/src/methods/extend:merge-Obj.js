//Extend Object
_defineMethod('extend', function(source, target){

	if(source instanceof Array){

		for(var i = 0, sourceCount = source.length; i < sourceCount; i++){

		  for(key in source[i]){

		    target[key] = source[i][key];

		  };

		}

	} else {

		for(key in source){

		  target[key] = source[key];

		};

	}

	return target;

}, false);

//Merge Objects
_defineMethod('merge', function(sources){

	if(sources instanceof Array){

		var mergedObj = {};

		for(var i = 0, sourcesCount = sources.length; i < sourcesCount; i++){

		  for(key in sources[i]){

		  	mergedObj[key] = sources[i][key];

		  };

		}

		return mergedObj;

	}

	return;

}, false);