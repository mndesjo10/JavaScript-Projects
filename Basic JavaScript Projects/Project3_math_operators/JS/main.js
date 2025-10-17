// Output the result to the paragraph
function updateDisplay(text) {
    document.getElementById("Math").textContent = text;
}

// Addition
function addNumbers() {
    let num1 = 10, num2 = 5;
    let result = num1 + num2;
    updateDisplay("Result: " + num1 + " + " + num2 + " = " + result);
}

// Subtraction
function subtractNumbers() {
    let num1 = 10, num2 = 5;
    let result = num1 - num2;
    updateDisplay("Result: " + num1 + " - " + num2 + " = " + result);
}

// Multiplication
function multiplyNumbers() {
    let num1 = 8, num2 = 7;
    let result = num1 * num2;
    updateDisplay("Result: " + num1 + " * " + num2 + " = " + result);
}

// Division with zero check
function divideNumbers() {
    let num1 = 100, num2 = 4;
    if (num2 === 0) {
        updateDisplay("Error: Division by zero is not allowed.");
        return;
    }
    let result = num1 / num2;
    updateDisplay("Result: " + num1 + " / " + num2 + " = " + result);
}

// New: Modulus Operator
function modulusNumbers() {
    let num1 = 17, num2 = 5;
    let result = num1 % num2;
    updateDisplay("Result: " + num1 + " % " + num2 + " = " + result + " (remainder)");
}

// New: Exponentiation (Power)
function powerNumbers() {
    let num1 = 3, num2 = 4;
    let result = num1 ** num2; // 3^4 = 81
    updateDisplay("Result: " + num1 + " ^ " + num2 + " = " + result);
}

// Optional: Run on page load
window.onload = function() {
    updateDisplay("Ready! Click any button to perform an operation.");
};

