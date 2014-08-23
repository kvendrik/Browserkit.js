//Merge Objects
//Merges multiple objects and overwrites
//objects props that are already defined
//([{name:21},{name:55,age:21}]) becomes {name:55,age:21}
_defineMethod('merge', function(sources){

	if(!(sources instanceof Array)) return;

	var mergedObj = {};
	for(var i = 0, sourcesCount = sources.length; i < sourcesCount; i++){

	  for(var key in sources[i]){
	  	if(sources[i].hasOwnProperty(key)){
	  		mergedObj[key] = sources[i][key];
	  	}
	  }

	}

	return mergedObj;

}, false);