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