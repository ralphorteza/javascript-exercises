const removeFromArray = function(...args) {
  
  const arr = args[0];

  const out = [];
  for (item of arr) {
    if (!args.includes(item)) { out.push(item); }
  }

  return out;
};

// Do not edit below this line
module.exports = removeFromArray;
