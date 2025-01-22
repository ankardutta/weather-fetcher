// script.js
const apiKey = "a4523363c5c648f4b2e181556252201";
const weatherBtn = document.getElementById("get-weather-btn");
const locationInput = document.getElementById("location-input");
const temperatureDisplay = document.getElementById("temperature");
const conditionDisplay = document.getElementById("condition");

weatherBtn.addEventListener("click", () => {
  const location = locationInput.value.trim();
  if (!location) {
    alert("Please enter a location!");
    return;
  }

  // Fetch weather data
  fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Location not found");
      }
      return response.json();
    })
    .then(data => {
      const temp = data.current.temp_c; // Temperature in Celsius
      const condition = data.current.condition.text; // Weather condition
      temperatureDisplay.textContent = `Temperature: ${temp}°C`;
      conditionDisplay.textContent = `Condition: ${condition}`;
    })
    .catch(error => {
      temperatureDisplay.textContent = "";
      conditionDisplay.textContent = "";
      alert("Error: " + error.message);
    });
});
