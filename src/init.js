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

var _selector = function(selector, fromEl){

	for(var i in Browserkit.prototype){ //delete all known els
		if( !isNaN(i) ) delete(Browserkit.prototype[i]);
	}

	if(selector.indexOf('#') === 0){ //single el

		Browserkit.prototype[0] = document.getElementById( selector.replace('#','') );

	} else { //multiple el

		el = selector.indexOf('.') === 0 ? fromEl.getElementsByClassName( selector.replace('.','') ) : ( /^[a-zA-Z]+$/.test(selector) ? fromEl.getElementsByTagName(selector) : fromEl.querySelectorAll(selector) );

		for(var j = 0, elCount = el.length; j < elCount; j++){
			Browserkit.prototype[j] = el[j];
		}

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

			_selector(el, document);

		}

		return this;

	}

};