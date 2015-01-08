_defineMethod('setInterval', function(handler, delay){

    //init intervalCache to store interval ID's
    if(typeof this._intervalCache !== 'object'){
        this._intervalCache = {
            currIdx: 0,
            cache: {}
        };
    }

    var self = this,
        intervalCache = this._intervalCache,
        cache = intervalCache.cache,
        newId = intervalCache.currIdx++;

    //save a space for the new id
    cache[newId] = 0;

    var setSafeInterval = function(handler, delay){
        if(typeof cache[newId] !== 'number') return;

        //user calls the method
        //a setTimout with ID 1 is returned
        return setTimeout(function(){

            //if the previous interval is not cleared
            //the id count will continue in order

            //problem here is that the user only has reference
            //to the setTimout with ID 1
            //setTimeout with ID 1 has already been triggered
            //and the current ID can be already 10
            //this makes it impossble to clear the correct Interval
            //solution is to keep track of the current id

            handler();
            cache[newId] = setSafeInterval(handler, delay);

        }, delay);

    };

    cache[newId] = setSafeInterval(handler, delay);

    return newId;

}, false);

_defineMethod('clearInterval', function(intervalId){

    if(typeof this._intervalCache === 'object'){
        var cache = this._intervalCache.cache,
            originalId = cache[intervalId];

        if(typeof originalId === 'number'){
            cache[intervalId] = undefined;
            return window.clearTimeout(originalId);
        }
    }

}, false);