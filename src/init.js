/*

	Name: Browserkit.js (http://github.com/kvendrik/Browserkit.js)
	Version: 1.0.0

	Author: Koen Vendrik
	License: BSD-2-Clause

	Dependencies: none

*/

(function(window, document, undefined){

	'use strict';


var _defineMethod = function(name, method, proto){

	if(proto || proto === undefined){
		Browserkit.prototype[name] = method;
	} else {
		Browserkit[name] = method;
	}

};

var Browserkit = function(el){
	//el can be a CSS selector or HTML element

	if( this === window || this === undefined ){
		return new Browserkit(el);
	} else {

		var elType = typeof el;

		if(elType === 'object'){

			if(el[1] && el[1].nodeType === 1){

				for(var i = 0, elCount = el.length; i < elCount; i++){
					this[i] = el[i];
				}

			} else {
				this[0] = el;
			}

		} else if(elType === 'string') {

			this._selector(el, document);

		}

		return this;

	}

};

_defineMethod('_selector', function(selector, fromEl){

	if(selector.indexOf('#') === 0){ //single el

		this[0] = document.getElementById( selector.replace('#','') );

	} else { //multiple el

		var el = selector.indexOf('.') === 0 ? fromEl.getElementsByClassName( selector.replace('.','') ) : ( /^[a-zA-Z]+$/.test(selector) ? fromEl.getElementsByTagName(selector) : fromEl.querySelectorAll(selector) );

		for(var i = 0, elCount = el.length; i < elCount; i++){
			this[i] = el[i];
		}

	}

});