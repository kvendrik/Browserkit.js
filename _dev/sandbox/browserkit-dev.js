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

//document.querySelector
if(typeof document.querySelector !== 'function'){

  // Selectors API Level 1 (http://www.w3.org/TR/selectors-api/)
  // http://ajaxian.com/archives/creating-a-queryselector-for-ie-that-runs-at-native-speed

	document.querySelectorAll = function(selector){

        var head = document.documentElement.firstChild;
        var styleTag = document.createElement("STYLE");
        head.appendChild(styleTag);
        document.__qsResult = [];
        
        styleTag.styleSheet.cssText = selector + "{x:expression(document.__qsResult.push(this))}";
        window.scrollBy(0, 0);
        head.removeChild(styleTag);
        
        var result = [];
        for (var i in document.__qsResult)
            result.push(document.__qsResult[i]);
        return result;

	};

	document.querySelector = function(selectors){

      var elements = document.querySelectorAll(selectors);
      return (elements.length !== 0) ? elements[0] : null;

	};

}

(function(window, document, undefined){


var _defineMethod = function(name, method, proto){

	if(proto === undefined || proto === true){

		return window.Browserkit.prototype[name] = method;

	} else {

		return window.Browserkit[name] = method;

	}

};

window.Browserkit = function(el){

	if(this === window || typeof this.addClass !== 'function'){
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

//Not a class function - doesn't use any of the classes variables
_defineMethod('ajax', function(settings){

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
				rtrnData = Browserkit.parseJSON(responseString);
			} else {
				rtrnData = responseString;
			}

			settings.success(rtrnData);

		}
	};

	var requestType;
	if(settings.type !== undefined && settings.type.toLowerCase() === 'post'){

		requestType = 'POST';

	} else {

		requestType = 'GET';

	} 

	httpRequest.open(requestType, settings.url, true);

	if(requestType === 'POST'){
		httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	}
	
	httpRequest.send(settings.data);
	
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

			return this.el.classList.contains(className) !== false ? this : 0;

		});

		_defineMethod('addClass', function(className){

			this.el.classList.add(className);
			return this;

		});

		_defineMethod('removeClass', function(className){

			this.el.classList.remove(className);
			return this;

		});

		_defineMethod('toggleClass', function(className){

			this.el.classList.toggle(className);
			return this;

		});

	} else {

		_defineMethod('_ClassesBase', function(el, className, pushBool){

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

		});

		_defineMethod('hasClass', function(className){

			return this.el.className.split(' ').indexOf(className) !== -1 ? this : 0;

		});

		_defineMethod('addClass', function(className){

			//only add if class is not already there
			if(this.hasClass(className) === 0){
				this._ClassesBase(this.el, className, 1);
			}
			return this;

		});

		_defineMethod('removeClass', function(className){

			//only remove is class is there
			if(this.hasClass(className) !== 0){
				this._ClassesBase(this.el, className, 0);
			}
			return this;

		});

		_defineMethod('toggleClass', function(className){

			if(this.hasClass(className) !== 0){

				this.removeClass(className);

			} else {

				this.addClass(className);

			}

			return this;

		});

	}

	//import google fastbutton before Browserkit.js
	//if not Browserkit won't find the FastButton Object
	if(typeof window.FastButton === 'function'){

		_defineMethod('click', function(handler){

			new FastButton(this.el, handler);
			return this;

		});

	} else {

		_defineMethod('click', function(handler){

			this.addEvent('click', handler);
			return this;

		});

	}


	//RESIZE END
	_defineMethod('resizeEnd', function(handler){

		this.addEvent('resize', function(){
			if(typeof this.resizeEndTimeout !== undefined) clearTimeout(this.resizeEndTimeout);
			this.resizeEndTimeout = setTimeout(handler, 200);
		});

		return this;

	});

	if(typeof window.addEventListener === 'function'){

		_defineMethod('addEvent', function(event, handler){
			this.el.addEventListener(event, handler, false);
			return this;
		});

		_defineMethod('detachEvent', function(event, handler){
			this.el.removeEventListener(event, handler, false);
			return this;
		});

	} else if(typeof window.attachEvent === 'function') {

		_defineMethod('addEvent', function(event, handler){
			this.el.attachEvent('on'+event, handler, false);
			return this;
		});

		_defineMethod('detachEvent', function(event, handler){
			this.el.detachEvent('on'+event, handler, false);
			return this;
		});

	} else {

		_defineMethod('addEvent', function(event, handler){
			this.el['on'+event] = handler;
			return this;
		});

		_defineMethod('detachEvent', function(event, handler){
			this.el['on'+event] = null;
			return this;
		});

	}

//Extend Object
_defineMethod('extend', function(source, target){

	if(source instanceof Array){

		for(var i = 0, sourceCount = source.length; i < sourceCount; i++){

		  for(key in source[i]){

		    target[key] = source[i][key];

		  };

		}

	} else {

		for(key in source){

		  target[key] = source[key];

		};

	}

	return target;

}, false);

//Merge Objects
_defineMethod('merge', function(sources){

	if(sources instanceof Array){

		var mergedObj = {};

		for(var i = 0, sourcesCount = sources.length; i < sourcesCount; i++){

		  for(key in sources[i]){

		  	mergedObj[key] = sources[i][key];

		  };

		}

		return mergedObj;

	}

	return;

}, false);

_defineMethod('html', function(html){

	return this.el.innerHTML = html;

});

	if(typeof JSON !== 'object'){

		_defineMethod('parseJSON', function(string){

			return ( new Function('return '+string) )();

		}, false);

		_defineMethod('stringifyJSON', function(obj){

			return ''+obj;

		}, false);

	} else {

		_defineMethod('parseJSON', function(string){

			return JSON.parse(string);

		}, false);

		_defineMethod('stringifyJSON', function(obj){

			return JSON.stringify(obj);

		}, false);

	}

	_defineMethod('serialize', function(){

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

	});

_defineMethod('setInterval', function(handler, delay){

  handler();

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

  			Browserkit.setInterval(handler, delay, true);

  		}, delay);

}, false);

	this.B = Browserkit;

})(this, this.document);