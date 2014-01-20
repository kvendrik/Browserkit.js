/*
// @name: Browserkit
// @version: 1.0
// 
// Copyright 2014 Koen Vendrik, http://kvendrik.com
// Licensed under the MIT license
*/

////////POLYFILLS////////

//Array.indexOf
if(typeof Array.prototype.indexOf !== 'function'){

	Array.prototype.indexOf = function(keyword){

		for(var i = 0, arrayLength = this.length; i < arrayLength; i++){

			if(this[i] === keyword){
				return i;
			}

		}

		return -1;

	}

}


//document.querySelector
//if(typeof document.querySelector !== 'function'){

	document.querySelector = function(elQuery){

		var getEl = function(querySelector, token, attrName, selectorOnly){

			if(selectorOnly !== undefined){

				var el = document.getElementsByTagName(querySelector)[0];
				return el !== undefined ? el : null;

			} else {

				var query = querySelector.split(token),
				selector = query[0] === '' ? '*' : query[0],
				attr = query[1],

				allEl = document.getElementsByTagName(selector);

				var cond;
				if(attrName === 'class'){
					cond = function(el){ return el.className.split(' ').indexOf(attr) !== -1 ? 1 : 0; };
				} else {
					cond = function(el){ return el.getAttribute(attrName) === attr ? 1 : 0; };
				}

				for(var i = 0, elCount = allEl.length; i < elCount; i++) {
					
					var el = allEl[i];

					if(cond(el) === 1){
						return el;
						break;
					}

				};

				return null;

			}

		};

		//if selector has id
		if(elQuery.indexOf('#') !== -1){

			//if only id
			if(elQuery.indexOf('#') === 0){

				return document.getElementById(elQuery.replace('#', ''));

			//if has selector
			} else {

				return getEl(elQuery, '#', 'id');

			}

		//if selector has class
		} else if(elQuery.indexOf('.') !== -1) {

			//if only class
			if(elQuery.indexOf('.') === 0){

				return getEl(elQuery, '.', 'class');

			//if has selector
			} else {

				return getEl(elQuery, '.', 'class');

			}

		//if query only has selector
		} else {

			return getEl(elQuery, '', '', 1);

		}

	};

//}


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


(function(){


	this.Browserkit = function(el){

		if(this === window){

			return new Browserkit(el);

		} else {

			var elType = typeof el;

			if(elType === 'object'){

				this.el = el;

			} else if(elType === 'string') {

				this.el = document.querySelector(el);

			}

			return this;

		}

	};


	////////CLASSES////////

	this.Browserkit.prototype._ClassesBase = function(className, pushBool){

		var el = this.el,
		classes = el.className.split(' ');

		if(pushBool === 1){ 

			classes.push(className); 

		} else { 

			var index = classes.indexOf(className); 
			if(index !== -1){
				classes.splice(index, 1);
			}

		}

		el.className = classes.join(' ');

	};

	this.Browserkit.prototype.hasClass = function(className){

		return this.el.className.split(' ').indexOf(className) !== -1 ? this : 0;

	};

	this.Browserkit.prototype.addClass = function(className){

		//only add if class is not already there
		if(this.hasClass(className) === 0){
			this._ClassesBase(className, 1);
		}
		return this;
	
	};

	this.Browserkit.prototype.removeClass = function(className){

		//only remove is class is there
		if(this.hasClass(className) !== 0){
			this._ClassesBase(className, 0);
		}
		return this;

	};

	this.Browserkit.prototype.toggleClass = function(className){

		if(this.hasClass(className) !== 0){

			this.removeClass(className);

		} else {

			this.addClass(className);

		}

		return this;

	};


	////////EVENT LISTENERS////////

	if(typeof window.addEventListener === 'function'){

		this.Browserkit.prototype.addEvent = function(event, handler){
			this.el.addEventListener(event, handler, false);
			return this;
		};

		this.Browserkit.prototype.detachEvent = function(event, handler){
			this.el.removeEventListener(event, handler, false);
			return this;
		};

	} else if(typeof window.attachEvent === 'function') {

		this.Browserkit.prototype.addEvent = function(event, handler){
			this.el.attachEvent('on'+event, handler, false);
			return this;
		};

		this.Browserkit.prototype.detachEvent = function(event, handler){
			this.el.detachEvent('on'+event, handler, false);
			return this;
		};

	} else {

		this.Browserkit.prototype.addEvent = function(event, handler){
			this.el['on'+event] = handler;
			return this;
		};

		this.Browserkit.prototype.detachEvent = function(event, handler){
			this.el['on'+event] = null;
			return this;
		};

	}


	////////EVENTS - CUSTOM HANDLERS////////

	//CLICK (uses google fastbutton)
	this.Browserkit.prototype.click = function(handler){

		if(typeof window.FastButton === 'function'){
			new FastButton(this.el, handler);
		} else {
			this.addEvent('click', handler);
		}

		return this;

	};


	//RESIZE END
	this.Browserkit.prototype.resizeEnd = function(handler){

		this.addEvent('resize', function(){
			if(typeof this.resizeEndTimeout !== undefined) clearTimeout(this.resizeEndTimeout);
			this.resizeEndTimeout = setTimeout(handler, 200);
		});

		return this;

	};


	this.B = Browserkit;

})(this);