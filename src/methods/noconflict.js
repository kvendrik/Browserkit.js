_defineMethod('noConflict', function(){
    var oldVals = {
        B: window.B,
        Browserkit: window.Browserkit
    };

    return function(allVars){
    	if(allVars === true){
            window.Browserkit = oldVals.Browserkit;
        }
        window.B = oldVals.B;

        return Browserkit;
    };
}(), false);