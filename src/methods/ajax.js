//Not a class function - doesn't use any of the classes variables
_defineMethod('ajax', function(settings){

	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function(){
		if(httpRequest.readyState === 4 && httpRequest.status === 200){

			var responseString = httpRequest.responseText;

			if(settings.dataType === 'json'){
				rtrnData = JSON.parse(responseString);
			} else {
				rtrnData = responseString;
			}

			if(typeof settings.success === 'function'){
				settings.success(rtrnData);
			}

		}
	};

	var requestType = settings.type !== undefined && settings.type.toLowerCase() === 'post' ? 'POST' : 'GET';

	httpRequest.open(requestType, settings.url, true);

	if(requestType === 'POST'){
		httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	}

	httpRequest.send(settings.data);

}, false);

_defineMethod('getJSON', function(url, success){

	return Browserkit.ajax({
		dataType: 'json',
		url: url,
		success: success
	});

}, false);