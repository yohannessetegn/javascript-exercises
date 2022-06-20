const ftoc = function(args) {
  let celsius, finalCelsius;
  celsius = (args - 32) * (5/9);
  finalCelsius = Number(celsius.toFixed(1))
  return(finalCelsius);
};

const ctof = function(args) {
  let Fahrenheit, finalFahrenheit;
  Fahrenheit = (args * (9/5)) + 32;
  finalFahrenheit = Number(Fahrenheit.toFixed(1))
  return(finalFahrenheit);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
