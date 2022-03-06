const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0;
	arr.forEach(item => sum += item);
  return sum;
};

const multiply = function(operands) {
  let product = 1;
  operands.forEach(item => product *= item);
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
