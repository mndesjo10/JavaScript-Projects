// Function to check voting eligibility using ternary operator
function checkVote() {
    // Get the age from the input field
    const age = parseInt(document.getElementById("Age").value);

    // Use ternary operator to determine voting status
    const result = (age >= 18) ? "You can vote!" : "You are not old enough to vote.";

    // Display result in the paragraph
    const resultElem = document.getElementById("Result");
    if (!resultElem) {
        console.error("Element with ID 'Result' not found.");
        return;
    }
    resultElem.textContent = result;
}