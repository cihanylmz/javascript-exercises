const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
   const sum = arr.reduce(
    (previousValue, currentValue) => 
      previousValue + currentValue,
      0);
  return sum;
};

const multiply = function(operands) {
  const product = operands.reduce(
    (previousValue, currentValue) =>
    previousValue * currentValue,
    1);

    return product;

};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
  return (num === 0 || num === 1)? 1 : factorial(num-1) * num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
