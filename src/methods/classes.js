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