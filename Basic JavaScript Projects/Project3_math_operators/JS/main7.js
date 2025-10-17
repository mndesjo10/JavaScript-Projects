// Reusable function to update the paragraph
function updateDisplay(text) {
    const mathElem = document.getElementById("Math");
    if (!mathElem) {
        console.error('Element with ID "Math" not found.');
        return;
    }
    mathElem.textContent = text;
}

//Function to generate a random number between 0 and 1
function generateRandomNumber() {
    const randomNum = Math.random(); // Returns a number between 0 (inclusive) and 1 (exclusive)
    updateDisplay(`Random Number: ${randomNum.toFixed(4)}`);
}

// Optional: Run on page load
window.onload = function() {
    updateDisplay("Ready! Click the button to generate a random number.");
};