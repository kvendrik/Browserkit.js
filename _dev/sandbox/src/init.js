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