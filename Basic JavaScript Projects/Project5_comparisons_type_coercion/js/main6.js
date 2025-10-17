// Function to show "true" using == (loose equality)
function showTrue() {
    const result = 5 == "5"; //True - loose equality coerces string to number
    const resultElem = document.getElementById("Result");
    if (!resultElem) {
        console.error('Element with ID "Result" not found.');
        return;
    }
    resultElem.innerHTML = `<strong>5 == "5":</strong> ${result}`;
}

// Function to show "false" using == (loose equality)
function showFalse() {
    const result = 5 == "hello"; // False - cannot coerce "hello" to 5
    const resultElem = document.getElementById("Result");
    if (!resultElem) {
        console.error('Element with ID "Result" not found.');
        return;
    }
    resultElem.innerHTML = `<strong>5 == "hello":</strong> ${result}`;
}