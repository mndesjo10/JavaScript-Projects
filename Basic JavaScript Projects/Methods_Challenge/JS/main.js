// Global variables for the demonstration
const originalText = "The Quick Brown Fox Jumps Over The Lazy Dog";
const searchExamples = ["fox", "Fox", "dog", "elephant", "quick", "Quick"];

//Function to demonstrate the toUpperCase() method
function demonstrateToUpperCase() {
    // The toUpperCase() method converts all characters in a string to uppercase
    // It does not modify the original string but returns a new string
    const upperCaseText = originalText.toUpperCase();

    // Example 1: Basic conversion
    const example1 = "hello world".toUpperCase(); // "HELLO WORLD"

    // Example 2: Mixed case numbers and symbols
    const mixedText = "Hello World! 123 @#$%";
    const upperCaseMixed = mixedText.toUpperCase(); // "HELLO WORLD! 123 @#$%"

    // Example 3: Already uppercase text
    const alreadyUpper = "HELLO";
    const upperCaseAlready = alreadyUpper.toUpperCase(); // "HELLO"

    // Example 4: Single characters
    const lowerChar = "a".toUpperCase(); // "A"
    const upperChar = "A".toUpperCase(); // "A"

    // Example 5: Empty string
    const emptyString = "".toUpperCase(); // ""

    // Debug information to console
    console.log("=== toUpperCase() Method Demonstration ===");
    console.log("Original Text:", originalText);
    console.log("After toUpperCase():", upperCaseText);
    console.log("Returns type:", typeof upperCaseText);
    console.log("Original text unchanged:", originalText);
    console.log("Length unchanged:", originalText.length === upperCaseText.length);

    // Display the result page
    const resultElement = document.getElementById("toUpperCaseResult");
    if (resultElement) {
        resultElement.innerHTML = `
            <strong>toUpperCase() Method Results:</strong><br>
            <div class="example">
                <strong>Original:</strong> "${originalText}"<br>
                <strong>toUpperCase():</strong> "${upperCaseText}"<br>
                <strong>Length:</strong> ${originalText.length} characters (unchanged)
            </div>

            <strong>Additional Examples:</strong><br>
            <div class="example">
                "hello world" → "${example1}"
            </div>
            <div class="example">
                "${mixedText}" → "${upperCaseMixed}"
            </div>
            <div class="example">
                "${alreadyUpper}" → "${upperCaseAlready}" (no change)
            </div>
            <div class="example">
                "a" → "${lowerChar}", "A" → "${upperChar}"
            </div>
            <div class="example">
                "" (empty) → "${emptyString}" (still empty)
            </div>

            <em>Note: toUpperCase() creates a new string without modifying the original.
            It's commonly used for case-insensitive comparisons by converting both strings to uppercase.</em>
        `;

        // Add some styling to highlight the results
        resultElement.style.backgroundColor = "#d4edda";
        resultElement.style.borderColor = "#28a745";
    } else {
        console.error('Element with ID "toUpperCaseResult" not found.');
    }
}

