const findTheOldest = function(array) {
  return array.reduce((acc, current) => {
    if (!('yearOfDeath' in current)) {current['yearOfDeath']=new Date().getFullYear();}
    if ((acc.yearOfDeath-acc.yearOfBirth) > (current.yearOfDeath-current.yearOfBirth)) {
      return acc
    } else {
      return current
    }
  },{yearOfBirth:2005, yearOfDeath: 2005})
};

// Do not edit below this line
module.exports = findTheOldest;
