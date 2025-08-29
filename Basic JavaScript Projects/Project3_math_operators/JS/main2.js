// Subtraction Operation
function subtractNumbers() {
    let num1 = 15;
    let num2 = 7;
    let result = num1 - num2;

    // Get the paragraph element
    let mathParagraph = document.getElementById("Math");

    // Display the result
    mathParagraph.textContent = "Result: " + num1 + " - " + num2 + " = " + result;
}