const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (array) {
  let sum = 0;
  array.forEach(number => {
    sum += number;
  });
  return sum;
};

const multiply = function (array) {
  let total = 1;
  array.forEach(number => {
    total *= number;
  });
  return total;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  if (number === 0 || number === 1)
    return 1;
  return number * factorial(--number);
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
