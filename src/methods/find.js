_defineMethod('find', function(){
	var clearResultsInClone;

	return function(selector){

		//init function on first invoke
		if(!clearResultsInClone){
			clearResultsInClone = function(cloneObj){
				for(var prop in cloneObj){
					if(cloneObj.hasOwnProperty(prop) && !isNaN(prop)){
						cloneObj[prop] = undefined;
					}
				}
				return cloneObj;
			};
		}

		var clone = Object.create(this);

		//remove previous results
		clone = clearResultsInClone.call(this, clone);

		clone._selector(selector, this[0]);

		return clone;

	};
}());