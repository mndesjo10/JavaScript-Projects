// Reusable function to update the paragraph
function updateDisplay(text) {
    const mathElem = document.getElementById("Math");
    if (!mathElem) {
        console.error('Element with ID "Math" not found.');
        return;
    }
    mathElem.textContent = text;
}

// Addition
function addNumbers() {
    const num1 = 10, num2 = 5;
    const result = num1 + num2;
    updateDisplay(`Result: ${num1} + ${num2} = ${result}`);
}

// Subtraction
function subtractNumbers() {
    const num1 = 10, num2 = 5;
    const result = num1 - num2;
    updateDisplay(`Result: ${num1} - ${num2} = ${result}`);
}

// Multiplication
function multiplyNumbers() {
    const num1 = 8, num2 = 7;
    const result = num1 * num2;
    updateDisplay(`Result: ${num1} * ${num2} = ${result}`);
}

// Division
function divideNumbers() {
    const num1 = 20, num2 = 4;

    if (num2 === 0) {
        updateDisplay("Error: Division by zero is not allowed.");
        return;
    }
    const result = num1 / num2;
    updateDisplay(`Result: ${num1} / ${num2} = ${result}`);
}

// Modulus (Remainder)
function modulusNumbers() {
    const num1 = 17, num2 = 5;
    const result = num1 % num2;
    updateDisplay(`Result: ${num1} % ${num2} = ${result} (remainder)`);
}

// Exponentiation (power)
function powerNumbers() {
    const num1 = 2, num2 = 3;
    const result = num1 ** num2;
    updateDisplay(`Result: ${num1} ^ ${num2} = ${result}`);
}

// Optional: Run on page load
window.onload = function () {
    updateDisplay("Ready! Click any button to perform an operation.");
}