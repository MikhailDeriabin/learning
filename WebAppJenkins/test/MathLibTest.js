const mathLib = require('../public/MathLib.js');
const expect = require('chai').expect;

describe('#sumNums()', function() {

    context('with 2 arguments', function() {
        it('should return their sum', function() {
            expect(mathLib.sumNums(20, 30)).to.equal(50);
        });
    });
});

describe('#isNegative()', function() {
    context('with negative arg', function() {
        it('should return true', function() {
            expect(mathLib.isNegative(-10)).to.equal(true);
        });
    });

    context('with positive arg', function() {
        it('should return false', function() {
            expect(mathLib.isNegative(10)).to.equal(false);
        });
    });
});

describe('#isOdd()', function() {

    context('with odd arg', function() {
        it('should return true', function() {
            expect(mathLib.isOdd(20)).to.equal(true);
        });
    });
    context('with even arg', function() {
        it('should return false', function() {
            expect(mathLib.isOdd(21)).to.equal(false);
        });
    });
});