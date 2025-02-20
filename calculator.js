
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
        display.value = eval(display.value.replace("÷", "/").replace("×", "*"));
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
