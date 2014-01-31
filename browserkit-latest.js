/*
// @name: Browserkit.js
// @version: 1.1
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

	};

}


//document.querySelector
if(typeof document.querySelector !== 'function'){

	var _querySelectorBase = function(elQuery, getAll){

		var getAll = getAll !== undefined && getAll !== 0 ? 1 : 0,
		getEl = function(querySelector, token, attrName, selectorOnly){

			if(selectorOnly !== undefined && selectorOnly !== 0){

				var el = document.getElementsByTagName(querySelector);
				return el !== undefined ? getAll === 1 ? el : el[0] : null;

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

				if(getAll === 1){
					var elArray = [];
				}
				for(var i = allEl.length -1; i >= 0; i--) {
					
					var el = allEl[i];

					if(cond(el) === 1){

						if(getAll === 0){
							return el;
							break;
						} else {
							elArray.push(el);
							continue;
						}

					}

				};

				if(getAll === 1 && elArray.length > 0){
					return elArray;
				} else {
					return null;
				}

			}

		};

		//if selector has id
		var idIdx = elQuery.indexOf('#'),
		classIdx = elQuery.indexOf('.');
		if(idIdx !== -1){

			//if only id
			if(idIdx === 0){

				return document.getElementById(elQuery.replace('#', ''));

			//if has selector
			} else {

				return getEl(elQuery, '#', 'id');

			}

		//if selector has class
		} else if(classIdx !== -1) {

			//if only class
			if(classIdx === 0){

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


	document.querySelector = function(elQuery){

		return _querySelectorBase(elQuery, 0);

	};

	document.querySelectorAll = function(elQuery){

		return _querySelectorBase(elQuery, 1);

	};

}


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


	//INIT////////////////////////////////////////////////////////////////////////////////

	this.Browserkit = function(el){

		if(this === window || typeof this._ClassesBase !== 'function'){
		//IE6 returns object instead of window on init

			return new Browserkit(el);

		} else {

			var elType = typeof el,
			el;
			
			if(elType === 'object'){

				this.el = el;

			} else if(elType === 'string') {

				this.el = document.querySelector(el);

			}

			return this;

		}

	};


	//CLASSES////////////////////////////////////////////////////////////////////////////////

	this.Browserkit.prototype._ClassesBase = function(el, className, pushBool){

		var classes = el.className.split(' ');

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
			this._ClassesBase(this.el, className, 1);
		}
		return this;
	
	};

	this.Browserkit.prototype.removeClass = function(className){

		//only remove is class is there
		if(this.hasClass(className) !== 0){
			this._ClassesBase(this.el, className, 0);
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


	//EVENT LISTENERS////////////////////////////////////////////////////////////////////////////////

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


	//CLICK (uses google fastbutton)////////////////////////////////////////////////////////////////////////////////
	//import google fastbutton before Browserkit.js
	//if not Browserkit won't find the FastButton Object
	if(typeof window.FastButton === 'function'){

		this.Browserkit.prototype.click = function(handler){

			new FastButton(this.el, handler);
			return this;

		};

	} else {

		this.Browserkit.prototype.click = function(handler){

			this.addEvent('click', handler);
			return this;

		};

	}


	//RESIZE END////////////////////////////////////////////////////////////////////////////////
	this.Browserkit.prototype.resizeEnd = function(handler){

		this.addEvent('resize', function(){
			if(typeof this.resizeEndTimeout !== undefined) clearTimeout(this.resizeEndTimeout);
			this.resizeEndTimeout = setTimeout(handler, 200);
		});

		return this;

	};


	//SERIALIZE FORM////////////////////////////////////////////////////////////////////////////////
	this.Browserkit.prototype.serialize = function(){

		var form = this.el,
		inputs = form.getElementsByTagName('input'),
		textareas = form.getElementsByTagName('textarea'),
		output = '';

		for (var i = inputs.length - 1; i >= 0; i--) {

			var input = inputs[i],
			type = input.getAttribute('type');
			
			if( type === 'radio' || type === 'checkbox' ){
				if(input.getAttribute('checked') !== null){
					output += input.name+'='+input.value+'&';
				}
			} else {
				output += input.name+'='+input.value+'&';
			}

		};

		for (var i = textareas.length - 1; i >= 0; i--) {

			var textarea = textareas[i];
			output += textarea.name+'='+textarea.value+'&';

		};

		output = output.slice(0, -1);

		return output;

	};

	//AJAX////////////////////////////////////////////////////////////////////////////////

	//Not a class function - doesn't use any of the classes variables
	this.Browserkit.ajax = function(settings){
	
		var httpRequest;
		//Android <2.3 sees XMLHttpRequest as an object
		if(typeof window.XMLHttpRequest === 'function' || typeof window.XMLHttpRequest === 'object'){
			httpRequest = new XMLHttpRequest();
		} else { //IE 5/6
			httpRequest = new ActiveXObject('Microsoft.XMLHTTP');
		}

		httpRequest.onreadystatechange = function(){
			if(httpRequest.readyState === 4 && httpRequest.status === 200){
				
				var responseString = httpRequest.responseText,
				rtrnData;
				if(settings.dataType === 'json'){
					rtrnData = this.Browserkit.parseJSON(responseString);
				} else {
					rtrnData = responseString;
				}

				settings.success(rtrnData);

			}
		}

		httpRequest.open('POST', settings.url, true);
		httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		httpRequest.send(settings.data);
		
	};


	//JSON////////////////////////////////////////////////////////////////////////////////

	if(typeof JSON !== 'object' || typeof JSON.parse !== 'function'){

		this.Browserkit.parseJSON = function(string){

			string = string.replace('{', '').replace('}', '').replace(/\"/g, '');

			var lines = string.split(',');

			var object = {};
			for (var i = lines.length - 1; i >= 0; i--) {

				var keyVal = lines[i].split(':');
				object[keyVal[0]] = keyVal[1];
			
			};

			return object;

		};

	} else {

		this.Browserkit.parseJSON = function(string){

			return JSON.parse(string);

		};

	}


	this.B = Browserkit;

})(this);