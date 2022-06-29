const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const sum = function(obj) {
  let sum = 0;
	for (key in obj) {
    sum += obj[key]
  }
  return sum;
};

const multiply = function(obj) {
  if (obj === null) { return null; }
  product = 1;
  for (key in obj) {
    product *= obj[key];
  }
  return product;
};

const power = (a,b) => Math.pow(a,b);


const factorial = function(num) {
	let out = num;

  if (num === 0 || num === 1) { return 1; }
  while (num > 1) {
    num--;
    out *= num;
  }
  return out;
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
