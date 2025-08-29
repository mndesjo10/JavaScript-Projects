// Reusable function to update the paragraph
function updateDisplay(text) {
    const mathElem = document.getElementById("Math");
    if (!mathElem) {
        console.error('Element with ID "Math" not found.');
        return;
    }
    mathElem.textContent = text;
}

// 1. Addition Operator (+)
function addNumbers() {
    const num1 = 10;
    const num2 = 5;
    const result = num1 + num2;
    updateDisplay(`Addition: ${num1} + ${num2} = ${result}`);
}

// 2. Subtraction Operator (-)
function subtractNumbers() {
    const num1 = 10;
    const num2 = 5;
    const result = num1 - num2;
    updateDisplay(`Subtraction: ${num1} - ${num2} = ${result}`);
}

// 3. Multiplication Operator (*)
function multiplyNumbers() {
    const num1 = 30;
    const num2 = 5;
    const result = num1 * num2;
    updateDisplay(`Multiplication: ${num1} * ${num2} = ${result}`);
}

// 4. Division Operator (/)
function divideNumbers() {
    const num1 = 10;
    const num2 = 5;

    // Prevent division by zero
    if (num2 === 0) {
        updateDisplay("Error: Cannot divide by zero.");
        return;
    }
    const result = num1 / num2;
    updateDisplay(`Division: ${num1} / ${num2} = ${result}`);
}

// 5. Modulus Operator (%)
function modulusNumbers() {
    const num1 = 30;
    const num2 = 5;
    const result = num1 % num2; // Remainder of 30 / 5
    updateDisplay(`Result: ${num1} % ${num2} = ${result} (remainder)`);
}

// 6. Increment Operator (++)
function incrementNumbers() {
    let num = 30;
    num++; // Adds 1 to num
    updateDisplay(`After Increment: ${num} (was 30)`);
}

// 7. Decrement Operator (--)
function decrementNumbers() {
    let num = 30;
    num--; // Subtracts 1 from num
    updateDisplay(`After Decrement: ${num} (was 30)`);
}

// 8. Math.random() - Generates random number between 0 and 1
function randomNumber() {
    const result = Math.random(); // Returns number between 0 and 1
    updateDisplay(`Random Number: ${result.toFixed(4)}`);
}

// Optional: Run on page load
window.onload = function() {
    updateDisplay("Ready! Click a button to see the result of a math operation.");
};