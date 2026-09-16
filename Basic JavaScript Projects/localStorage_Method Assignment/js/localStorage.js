// Get the output div from the HTML
const outputDiv = document.getElementById("output");

// Helper function to display text on the screen
function display(text) {
    outputDiv.innerHTML += text + "<br>";
}

display("<strong>--- Starting localStorage Demo ---</strong><br>");

// 1. STORE DATA (setItem method)
localStorage.setItem('username', 'JohnDoe');
localStorage.setItem('age', '25');
localStorage.setItem('userPreferences', JSON.stringify({theme: 'dark', lang: 'en'}));
display("1. Data stored successfully.");

// 2. RETRIEVE DATA (getItem method)
let username = localStorage.getItem('username');
display("2. Retrieved username: " + username);

let age = localStorage.getItem('age');
display("   Retrieved age: " + age);

// For objects, parse the JSON string
let preferences = JSON.parse(localStorage.getItem('userPreferences'));
display("   Retrieved preferences: " + JSON.stringify(preferences));

// 3. REMOVE SPECIFIC ITEM (removeItem method)
localStorage.removeItem('age');
display("3. Removed 'age' from localStorage.");

// Check if it's gone
let ageAfterRemove = localStorage.getItem('age');
display("   Checking age after removal: " + ageAfterRemove);

// 4. ACCESS ALL STORED DATA
display("4. Number of items stored: " + localStorage.length);
display("   First key name: " + localStorage.key(0));

// 5. ALTERNATIVE SYNTAX (direct property access)
localStorage.email = 'john@example.com';
display("5. Set email via property: " + localStorage.email);

display("<br><strong>--- Demo Complete! ---</strong>");
