function showDictionary() {
    // Create a dictionary with duplicate keys
    const dictionary = {
        "fruit": "An apple",
        "fruit": "A banana",
        "cat": "A small animal"
    };

    const dictElem = document.getElementById("Dictionary");
    if (!dictElem) {
        console.error("Element with ID 'Dictionary' not found.");
        return;
    }

    // Output the value of "fruit"
    dictElem.innerHTML = `<strong>Value:</strong> ${dictionary["fruit"]}`;
}