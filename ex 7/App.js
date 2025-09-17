import React, { useState } from "react";
import Weather from "./weather";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "e0aab46db24ef84849a3521703d69884"; // Replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <div className="app" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🌤 Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button onClick={fetchWeather} style={{ padding: "10px" }}>
        Get Weather
      </button>

      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;
