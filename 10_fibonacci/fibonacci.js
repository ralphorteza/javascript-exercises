const fibonacci = (number => {
  let text = "OOPS";
  if (number < 0) { return text; }
  if (number == 0) { return 0; }
  if (number <= 2) { return 1; }
  let nMinus2 = 1;
  let nMinus1 = 1;
  let out = nMinus2 + nMinus1;

  for (let i = 3; i < number; i++) {
    nMinus2 = nMinus1;
    nMinus1 = out;
    out = nMinus2 + nMinus1;
  }
  
  return out;
});

// Do not edit below this line
module.exports = fibonacci;
