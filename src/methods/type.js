_defineMethod('type', function(){
    var options = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regexp',
        '[object Object]': 'object',
        '[object Error]': 'error',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null'
    };

    return function(obj){
	   var type = {}.toString.call(obj);
	   return options[type] || type.match(/\s(\w+)/)[1].toLowerCase();
    };
}(), false);