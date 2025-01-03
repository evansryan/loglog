// Set default date and time for the input fields on page load
document.addEventListener("DOMContentLoaded", () => {
  // Set the current date
  const dateInput = document.getElementById("date");
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(today.getDate()).padStart(2, "0");
  dateInput.value = `${year}-${month}-${day}`;

  // Set the current time
  const timeInput = document.getElementById("time");
  const hours = String(today.getHours()).padStart(2, "0");
  const minutes = String(today.getMinutes()).padStart(2, "0");
  timeInput.value = `${hours}:${minutes}`;
});

document.getElementById("zipcode").addEventListener("input", function (e) {
  const zipcode = e.target.value;

  // Only query when we have a 5-digit zip
  if (zipcode.length === 5) {
    // Using the free ZIPpo API
    fetch(`https://api.zippopotam.us/us/${zipcode}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid ZIP code");
        }
        return response.json();
      })
      .then((data) => {
        // Update city and state
        document.getElementById("city").value = data.places[0]["place name"];
        document.getElementById("state").value = data.places[0]["state"];
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("city").value = "";
        document.getElementById("state").value = "";
        // Optionally add user feedback about invalid ZIP
        alert("Please enter a valid ZIP code");
      });
  }
});
