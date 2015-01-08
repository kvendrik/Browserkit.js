_defineMethod('ajax', function(settings){

	var httpRequest = new XMLHttpRequest(),
		data = settings.data,
		dataType = settings.dataType;

	httpRequest.onreadystatechange = function(){
		if(httpRequest.readyState === 4 && httpRequest.status === 200){

			var responseString = httpRequest.responseText;

			var rtrnData;
			if(dataType === 'json'){
				try {
					rtrnData = JSON.parse(responseString);
				} catch(err){
					rtrnData = responseString;
				}
			} else {
				rtrnData = responseString;
			}

			if(typeof settings.success === 'function'){
				settings.success(rtrnData, httpRequest);
			}

		}
	};

	var requestType = settings.type !== undefined ? settings.type.toUpperCase() : 'GET',
		postTypes = ['POST', 'PUT', 'DELETE'];

	httpRequest.open(requestType, settings.url, true);

	if(postTypes.indexOf(requestType) !== -1){
		if(typeof data === 'object'){
			httpRequest.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
		} else {
			httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		}
	}

	if(dataType === 'json' && typeof data === 'object' && !Array.isArray(data)){
		data = JSON.stringify(data);
	}

	httpRequest.send(data);

}, false);

_defineMethod('getJSON', function(url, success){

	return Browserkit.ajax({
		dataType: 'json',
		url: url,
		success: success
	});

}, false);