module.exports = {
	startTimer : function() {
		/** 
		 * keep track of the time from when a request was started
		 */
		var start = ( Date.now() % 1000) / 1000;
		// return start time
		return start;

	},
	endTimer : function( start ) {
		/**
		 * calculate how long a request has taken
		 */
		var end = ( Date.now() % 1000) / 1000;
		var durration = end - start
		// set the time obj
		time = {
			start 	  : start,
			end       : end, 
			durration : durration 
		}
		//return the time obj
		return time;
	}
};

/* the other way to export functions
function startTimer() {

	var start = ( Date.now() % 1000) / 1000;
	// return start time
	return start;

}

function endTimer( start ) {

	var end = ( Date.now() % 1000) / 1000;
	var durration = end - start
	// set the time obj
	time = {
		start 	  : start,
		end       : end, 
		durration : durration 
	}
	//return the time obj
	return time;
}

module.exports = { startTimer, subtract, num };
*/