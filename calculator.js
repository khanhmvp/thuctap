let display = document.getElementById("result");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let expression = display.value.replace("÷", "/").replace("×", "*");
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}

function calculatePercentage() {
    try {
        let expression = display.value;
        let lastNumber = expression.match(/(\d+\.?\d*)$/);
        if (lastNumber) {
            let percentageValue = parseFloat(lastNumber[0]) / 100;
            display.value = expression.replace(/(\d+\.?\d*)$/, percentageValue);
        }
    } catch (error) {
        display.value = "Error";
    }
}

function toggleSign() {
    if (display.value) {
        display.value = String(-parseFloat(display.value));
    }
}

function squareRoot() {
    if (display.value) {
        display.value = Math.sqrt(parseFloat(display.value));
    }
}

function squareNumber() {
    if (display.value) {
        display.value = Math.pow(parseFloat(display.value), 2);
    }
}

function reciprocal() {
    if (display.value) {
        display.value = 1 / parseFloat(display.value);
    }
}
