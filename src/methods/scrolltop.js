_defineMethod('scrollTop', function(){
	var getWindowScrollTop,
		docEl;

	return function(){
		var el = this[0];

		//on first use init getWindowScrollTop vars
		if(!getWindowScrollTop){
			if(window.pageYOffset !== undefined){
				getWindowScrollTop = function(){
					return window.pageYOffset;
				};
			} else {
				if(!docEl){
					docEl = (document.documentElement || document.body.parentNode || document.body);
				}

				getWindowScrollTop = function(){
					return docEl.scrollTop;
				};
			}
		}


		if(el === window){
			return getWindowScrollTop();
		} else {
			return el.scrollTop;
		}
	};
}());