// Function to show a value from the dictionary
function showDictionary() {
    // Create a dictionary using a JavaScript object (KVPs)
    const dictionary = {
        "apple": "A red or green fruit",
        "banana": "A yellow curved fruit",
        "cat": "A small domesticated animal",
        "dog": "A loyal pet animal"
    };

    // Get the paragraph element
    const dictElem = document.getElementById("Dictionary");
    if (!dictElem) {
        console.error("Element with ID 'Dictionary' not found.");
        return;
    }

    // Output one value from the dictionary
    dictElem.innerHTML = `<strong>Definition:</strong> ${dictionary["apple"]}`;
}