'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive-primitive' );


// ENTROPY //

/**
* FUNCTION entropy( lambda )
*	Computes the distribution entropy for a Poisson distribution with parameter lambda.
*
* @param {Number} lambda - mean parameter
* @returns {Number} distribution entropy
*/
function entropy( lambda ) {
	if ( !isPositive( lambda ) ) {
		return NaN;
	}
	return ret;
} // end FUNCTION entropy()


// EXPORTS

module.exports =  entropy;
