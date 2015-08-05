/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Validate a value is NaN:
	isnan = require( 'validate.io-nan' ),

	// Module to be tested:
	entropy = require( './../lib/number.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'number entropy', function tests() {

	it( 'should export a function', function test() {
		expect( entropy ).to.be.a( 'function' );
	});

	it( 'should compute the distribution entropy', function test() {
		assert.closeTo( entropy( 2 ), 1.7048826439329838, 1e-5 );
		assert.closeTo( entropy( 4  ), 2.086672699880964, 1e-5 );
		assert.closeTo( entropy( 8  ), 2.4474327665443063, 1e-5 );
		assert.closeTo( entropy( 16  ), 2.7998467463663843, 1e-5 );
	});

	it( 'should return `NaN` for invalid values of parameter lambda', function test() {
		assert.isTrue( isnan( entropy( -1 ) ) );
	});

});
