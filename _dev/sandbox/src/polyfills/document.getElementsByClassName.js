//document.getElementsByClassName
if(typeof document.getElementsByClassName !== 'function'){

	document.getElementsByClassName = function(className){

		//get all elements on page
		var allEl = document.getElementsByTagName('*'),

		//create array to store elements
		els = [];

		//loop all elements on page
		for (var i = 0, allElCount = allEl.length; i < allElCount; i++) {

			//if element has className class
			if(allEl[i].className.split(' ').indexOf(className) !== -1){

				//push element into array
				els.push(allEl[i]);

			}

		}

		return els;

	};

}