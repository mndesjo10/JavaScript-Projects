// Function to perform multiplication
function multiplyNumbers() {
    const num1 = 8, num2 = 7;
    const result = num1 * num2;


    const mathElem = document.getElementById("Math");
    if (mathElem) {
        mathElem.textContent = "Result: " + num1 + " * " + num2 + " = " + result;
    }
}

// Function to perform division
function divideNumbers() {
    let num1 = 20;
    let num2 = 4;

    // Check for division by zero
    if (num2 === 0) {
        const mathElem = document.getElementById("Math");
        if (mathElem) {
            mathElem.textContent = "Error: Cannot divide by zero.";
        }
        return;
    }

    const mathElem = document.getElementById("Math");
    if (mathElem) {
        const result = num1 / num2;
        mathElem.textContent = "Result: " + num1 + " / " + num2 + " = " + result;
    }
}