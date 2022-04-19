const ftoc = function(fehrenheitNum) {
  let celsiusConversion =  5/9 * (fehrenheitNum - 32);
  if (Number.isInteger(celsiusConversion)) { 
    return parseInt(celsiusConversion.toFixed(0));
  }
  return parseFloat(celsiusConversion.toFixed(1));
};

const ctof = function(celsiusNum) {
  let fehrenheitConversion = 9 / 5 * celsiusNum + 32;
  if (Number.isInteger(fehrenheitConversion)) { 
    return parseInt(fehrenheitConversion.toFixed(0));
  }
  return parseFloat(fehrenheitConversion.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
