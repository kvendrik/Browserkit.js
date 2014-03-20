	_defineMethod('serialize', function(){

		var form = this.el,
		inputs = form.getElementsByTagName('input'),
		textareas = form.getElementsByTagName('textarea'),
		output = '';

		for (var i = inputs.length - 1; i >= 0; i--) {

			var input = inputs[i],
			type = input.getAttribute('type');

			if( type === 'radio' || type === 'checkbox' ){
				if(input.getAttribute('checked') !== null){
					output += input.name+'='+input.value+'&';
				}
			} else {
				output += input.name+'='+input.value+'&';
			}

		};

		for (var i = textareas.length - 1; i >= 0; i--) {

			var textarea = textareas[i];
			output += textarea.name+'='+textarea.value+'&';

		};

		output = output.slice(0, -1);

		return output;

	});