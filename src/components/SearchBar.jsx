import { useState } from "react";
import "../styles/SearchBar.css";

function SearchBar() {
  const [city, setCity] = useState("");
const [weather, setWeather] = useState(null);

const API_KEY = "2d29ed530693e1b17afda867d7dfcf50";

  function handleChange(event) {
    setCity(event.target.value);
  }

  async function handleSearch() {
    if (city.trim() === "") {
      alert("Please enter a city name.");
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
console.log(url);
    try {
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);

      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert(data.message);
        setWeather(null);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  return (
  <div className="search-container">

    <div className="search-box">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleSearch}>
        Search
      </button>
    </div>

    <div>
      <p>You are searching for: {city}</p>

      {weather && (
        <div className="weather-card">
          <h2>{weather.name}</h2>

          <p>
            🌡 Temperature: {weather.main.temp} °C
          </p>

          <p>
            💧 Humidity: {weather.main.humidity}%
          </p>

          <p>
            ☁ Condition: {weather.weather[0].description}
          </p>

          <p>
            💨 Wind Speed: {weather.wind.speed} m/s
          </p>
        </div>
      )}
    </div>

  </div>
);
}

export default SearchBar;