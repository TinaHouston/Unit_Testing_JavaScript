var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.strictEqual(true, true)
  })

  it("can add 1 to 4 and get 5", function() {
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(5, calculator.runningTotal)
  })

  it("can subtract 4 from 7 and get 3", function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(3, calculator.runningTotal)
  })

  it("can multiply 3 by 5 and get 15", function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.strictEqual(15, calculator.runningTotal)
  })

  it("can divide 21 by 7 and get 3", function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(3, calculator.runningTotal)
  })

  it("can concatinate multiple number button clicks", function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    assert.strictEqual(12, calculator.runningTotal)
  })

    it("can chain multiple operations together", function(){
    calculator.numberClick(10);
    calculator.operatorClick("+")
    calculator.numberClick(5);
    calculator.operatorClick("*")
    calculator.numberClick(2);
    calculator.operatorClick("=")
    assert.strictEqual(30, calculator.runningTotal)
  })

  it("can clear the running total without affecting the calculation", function(){
    calculator.numberClick(10);
    calculator.operatorClick("+")
    calculator.numberClick(5);
    calculator.operatorClick("*")
    calculator.numberClick(2);
    calculator.operatorClick("=")
    calculator.clearClick();
    assert.strictEqual(0, calculator.runningTotal)
  })

});