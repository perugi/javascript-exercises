const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  return numbers.reduce((sum, number) => sum += number, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((sum, number) => sum *= number, 1);
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (n) {
  let fact = 1
  for (; n > 1; n--) fact *= n;
  return fact;
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
