// Function to show "true" using NOT (!)
function showTrue() {
    const result = !false; // True - NOT of false is true
    const resultElem = document.getElementById("Result");
    if (!resultElem) {
        console.error('Element with ID "Result" not found.');
        return;
    }
    resultElem.innerHTML = `<strong>!false:</strong> ${result}`;
}

// Function to show "false" using NOT (!)
function showFalse() {
    const result = !true; // False - NOT of true is false
    const resultElem = document.getElementById("Result");
    if (!resultElem) {
        console.error('Element with ID "Result" not found.');
        return;
    }
    resultElem.innerHTML = `<strong>!true:</strong> ${result}`;
}