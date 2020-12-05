var url = require( 'url' );




module.exports = {
	start : function() {
		/** 
		 * 
		 */
		// parse uri

		parseURI( 'start' );
		// get post data

		declarePost( 'start' );
		// process request

		processRequest( 'start' );
		// return data
	}
};

function parseURI( calledFrom ) {
	
}

function declarePost ( calledFrom ) {

}

function processRequest ( calledFrom ) {
	switch ( true ) {
		case pageIsIndex() :     break;
		case pageIsContact() :   break;
		case pageIsPortfolio() : break;
		case pageIsScripts() :   break;
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