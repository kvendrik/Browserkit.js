//document.querySelector
if(typeof document.querySelector !== 'function'){

	var _querySelectorBase = function(elQuery, getAll){

		var getAll = getAll !== undefined && getAll !== 0 ? 1 : 0,
		getEl = function(querySelector, token, attrName, selectorOnly){

			if(selectorOnly !== undefined && selectorOnly !== 0){

				var el = document.getElementsByTagName(querySelector);
				return el !== undefined ? getAll === 1 ? el : el[0] : null;

			} else {

				var query = querySelector.split(token),
				selector = query[0] === '' ? '*' : query[0],
				attr = query[1],

				allEl = document.getElementsByTagName(selector);

				var cond;
				if(attrName === 'class'){
					cond = function(el){ return el.className.split(' ').indexOf(attr) !== -1 ? 1 : 0; };
				} else {
					cond = function(el){ return el.getAttribute(attrName) === attr ? 1 : 0; };
				}

				if(getAll === 1){
					var elArray = [];
				}
				for(var i = allEl.length -1; i >= 0; i--) {
					
					var el = allEl[i];

					if(cond(el) === 1){

						if(getAll === 0){
							return el;
							break;
						} else {
							elArray.push(el);
							continue;
						}

					}

				};

				if(getAll === 1 && elArray.length > 0){
					return elArray;
				} else {
					return null;
				}

			}

		};

		//if selector has id
		var idIdx = elQuery.indexOf('#'),
		classIdx = elQuery.indexOf('.');
		if(idIdx !== -1){

			//if only id
			if(idIdx === 0){

				return document.getElementById(elQuery.replace('#', ''));

			//if has selector
			} else {

				return getEl(elQuery, '#', 'id');

			}

		//if selector has class
		} else if(classIdx !== -1) {

			//if only class
			if(classIdx === 0){

				return getEl(elQuery, '.', 'class');

			//if has selector
			} else {

				return getEl(elQuery, '.', 'class');

			}

		//if query only has selector
		} else {

			return getEl(elQuery, '', '', 1);

		}

	};


	document.querySelector = function(elQuery){

		return _querySelectorBase(elQuery, 0);

	};

	document.querySelectorAll = function(elQuery){

		return _querySelectorBase(elQuery, 1);

	};

}