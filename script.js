function convertTemperature() {
  const inputTemp = parseFloat(document.getElementById('inputTemp').value);
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;
  const resultDiv = document.getElementById('result');

  if (isNaN(inputTemp)) {
    resultDiv.innerHTML = "❌ Please enter a valid number!";
    return;
  }

  let tempInCelsius;

  // Convert input to Celsius first
  if (fromUnit === "celsius") {
    tempInCelsius = inputTemp;
  } else if (fromUnit === "fahrenheit") {
    tempInCelsius = (inputTemp - 32) * 5/9;
  } else if (fromUnit === "kelvin") {
    tempInCelsius = inputTemp - 273.15;
  }

  let convertedTemp;

  // Convert from Celsius to target unit
  if (toUnit === "celsius") {
    convertedTemp = tempInCelsius;
  } else if (toUnit === "fahrenheit") {
    convertedTemp = (tempInCelsius * 9/5) + 32;
  } else if (toUnit === "kelvin") {
    convertedTemp = tempInCelsius + 273.15;
  }

  convertedTemp = convertedTemp.toFixed(2); // Round to 2 decimals

  resultDiv.innerHTML = `✅ Converted Temperature: <strong>${convertedTemp} ${getUnitSymbol(toUnit)}</strong>`;
}

function getUnitSymbol(unit) {
  switch(unit) {
    case 'celsius': return '°C';
    case 'fahrenheit': return '°F';
    case 'kelvin': return 'K';
  }
}
