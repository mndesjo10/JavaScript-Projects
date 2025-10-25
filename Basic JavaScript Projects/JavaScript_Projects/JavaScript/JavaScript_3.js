/**
* Function to show data attribute of an element
* Demonstrates basic usage of data attributes
* @param {HTMLElement} element - The element whose data attribute we want to display
*/
function showDataAttribute(element) {
    // Access the data-info attribute using dataset
    const info = element.dataset.info;

    // Display the result in the result display area
    const resultDisplay = document.getElementById("resultDisplay");
    if (resultDisplay) {
        resultDisplay.innerHTML = `
            <h3>Simple Data Attribute Result:</h3>
            <p>The data-info attribute value is: <strong>"${info}"</strong></p>
            <p><em>Accessed using: element.dataset.info</em></p>
        `;

        // Add some styling to highlight the result
        resultDisplay.style.backgroundColor = "#d4edda";
        resultDisplay.style.borderColor = "#28a745";
    }

    console.log(`Data attribute 'info' value: ${info}`);
}

/**
 * Function to show product information from data attributes
 * Demonstrates accessing multiple data attributes
 * @param {HTMLElement} element - The element with product data attributes
 */
function showProductInfo(element) {
    // Access multiple data attributes
    const productName = element.dataset.productName;
    const price = element.dataset.price;
    const inStock = element.dataset.inStock === "true";  // Convert string to boolean
    const category = element.dataset.category;

    // Display the result
    const resultDisplay = document.getElementById("resultDisplay");
    if (resultDisplay) {
        resultDisplay.innerHTML = `
            <h3>Product Information:</h3>
            <ul>
                <li><strong>Product Name:</strong> ${productName}</li>
                <li><strong>Price:</strong> $${price}</li>
                <li><strong>In Stock:</strong> ${inStock ? "Yes" : "No"}</li>
                <li><strong>Category:</strong> ${category}</li>
            </ul>
            <p><em>Accessed using: element.dataset.productName, element.dataset.price, etc.</em></p>
        `;

        // Add some styling to highlight the result
        resultDisplay.style.backgroundColor = "#fff3cd";
        resultDisplay.style.borderColor = "#ffc107";
    }

    console.log(`Product: ${productName}, Price: $${price}, In Stock: ${inStock}, Category: ${category}`);
}

/**
 * Function to calculate score percentage from data attributes
 * Demonstrates working with numeric data attributes
 * @param {HTMLElement} element - The element with score data attributes
*/
function calculateScore(element) {
    // Access numeric data attributes and convert to numbers
    const score = parseFloat(element.dataset.score);
    const maxScore = parseFloat(element.dataset.maxScore);
    const level = parseInt(element.dataset.level);

    // Calculate percentage
    const percentage = (score / maxScore) * 100;

    // Display the result
    const resultDisplay = document.getElementById("resultDisplay");
    if (resultDisplay) {
        resultDisplay.innerHTML = `
            <h3>Score Calculation Result:</h3>
            <p><strong>Score:</strong> ${score}/${maxScore}</p>
            <p>Percentage: ${percentage.toFixed(2)}%</p>
            <p>Level: ${level}</p>
            <p><em>Accessed using: parseFloat(element.dataset.score), parseInt(element.dataset.level)</em></p>
        `;

        // Add some styling to highlight the result
        resultDisplay.style.backgroundColor = "#d1ecf1";
        resultDisplay.style.borderColor = "#007bff";
    }

    console.log(`Score: ${score}/${maxScore} = ${percentage.toFixed(2)}% at Level: ${level}`);
}

/**
 * Function to parse user data from data attributes
 * Demonstrates parsing JSON and splitting comma-separated values
 * @param {HTMLElement} element - The element with complex data attributes
 */
