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
		Browserkit.prototype[name] = method;
	} else {
		Browserkit[name] = method;
	}

};

var Browserkit = function(el){
	//el can be a CSS selector or HTML element

	if( this === window ){
		return new Browserkit(el);
	} else {

		var elType = typeof el;

		if(elType === 'object'){

			this[0] = el;

		} else if(elType === 'string') {


			if(el.indexOf('#') === 0){ //single el

				this[0] = document.getElementById( el.replace('#','') );

			} else { //multiple el

				el = el.indexOf('.') === 0 ? document.getElementsByClassName( el.replace('.','') ) : ( /^[a-zA-Z]+$/.test(el) ? document.getElementsByTagName(el) : document.querySelectorAll(el) );

				for(var i = 0, elCount = el.length; i < elCount; i++){
					this[i] = el[i];
				}

			}


		}

		return this;

	}

};

_defineMethod('_selector', function(selector, fromEl){

	if(selector.indexOf('#') === 0){ //single el

		this[0] = document.getElementById( selector.replace('#','') );

	} else { //multiple el

		el = selector.indexOf('.') === 0 ? fromEl.getElementsByClassName( selector.replace('.','') ) : ( /^[a-zA-Z]+$/.test(selector) ? fromEl.getElementsByTagName(selector) : fromEl.querySelectorAll(selector) );

		for(var i = 0, elCount = el.length; i < elCount; i++){
			this[i] = el[i];
		}

	}

});