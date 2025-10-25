// Function that references an HTML element
function displayElementContent() {
    // Get the element by its ID
    const element = document.getElementById("targetElement");

    // Check if element exists before accessing it
    if (element) {
        // Display the content of the element in an alert
        alert(element.innerHTML);
    } else {
        console.error("Element with ID 'targetElement' not found.");
    }
}

// Call the function after the DOM is fully loaded
displayElementContent();