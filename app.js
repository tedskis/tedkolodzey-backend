/* application entry point */

// modules
var url       = require( 'url' );
var fs        = require( 'fs' );
// includes
var shared    = require( './includes/shared' );
var endpoints = require( './includes/endpoints' );
var db 		  = require( './includes/db' );

/**
 * TODOs
 * set up event logger for functions etc:
 * 		WINSTON:logs to a file
 * 		Check out https://stackoverflow.com/questions/40880094/create-log-file-in-nodejs
 * 		https://www.npmjs.com/package/winston
 */

 console.log( 'hello' );