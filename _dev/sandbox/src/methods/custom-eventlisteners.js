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