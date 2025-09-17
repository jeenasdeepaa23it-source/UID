import React from "react";

function Weather({ data }) {
  if (data.cod !== 200) {
    return <p style={{ color: "red" }}>❌ City not found</p>;
  }

  // OpenWeatherMap icon URL
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>
        {data.name}, {data.sys.country}
      </h2>
      <img src={iconUrl} alt={data.weather[0].description} />
      <h3>{data.weather[0].description.toUpperCase()}</h3>
      <p>🌡 Temperature: {data.main.temp} °C</p>
      <p>🌡 Feels Like: {data.main.feels_like} °C</p>
      <p>💧 Humidity: {data.main.humidity}%</p>
      <p>💨 Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
}

export default Weather;
