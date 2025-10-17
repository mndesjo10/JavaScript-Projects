// Reusable function to update the paragraph
function updateDisplay(text) {
    const mathElem = document.getElementById('Math');
    if (!mathElem) {
        console.error('Element with ID "Math" not found.');
        return;
    }
    mathElem.textContent = text;
}

// Function to demonstrate negation operator (-)
function negateNumber() {
    const num = 45;
    const negated = -num; // Unary negation

    updateDisplay(`Original: ${num}, Negated: ${negated} (using unary - operator)`);
}

// Optional: Run on page load
window.onload = function () {
    updateDisplay("Ready! Click the button to see the negation result.");
};
