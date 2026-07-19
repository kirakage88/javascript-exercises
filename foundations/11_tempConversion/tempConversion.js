const convertToCelsius = function(temp) {
  const factor = 5/9;
  let answer = (temp-32)*factor
  let roundedAnswer = Math.ceil(answer* 10)/ 10
  return roundedAnswer;
};

const convertToFahrenheit = function(temp) {
  const factor = 9/5;
  let answer = temp*factor + 32;
  let roundedAnswer = Math.ceil(answer* 10)/ 10
  return roundedAnswer;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
