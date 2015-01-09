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

_defineMethod('ajax', function(settings){

	var httpRequest = new XMLHttpRequest(),
		data = settings.data,
		dataType = settings.dataType;

	httpRequest.onreadystatechange = function(){
		if(httpRequest.readyState === 4 && httpRequest.status === 200){

			var responseString = httpRequest.responseText;

			var rtrnData;
			if(dataType === 'json'){
				try {
					rtrnData = JSON.parse(responseString);
				} catch(err){
					rtrnData = responseString;
				}
			} else {
				rtrnData = responseString;
			}

			if(typeof settings.success === 'function'){
				settings.success(rtrnData, httpRequest);
			}

		}
	};

	var requestType = settings.type !== undefined ? settings.type.toUpperCase() : 'GET',
		postTypes = ['POST', 'PUT', 'DELETE'];

	httpRequest.open(requestType, settings.url, true);

	if(postTypes.indexOf(requestType) !== -1){
		if(typeof data === 'object'){
			httpRequest.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
		} else {
			httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		}
	}

	if(dataType === 'json' && typeof data === 'object' && !Array.isArray(data)){
		data = JSON.stringify(data);
	}

	httpRequest.send(data);

}, false);

_defineMethod('getJSON', function(url, success){

	return Browserkit.ajax({
		dataType: 'json',
		url: url,
		success: success
	});

}, false);

if(typeof document.documentElement.classList === 'object'){

	_defineMethod('hasClass', function(className){
		return this[0].classList.contains(className) !== false ? this : false;
	});

	_defineMethod('addClass', function(className){
		this[0].classList.add(className);
		return this;
	});

	_defineMethod('removeClass', function(className){
		this[0].classList.remove(className);
		return this;
	});

	_defineMethod('toggleClass', function(className){
		this[0].classList.toggle(className);
		return this;
	});

} else {

	_defineMethod('_ClassesBase', function(el, className, pushBool){

		var classes = el.className.split(' ');

		if(pushBool){
			classes.push(className);
		} else {
			var index = classes.indexOf(className);
			if(index !== -1){
				classes.splice(index, 1);
			}
		}

		el.className = classes.join(' ');

	});

	_defineMethod('hasClass', function(className){

		return this[0].className.split(' ').indexOf(className) !== -1 ? this : false;

	});

	_defineMethod('addClass', function(className){

		//only add if class is not already there
		if(!this.hasClass(className)){
			this._ClassesBase(this[0], className, true);
		}
		return this;

	});

	_defineMethod('removeClass', function(className){

		//only remove is class is there
		if(this.hasClass(className)){
			this._ClassesBase(this[0], className, false);
		}
		return this;

	});

	_defineMethod('toggleClass', function(className){

		if(this.hasClass(className)){
			this.removeClass(className);
		} else {
			this.addClass(className);
		}

		return this;

	});

}

(function(_defineMethod){

	var addEventToEl;

	_defineMethod('click', function(handler){

		//on first invoke check if Google FastButton should be used
		if(!addEventToEl){
			if(typeof window.FastButton === 'function'){
				addEventToEl = function(handler){
					new FastButton(this[0], handler);
				};
			} else {
				addEventToEl = function(handler){
					this.on('click', handler);
				};
			}
		}

		addEventToEl.call(this, handler);

		return this;
	});

}(_defineMethod));


//RESIZE END
_defineMethod('resizeEnd', function(handler){

	this.on('resize', function(){
		if(typeof this.resizeEndTimeout !== undefined) clearTimeout(this.resizeEndTimeout);
		this.resizeEndTimeout = setTimeout(handler, 200);
	});

	return this;

});

_defineMethod('each', function(handler){

	for(var prop in this){
		if(this[prop].nodeType === 1){
			handler(this[prop]);
		}
	}

	return this;

});

_defineMethod('on', function(type, handler){
	this[0].addEventListener(type, handler, false);
	return this;
});

_defineMethod('off', function(type, handler){
	this[0].removeEventListener(type, handler, false);
	return this;
});

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

