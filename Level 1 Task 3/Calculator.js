let currentInput = '0';
let operator = '';
let firstOperand = '';
let display = document.getElementById('display');

function clearDisplay() {
    currentInput = '0';
    operator = '';
    firstOperand = '';
    updateDisplay();
}

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '0') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    firstOperand = currentInput;
    currentInput = '0';
    updateDisplay();
}

function calculateResult() {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(currentInput);
            break;
    }
    currentInput = result.toString();
    operator = '';
    firstOperand = '';
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput;
}
