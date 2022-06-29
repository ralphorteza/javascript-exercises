const palindromes = function (str) {
  let processedStr = str.toLowerCase()
                        .replace(/[^a-z]/g, "");
  let test = '';
  let size = processedStr.length;
  for (let i = size-1; i >= 0; i--) {
    test += processedStr.charAt(i);
  }

  return test === processedStr;
};

// Do not edit below this line
module.exports = palindromes;

/* function myFunction() {
  let text;
  let person = prompt("enter string");
  if (person == null || person == "") {
    return true;
  } else {
    return palindromes(person);
  }
}

console.log(myFunction);
 */