(function(_defineMethod){

	var clearResultsInClone;

	_defineMethod('find', function(selector){

		//init function on first invoke
		if(!clearResultsInClone){
			clearResultsInClone = function(cloneObj){
				for(var prop in cloneObj){
					if(!isNaN(prop)){
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

	});

}(_defineMethod));

_defineMethod('forEach', function(obj, handler){

	if(Array.isArray(obj)){

		obj.forEach(handler);

	} else if(typeof obj === 'object'){

		for(var i in obj){
			if(obj.hasOwnProperty(i)){
				handler( obj[i], i, obj ); //value, index, array
			}
		}

	}

}, false);

_defineMethod('setInterval', function(handler, delay){

    //init intervalCache to store interval ID's
    if(typeof this._intervalCache !== 'object'){
        this._intervalCache = {
            currNextIdx: 0,
            availableIdxs: [],
            cache: {}
        };
    }

    var intervalCache = this._intervalCache,
        cache = intervalCache.cache,
        availableIdxs = intervalCache.availableIdxs,
        newId;

    //check if there are idxs available
    //this because this will re-use unused
    //array spaces which prevents the cache object
    //from getting too big
    if(availableIdxs.length > 0){
        //space available
        newId = availableIdxs[0];
        availableIdxs.splice(0, 1);
    } else {
        newId = intervalCache.currNextIdx++;
    }

    //save a space for the new id
    cache[newId] = 0;

    var setSafeInterval = function(handler, delay){
        if(typeof cache[newId] !== 'number') return;

        //user calls the method
        //a setTimout with ID 1 is returned
        return setTimeout(function(){

            //if the previous interval is not cleared
            //the id count will continue in order

            //problem here is that the user only has reference
            //to the setTimout with ID 1
            //setTimeout with ID 1 has already been triggered
            //and the current ID can be already 10
            //this makes it impossble to clear the correct Interval
            //solution is to keep track of the current id

            handler();
            cache[newId] = setSafeInterval(handler, delay);

        }, delay);

    };

    cache[newId] = setSafeInterval(handler, delay);

    return newId;

}, false);

_defineMethod('clearInterval', function(intervalId){

    if(typeof this._intervalCache === 'object'){
        var intervalCache = this._intervalCache,
            cache = intervalCache.cache,
            originalId = cache[intervalId];

        if(typeof originalId === 'number'){
            cache[intervalId] = undefined;
            intervalCache.availableIdxs.push(intervalId);
            return window.clearTimeout(originalId);
        }
    }

}, false);

(function(_defineMethod){
	
	var getWindowScrollTop,
		docEl;

	_defineMethod('scrollTop', function(newY){
		var el = this[0];

		//on first use init docEl and getWindowScrollTop vars
		if(!docEl){
			docEl = (document.documentElement || document.body.parentNode || document.body);
		}

		if(!getWindowScrollTop){
			if(window.pageYOffset !== undefined){
				getWindowScrollTop = function(){
					return window.pageYOffset;
				};
			} else {
				getWindowScrollTop = function(){
					return docEl.scrollTop;
				};
			}
		}

		if(newY){
			if(el === window){
				el.scrollTo(0, newY);
			} else {
				el.scrollTop = newY;
			}
			return this;
		} else {
			if(el === window){
				return getWindowScrollTop();
			} else {
				return el.scrollTop;
			}
		}
	});

}(_defineMethod));

_defineMethod('serialize', function(){

	var form = this[0],
	inputs = form.getElementsByTagName('input'),
	textareas = form.getElementsByTagName('textarea'),
	output = '',
	i;

	for (i = inputs.length - 1; i >= 0; i--) {

		var input = inputs[i],
		type = input.getAttribute('type');

		if( type === 'radio' || type === 'checkbox' ){
			if(input.checked === true){
				output += input.name+'='+input.value+'&';
			}
		} else {
			output += input.name+'='+input.value+'&';
		}

	}

	for (i = textareas.length - 1; i >= 0; i--) {

		var textarea = textareas[i];
		output += textarea.name+'='+textarea.value+'&';

	}

	output = output.slice(0, -1);

	return output;

});

	Browserkit.fn = Browserkit.prototype;

	window.Browserkit = Browserkit;
	window.B = Browserkit;

})(this, this.document);