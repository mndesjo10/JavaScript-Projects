// Function to display the data type of a variable
function showDataType() {
    // Define a variable
    const myVariable = "Hello, Mendes!";
    
    // Use typeof to get the data type
    const dataType = typeof myVariable;

    // Get the paragraph element
    const resultElem = document.getElementById("Result");
    if (!resultElem) {
        console.error("Element with ID 'Result' not found.");
        return;
    }

    // Output the result using innerHTML
    resultElem.innerHTML = `<strong>Data type:</strong> ${dataType}`;
}

// Optional: Run on page load
window.onload = function () {
    showDataType();
};