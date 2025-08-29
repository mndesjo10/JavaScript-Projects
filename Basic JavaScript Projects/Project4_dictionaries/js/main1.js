// Function to delete a value from the dictionary
function deleteFromDictionary() {
    // Create a dictionary with key KVPs
    const dictionary = {
        "apple": "A red over green fruit",
        "banana": "A yellow curved fruit",
        "cat": "A small domesticated animal"
    };

    // Delete a key-value pair using the 'delete' operator
    delete dictionary["banana"];

    // Get the paragraph element
    const dictElem = document.getElementById("Dictionary");
    if (!dictElem) {
        console.error("Element with ID 'Dictionary' not found.");
        return;
    }

    // Output the updated dictionary
    dictElem.innerHTML = `<strong>Updated Dictionary:</strong><pre>${JSON.stringify(dictionary, null, 2)}</pre>`;
}