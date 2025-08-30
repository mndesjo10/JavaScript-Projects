// Function to check if rider can ride using ternary operator
function Ride_Function() {
    // Get the height from the input field
    const Height = document.getElementById("Height").value;

    // Use ternary operator to determine if rider can ride
    const Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";

    // Display result in the paragraph
    const rideElem = document.getElementById("Ride");
    if (!rideElem) {
        console.error('Element with ID "Ride" not found.');
        return;
    }
    rideElem.innerHTML = Can_ride + " to ride.";
}
