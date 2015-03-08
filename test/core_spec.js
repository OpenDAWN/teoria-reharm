var expect = require('chai').expect;
var teoria = require('teoria');
var reharm = require('../index.js')();
var Functional = require('../lib/functional.js');
 
describe('Reharm', function(){
	describe('.functional()', function() {
		it('should instantiate a Functional object', function () {
			expect(reharm.functional(teoria.note('c').scale('major'))).to.be.an.instanceof(Functional);
		});
	});
});