// Function to demonstrate the search() method
function demonstrateSearch() {
    // The search() method searches for a specified value and returns the posistion of the match
    // If no match is found, it returns -1
    // The search is case-sensitive by defualt

    // Example 1: Finding, an exact match (Case-sensitive)
    const position1 = originalText.search("Fox");

    // Example 2: Case-sensitive search (won't find lowercase)
    const position2 = originalText.search("fox");
    
    // Example 3: Searching for non-existent text
    const position3 = originalText.search("unicorn");

    // Example 4: Finding first occurence of repeated word
    const position4 = originalText.search("The");

    // Example 5: Using regular expression for case-insensitive search
    const position5 = originalText.search(/FOX/i);

    // Example 6: Searching for a single character
    const position6 = originalText.search("q");

    // Example 7: Searching from a specific position (using indexOf for comparison)
    const position7 = originalText.indexOf("The", 5); // Find "The" after position 5

    // Debug information to console
    console.log("=== search() Method Demonstration ===");
    console.log("Original Text:", originalText);
    console.log(`search("Fox"):`, position1, "(found at index", position1, ")");
    console.log(`search("fox"):`, position2, "(not found - returns", position2, ")");
    console.log(`search("unicorn"):`, position3, "(not found - returns", position3, ")");
    console.log(`search("The"):`, position4, "(first occurence at index", position4, ")");
    console.log(`search(/FOX/i):`, position5, "(case-insensitive, found at index", position5, ")");
    console.log(`search("q"):`, position6, "(found at index", position6, ")");
    console.log(`indexOf("The", 5):`, position7, "(second occurence at index", position7, ")");
    
    // Display the result on the page
    const resultElement = document.getElementById("searchResult");
    if (resultElement) {
        resultElement.innerHTML = `
            <strong>search() Method Results:</strong><br>
            <div class="example">
                <strong>Text:</strong> "${originalText}"<br>
                <strong>search("Fox"):</strong> ${position1} (found at position ${position1})<br>
                <strong>search("fox"):</strong> ${position2} (not found - case sensitive)<br>
                <strong>search("unicorn"):</strong> ${position3} (not found)<br>
                <strong>search("The"):</strong> ${position4} (first occurence)<br>
                <strong>search(/FOX/i):</strong> ${position5} (case-insensitive search)<br>
                <strong>search("q"):</strong> ${position6} (found at position ${position6})<br>
            </div>

            <strong>Key Points:</strong><br>
            • Returns <strong>index position</strong> of first character of match<br>
            • Returns <strong>-1</strong> when no match is found<br>
            • <strong>Case-sensitive</strong> by default<br>
            • Can use <strong>regular expressions</strong> for advanced searches<br>
            • Only finds the <strong>first occurence</strong> (unlike match() which finds all)<br>

            <em>Note: search() is ideal for determining if text exists and where.
            For case-insensitive searches, use regular expressions with the 'i' flag.</em>
        `;

        // Add some styling to highlight the results
        resultElement.style.backgroundColor = "#fff3cd";
        resultElement.style.borderColor = "#ffc107";
    } else {
        console.error('Element with ID "searchResult" not found.');
    }
}

// Function to reset the toUpperCase result display
function resetToUpperCaseResult() {
    const resultElement = document.getElementById("toUpperCaseResult");
    if (resultElement) {
        resultElement.innerHTML = "Click the button above to see the result of the toUpperCase() method.";
        resultElement.style.backgroundColor = "#d4edda";
        resultElement.style.borderColor = "#28a745";
    }

    console.log("toUpperCase result has been reset.");
}

// Function to reset the search result display
function resetSearchResult() {
    const resultElement = document.getElementById("searchResult");
    if (resultElement) {
        resultElement.innerHTML = "Click the button above to see the result of the search() method.";
        resultElement.style.backgroundColor = "#fff3cd";
        resultElement.style.borderColor = "#ffc107";
    }

    console.log("search result has been reset.");
}

// Practical application: Case-insensitive search using toUpperCase()
function practicalApplication() {
    const userText = "Welcome to our Website! We hope you enjoy your visit.";
    const searchTerm = "website";

    // Convert both to uppercase for case-insensitive comparison
    const userTextUpper = userText.toUpperCase();
    const searchTermUpper = searchTerm.toUpperCase();
    
    const position = userTextUpper.search(searchTermUpper);

    console.log("=== Practical Application ===");
    console.log("User text:", userText);
    console.log("Search term:", searchTerm);
    console.log("Case-insensitive search result:", position);

    if (position !== -1) {
        console.log(`found "${searchTerm}" at position ${position}`);
    } else {
        console.log(`"${searchTerm}" not found`);
    }
}

// Initialize when page loads
console.log("main.js loaded successfully.");
console.log("Available functions: demonstrateToUpperCase(), resetToUpperCaseResult(), demonstrateSearch(), resetSearchResult(), practicalApplication()");
console.log("Page ready for string methods demonstration.");

// Uncomment the line below to see the practical application in the console
// practicalApplication();