function parseUserData(element) {
    // Parse JSON data attribute
    const userData = JSON.parse(element.dataset.userInfo);

    // Split comma-separated tags
    const tags = element.dataset.tags.split(",");

    // Display the result
    const resultDisplay = document.getElementById("resultDisplay");
    if (resultDisplay) {
        resultDisplay.innerHTML = `
            <h3>User Data:</h3>
            <p><strong>Name:</strong> ${userData.name}</p>
            <p><strong>Age:</strong> ${userData.age}</p>
            <p><strong>City:</strong> ${userData.city}</p>
            <p><strong>Tags:</strong> ${tags.map(tag => `<span style="background-color: #e9ecef; padding: 2px 6px; margin: 0 2px; border-radius: 3px;">${tag.trim()}</span>`).join('')}</p>
            <p><em>Accessed using: JSON.parse(element.dataset.userInfo), element.dataset.tags.split(",")</em></p>
        `;

        // Add some styling to highlight the result
        resultDisplay.style.backgroundColor = "#f8d7da";
        resultDisplay.style.borderColor = "#dc3545";
    }

    console.log(`User: ${userData.name}, Age: ${userData.age}, City: ${userData.city}, Tags: [${tags.join(', ')}]`);
}

/**
 * Function to add data attributes dynamically
 * Demonstrates adding data attributes to an element after page load
 */
function addDataAttributes() {
    const dynamicElement = document.getElementById("dynamicElement");
    if (dynamicElement) {
        // Add data attributes dynamically
        dynamicElement.dataset.dynamicId = "12345";
        dynamicElement.dataset.createdDate = new Date().toISOString();
        dynamicElement.dataset.status = "active";
        
        // Update the element's content to reflect the new attributes
        dynamicElement.innerHTML = `
            <h3>Dynamic Data Attributes</h3>
            <p>This element now has these data attributes:</p>
            <ul>
                <li>data-dynamic-id: "${dynamicElement.dataset.dynamicId}"</li>
                <li>data-created-date: "${dynamicElement.dataset.createdDate}"</li>
                <li>data-status: "${dynamicElement.dataset.status}"</li>
            </ul>
            <button onclick="addDataAttributes()">Add Data Attributes</button>
            <button onclick="removeDataAttributes()">Remove Data Attributes</button>
        `;

        // Display success message
        const resultDisplay = document.getElementById("resultDisplay");
        if (resultDisplay) {
            resultDisplay.innerHTML = `
                <h3>Dynamic Data Attributes Added:</h3>
                <p>Successfully added 3 data attributes to the element.</p>
                <p><em>Added using: element.dataset.dynamicId = "value", etc.</em></p>
            `;

            // Add some styling to highlight the result
            resultDisplay.style.backgroundColor = "#d4edda";
            resultDisplay.style.borderColor = "#28a745";
        }

        console.log("Added dynamic data attributes:", {
            dynamicId: dynamicElement.dataset.dynamicId,
            createdDate: dynamicElement.dataset.createdDate,
            status: dynamicElement.dataset.status
        });
    }
}

/**
 * Function to remove data attributes dynamically
 * Demonstrates removing data attributes from an element
 */
function removeDataAttributes() {
    const dynamicElement = document.getElementById("dynamicElement");
    if (dynamicElement) {
        // Remove data attributes
        delete dynamicElement.dataset.dynamicId;
        delete dynamicElement.dataset.createdDate;
        delete dynamicElement.dataset.status;

        // Update the element's content
        dynamicElement.innerHTML = `
            <h3>Dynamic Data Attributes</h3>
            <p>This element has had its dynamic data attributes removed.</p>
            <button onclick="addDataAttributes()">Add Data Attributes</button>
            <button onclick="removeDataAttributes()">Remove Data Attributes</button>
        `;

        // Display success message
        const resultDisplay = document.getElementById("resultDisplay");
        if (resultDisplay) {
            resultDisplay.innerHTML = `
                <h3>Dynamic Data Attributes Removed:</h3>
                <p>Successfully removed all dynamic data attributes from the element.</p>
                <p><em>Removed using: delete element.dataset.propertyName</em></p>
            `;

            // Add some styling to highlight the result
            resultDisplay.style.backgroundColor = "#f8d7da";
            resultDisplay.style.borderColor = "#dc3545";
        }

        console.log("Removed dynamic data attributes");
    }
}

// Initialize when page loads
console.log("JavaScript_3.js loaded successfully.");
console.log("Available functions: showDataAttribute(), showProductInfo(), calculateScore(), parseUserData(), addDataAttributes(), removeDataAttributes()");
console.log("Page ready for data attribute demonstration.");

// You can call these functions to see examples in the console
// showDataAttribute(document.querySelector('.data-element'));