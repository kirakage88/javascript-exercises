const fibonacci = function(limit) {
let series = [0, 1]
  if (+limit < 0) {return "OOPS"}
  if (+limit !== 0) {
    for (let i = 1; i < +limit; i++) {
    series.push(series.at(-1)+series.at(-2))
    }
  } else {return series.at(-2)}
  return series.at(-1)
};

// Do not edit below this line
module.exports = fibonacci;
