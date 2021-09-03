
function convertToFahrenheit(temperatureInCelsius) {
  const temp = parseFloat(temperatureInCelsius);

  if(Number.isNaN(temp)) {
    return "";
  }

  const tempInF = (temp * 9 / 5) + 32;

  return (Math.round(tempInF * 1000) / 1000).toString();
}

function convertToCelsius(temperatureInFahrenheit) {
  const temp = parseFloat(temperatureInFahrenheit);

  if(Number.isNaN(temp)) {
    return "";
  }

  const tempInC = (temperatureInFahrenheit - 32) * 5 / 9;
  return (Math.round(tempInC * 1000) / 1000).toString();
}

export {
  convertToFahrenheit,
  convertToCelsius
}
