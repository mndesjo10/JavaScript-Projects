// Function that performs addition and updates the paragraph
function addNumbers() {
    // Define two numbers
    var num1 = 10;
    var num2 = 5;

    // Perform addition
    var result = num1 + num2;

    // Get the paragraph element by its ID
    var mathParagraph = document.getElementById("Math");

    // Display the result in the paragraph
    mathParagraph.textContent = "Result: " + num1 + " + " + num2 + " = " + result;
}

// New: Subtraction operation
function subtractNumbers() {
    var num1 = 10;
    var num2 = 5;
    var result = num1 - num2; // Subtraction operation

    var mathParagraph = document.getElementById("Math");
    mathParagraph.textContent = "Result: " + num1 + " - " + num2 + " = " + result;
}

// New: Multiplication operation
function multiplyNumbers() {
    var num1 = 8;
    var num2 = 7;
    result = num1 * num2; // Multiplication operation

    var mathParagraph = document.getElementById("Math");
    mathParagraph.textContent = "Result: " + num1 + " * " + num2 + " = " + result;
}

// New: Division operation
function divideNumbers() {
    var num1 = 100;
    var num2 = 4;
    var result = num1 / num2; // Division operation

    var mathParagraph = document.getElementById("Math");
    mathParagraph.textContent = "Result: " + num1 + " / " + num2 + " = " + result;
}