'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive-primitive' ),
	factorialln = require( 'compute-factorialln/lib/number.js' );


// FUNCTIONS //

var exp = Math.exp,
	ln = Math.log,
	pow = Math.pow;


// CONSTANTS

var EPSILON = 1e-12;


// ENTROPY //

/**
* FUNCTION entropy( lambda )
*	Computes the distribution entropy for a Poisson distribution with parameter lambda.
*
* @param {Number} lambda - mean parameter
* @returns {Number} distribution entropy
*/
function entropy( lambda ) {
	var ft,
		pws,
		lfact,
		c, k;

	if ( !isPositive( lambda ) ) {
		return NaN;
	}
	ft = lambda * ( 1 - ln( lambda ) );
	pws = 0;
	k = 1;
	do {
		k += 1;
		lfact = factorialln( k );
		c = pow( lambda, k ) * lfact / exp( lfact );
		pws += c;
	} while ( c / pws > EPSILON );
	return ft + exp( - lambda ) * pws;
} // end FUNCTION entropy()


// EXPORTS

module.exports =  entropy;
