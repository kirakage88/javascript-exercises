const palindromes = function (str) {
  clean_str = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
  return clean_str === clean_str.split('').reverse().join('')
  // return clean_str
};

// Do not edit below this line
module.exports = palindromes;
