// Get the calculator screen element
const screen = document.querySelector('.calculator-screen');

// Initialize variables
let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

// Function to update the screen
function updateScreen(value) {
    if (shouldResetScreen) {
        screen.value = '';
        shouldResetScreen = false;
    }
    screen.value += value;
}

// Function to clear the calculator
function clearAll() {
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
    shouldResetScreen = false;
    screen.value = '0';
}

// Function to handle number input
function handleNumber(number) {
    if (screen.value === '0' || shouldResetScreen) {
        screen.value = number;
        shouldResetScreen = false;
    } else {
        updateScreen(number);
    }
}

// Function to handle decimal point
function handleDecimal() {
    if (shouldResetScreen) {
        screen.value = '0';
        shouldResetScreen = false;
        return;
    }
    if (!screen.value.includes('.')) {
        updateScreen('.');
    }
}

// Function to handle operators
function handleOperator(operator) {
    if (currentOperation !== null) calculate();
    firstOperand = screen.value;
    currentOperation = operator;
    shouldResetScreen = true;
}

// Function to perform calculation
function calculate() {
    if (currentOperation === null) return;
    secondOperand = screen.value;
    let result = 0;

    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);

    switch (currentOperation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                screen.value = 'Error';
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    // Round result to avoid floating point issues
    screen.value = Math.round(result * 1000000000) / 1000000000;
    firstOperand = screen.value;
    currentOperation = null;
    shouldResetScreen = true;
}

// Add event listeners to all buttons
document.addEventListener('DOMContentLoaded', function() {
    const keys = document.querySelector('.calculator-keys');

    keys.addEventListener('click', function(e) {
        if (e.target.matches('button')) {
            const value = e.target.value;

            if (value >= '0' && value <= '9') {
                handleNumber(value);
            } else if (value === '.') {
                handleDecimal();
            } else if (value === 'all-clear') {
                clearAll();
            } else if (value === '=' ) {
                calculate();
            } else {
                handleOperator(value);
            }
        }
    });
});