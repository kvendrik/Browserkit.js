_defineMethod('setInterval', function(handler, delay){

  handler();

  var self = this;

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

  			self.setInterval(handler, delay, true);

  		}, delay);

}, false);