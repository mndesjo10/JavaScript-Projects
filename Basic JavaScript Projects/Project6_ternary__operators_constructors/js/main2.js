// Vehicle constructor function
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// Create new vehicle using "new"
var Joel = new Vehicle("Dodge", "Viper", 2021, "Red");
var Edson = new Vehicle("Jeep", "Trail Hawk", 2020, "White and Black");
var Fidel = new Vehicle("BMW", "X5", 2022, "Blue");

// Function to display result
function myFunction() {
    const resultElem = document.getElementById("Keywords_and_Constructors");
    if (!resultElem) {
        console.error("Element with ID 'Keywords_and_Constructors' not found.");
        return;
    }
    resultElem.innerHTML = "Joel drives a " + Joel.Vehicle_Color + "-colored " + Joel.Vehicle_Model + " manufactured in " + Joel.Vehicle_Year;
}