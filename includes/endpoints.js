//modules
var url       = require( 'url' );
// inclueds
var shared    = require( './shared' );



module.exports = {
	start : function() {
		/** 
		 * get all the information about the request, organize it, process it
		 * keep track of the time it took to process
		 */
		// start timer
		let start = shared.startTimer();
		// parse uri

		parseURI( 'start' );
		// get post data

		declarePost( 'start' );
		// process request

		processRequest( 'start' );
		// return data

		let timer = shared.endTimer();
		//shared.log( 'Timer'+ timer );
	}
};

function parseURI( calledFrom ) {
	
}

function declarePost ( calledFrom ) {

}

function processRequest ( calledFrom ) {
	switch ( true ) {
		case pageIsIndex()     : break;
		case pageIsContact()   : break;
		case pageIsPortfolio() : break;
		case pageIsScripts()   : break;
	}

}

function returnData( calledFrom ) {

}

// HELPER FUNCTIONS

function pageIsIndex() {
	
}

function pageIsContact() {
	
}

function pageIsPortfolio() {
	
}

function pageIsScripts() {
	
}