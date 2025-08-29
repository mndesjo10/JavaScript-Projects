// Function to show a key-value pair from the dictionary
function showAndDelete() {
    // Create a dictionary using a JavaScript object (Key-Value Pairs)
    const dictionary = {
        "apple": "A red or green fruit",
        "banana": "A yellow curved fruit",
        "cat": "A small domesticated animal"
    };

    // Delete the key "banana" before displaying its value
    delete dictionary["banana"];

    // Get the paragraph element by its ID
    const dictElem = document.getElementById("Dictionary");
    if (!dictElem) {
        console.error("Element with ID 'Dictionary' not found.");
        return;
    }

    // Output the value of "apple" after deletion
    dictElem.innerHTML = `<strong>Definition:</strong> ${dictionary["apple"]}`;
}