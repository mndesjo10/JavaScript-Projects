// Reusable function to update the paragraph
function updateDisplay(text) {
    const mathElem = document.getElementById('Math');
    if (!mathElem) {
        console.error('Element with ID "Math" not found.');
        return;
    }
    mathElem.textContent = text;
}

// Function to demonstrate increment operator (++)
function incrementNumber() {
    let number = 9;
    number++; // Same as number = number +1
    updateDisplay(`After increment: ${number} (was 9)`);
}

// Function to demonstrate decrement operator (--)
function decrementNumber() {
    let number = 20;
    number--; // Same as number = number - 1
    updateDisplay(`After decrement: ${number} (was 20)`);
}

// Operational: Run on page load
window.onload = function() {
    updateDisplay("Ready! Click any button to perform an operation.");
}