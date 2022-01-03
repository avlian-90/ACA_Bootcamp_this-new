/* Create functions for the Calculator class that can do the following:
Add two numbers.
Subtract two numbers.
Multiply two numbers.
Divide two numbers.

const calculator = new Calculator();
calculator.add(10, 5);
calculator.subtract(10, 5);
calculator.multiply(10, 5);
calculator.divide(10, 5); */

function Calculator() {}

Calculator.prototype.add = function (num1, num2) {
  return num1 + num2;
};

Calculator.prototype.subtract = function (num1, num2) {
  return num1 - num2;
};

Calculator.prototype.multiply = function (num1, num2) {
  return num1 * num2;
};

Calculator.prototype.divide = function (num1, num2) {
  return num1 / num2;
};

const calculator = new Calculator();
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));
