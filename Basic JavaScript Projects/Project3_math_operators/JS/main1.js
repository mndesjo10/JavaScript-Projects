// Function to perform addition and display result in the paragraph
function addNumbers() {
    // Define two numbers
    let num1 = 10;
    let num2 = 5;

    // Perform addition
    let result = num1 + num2;

    // Get the paragraph element by its ID
    let mathParagraph = document.getElementById("Math");

    // Update the paragraph with the result
    mathParagraph.textContent = "Result: " + num1 + " + " + num2 + " = " + result;
}