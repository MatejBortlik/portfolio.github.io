document.getElementById('convertBtn').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let resultText = '';
    let resultClass = '';

    if (isNaN(temperature)) {
        resultText = "Prosím, zadejte platné číslo.";
        resultClass = 'error';
    } else {
        if (unit === "Celsius") {
            resultText = (temperature * 9/5) + 32 + " °F";
        } else {
            resultText = (temperature - 32) * 5/9 + " °C";
        }
        resultClass = 'success';
    }

    const result = document.getElementById('result');
    result.textContent = resultText;
    result.className = 'result ' + resultClass;
});