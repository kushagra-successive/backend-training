const lodash = require("lodash");

const add = (num1, num2) => {
  return lodash.add(num1, num2);
};

const sub = (num1, num2) => {
  return lodash.subtract(num1, num2);
};

const mul = (num1, num2) => {
  return lodash.multiply(num1, num2);
};

const div = (num1, num2) => {
  return lodash.divide(num1, num2);
};

module.exports = { add, sub, mul, div };
