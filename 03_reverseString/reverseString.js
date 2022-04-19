const reverseString = function(str) {
  
  const strArray = str.split("");
  let out = "";

  for (let i = str.length-1; i >= 0; i--) {
    out += strArray[i];
  }

  return out;

};

// Do not edit below this line
module.exports = reverseString;
