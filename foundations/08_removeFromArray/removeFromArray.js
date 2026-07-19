const removeFromArray = function(arr, ...items) {
  let newArr = [];
  for (let arrayItem in arr) {
    if (!items.includes(arr[arrayItem])){
      newArr.push(arr[arrayItem])
    }
  }
  return newArr;
};


// Do not edit below this line
module.exports = removeFromArray;
