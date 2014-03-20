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