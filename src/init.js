/*

	Name: Browserkit.js
	Version: 1.2.0

	Author: Koen Vendrik
	License: MIT

	Dependencies: none

*/

(function(window, document, undefined){


var _defineMethod = function(name, method, proto){

	if(proto === undefined || proto === true){
		window.Browserkit.prototype[name] = method;
	} else {
		window.Browserkit[name] = method;
	}

};

window.Browserkit = function(el){
	//el can be a CSS selector or HTML element

	if( this === window ){ //IE8 does not see this === window as true
		return new Browserkit(el);
	} else {

		var elType = typeof el;

		if(elType === 'object'){

			this[0] = el;

		} else if(elType === 'string') {

			if(el.indexOf('#') === 0){ //single el
				this[0] = document.getElementById( el.replace('#','') );
			} else { //multiple el
				var allEl = el.indexOf('.') === 0 ? document.getElementsByClassName( el.replace('.','') ) : ( /^[a-zA-Z]+$/.test(el) ? document.getElementsByTagName(el) : document.querySelectorAll(el) );
				for(var i = 0, allElCount = allEl.length; i < allElCount; i++){
					this[i] = allEl[i];
				}
			}

		}

		return this;

	}

};