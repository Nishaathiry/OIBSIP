window.addEventListener('DOMContentLoaded', function() {
    var convertBtn = document.getElementById('convertBtn');
    convertBtn.addEventListener('click', convertTemperature);
});

function convertTemperature() {
    var temperatureInput = document.getElementById('temperatureInput');
    var unitSelect = document.getElementById('unitSelect');
    var result = document.getElementById('result');

    var temperature = parseFloat(temperatureInput.value);
    if (isNaN(temperature)) {
        result.textContent = 'Invalid input';
        return;
    }

    var unit = unitSelect.value;
    var convertedTemperature, resultUnit;
    if (unit === 'Celsius') {
        convertedTemperature = (temperature * 9/5) + 32;
        resultUnit = '°F';
    } else if (unit === 'Fahrenheit') {
        convertedTemperature = (temperature - 32) * 5/9;
        resultUnit = '°C';
    } else if (unit === 'Kelvin') {
        convertedTemperature = temperature - 273.15;
        resultUnit = '°C';
    } else {
        result.textContent = 'Invalid unit';
        return;
    }

    result.textContent = 'Converted temperature: ' + convertedTemperature.toFixed(2) + ' ' + resultUnit;
}