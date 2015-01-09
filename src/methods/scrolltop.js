(function(_defineMethod){
	
	var getWindowScrollTop,
		docEl;

	_defineMethod('scrollTop', function(){
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
	});

}(_defineMethod));