//Extends Objects
//Extends target object with multiple other given objects and overwrites props that are already defined
//{city:'Nijmegen'},{name:21},{name:55,age:21} becomes {city:'Nijmegen', name:55, age:21}
_defineMethod('extend', function(){

	var args = arguments;

	for(var i = 1, argsCount = args.length; i < argsCount; i++){

	  for(var key in args[i]){
	  	if(args[i].hasOwnProperty(key)){
	  		args[0][key] = args[i][key];
	  	}
	  }

	}

	return args[0];

}, false);