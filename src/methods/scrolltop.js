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