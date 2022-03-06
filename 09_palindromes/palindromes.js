const palindromes = function (aString) {
  const processedString = aString.toLowerCase().replace(/[^a-z]/g, '');
  const reversedString = processedString.split("").reverse().join("");
  return processedString === reversedString;

};

// Do not edit below this line
module.exports = palindromes;
