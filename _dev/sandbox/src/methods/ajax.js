//Not a class function - doesn't use any of the classes variables
_defineMethod('ajax', function(settings){

	var httpRequest;
	//Android <2.3 sees XMLHttpRequest as an object
	if(typeof window.XMLHttpRequest === 'function' || typeof window.XMLHttpRequest === 'object'){
		httpRequest = new XMLHttpRequest();
	} else { //IE 5/6
		httpRequest = new ActiveXObject('Microsoft.XMLHTTP');
	}

	httpRequest.onreadystatechange = function(){
		if(httpRequest.readyState === 4 && httpRequest.status === 200){
			
			var responseString = httpRequest.responseText,
			rtrnData;
			if(settings.dataType === 'json'){
				rtrnData = Browserkit.parseJSON(responseString);
			} else {
				rtrnData = responseString;
			}

			settings.success(rtrnData);

		}
	};

	var requestType;
	if(settings.type !== undefined && settings.type.toLowerCase() === 'post'){

		requestType = 'POST';

	} else {

		requestType = 'GET';

	} 

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