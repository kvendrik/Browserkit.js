_defineMethod('serialize', function(){

	var form = this[0],
	inputs = form.getElementsByTagName('input'),
	textareas = form.getElementsByTagName('textarea'),
	output = '',
	i;

	for (i = inputs.length - 1; i >= 0; i--) {

		var input = inputs[i],
		type = input.getAttribute('type');

		if( type === 'radio' || type === 'checkbox' ){
			if(input.checked === true){
				output += input.name+'='+input.value+'&';
			}
		} else {
			output += input.name+'='+input.value+'&';
		}

	}

	for (i = textareas.length - 1; i >= 0; i--) {

		var textarea = textareas[i];
		output += textarea.name+'='+textarea.value+'&';

	}

	output = output.slice(0, -1);

	return output;

});