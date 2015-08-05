/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Deep close to:
	deepCloseTo = require( './utils/deepcloseto.js' ),

	// Module to be tested:
	entropy = require( './../lib/array.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'typed-array entropy', function tests() {

	it( 'should export a function', function test() {
		expect( entropy ).to.be.a( 'function' );
	});

	it( 'should compute the distribution entropy', function test() {
		var lambda, actual, expected;

		lambda = new Float64Array( [ 2, 4, 8, 16  ] );
		actual = new Float64Array( lambda.length );

		actual = entropy( actual, lambda );
		expected = new Float64Array( [ 1.7048826439329838, 2.086672699880964, 2.4474327665443063, 2.7998467463663843 ] );

		assert.isTrue( deepCloseTo( actual, expected, 1e-5 ) );
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( entropy( new Int8Array(), new Int8Array() ), new Int8Array() );
	});

});
