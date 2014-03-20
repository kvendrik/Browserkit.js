//Array.indexOf
if(typeof Array.prototype.indexOf !== 'function'){

	Array.prototype.indexOf = function(keyword){

		for(var i = 0, arrayLength = this.length; i < arrayLength; i++){

			if(this[i] === keyword){
				return i;
			}

		}

		return -1;

	};

}