_defineMethod('setInterval', function(handler, delay){

    //init intervalCache to store interval ID's
    if(typeof this._intervalCache !== 'object'){
        this._intervalCache = {
            currNextIdx: 0,
            availableIdxs: [],
            cache: {}
        };
    }

    var intervalCache = this._intervalCache,
        cache = intervalCache.cache,
        availableIdxs = intervalCache.availableIdxs,
        newId;

    //check if there are idxs available
    //this because this will re-use unused
    //array spaces which prevents the cache object
    //from getting too big
    if(availableIdxs.length > 0){
        //space available
        newId = availableIdxs[0];
        availableIdxs.splice(0, 1);
    } else {
        newId = intervalCache.currNextIdx++;
    }

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
        var intervalCache = this._intervalCache,
            cache = intervalCache.cache,
            originalId = cache[intervalId];

        if(typeof originalId === 'number'){
            cache[intervalId] = undefined;
            intervalCache.availableIdxs.push(intervalId);
            return window.clearTimeout(originalId);
        }
    }

}, false);