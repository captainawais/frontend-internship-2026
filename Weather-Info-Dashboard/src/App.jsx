import { useState, useEffect } from "react";

import WeatherForm from "./components/WeatherForm";
import WeatherCard from "./components/WeatherCard";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";

import sunny from "./assets/weather/sunny.jpg";
import cloudy from "./assets/weather/cloudy.jpg";
import rainy from "./assets/weather/rainy.jpg";
import thunder from "./assets/weather/thunder.jpg";
import storm from "./assets/weather/storm.jpg";
import snow from "./assets/weather/snow.jpg";
import fog from "./assets/weather/fog.jpg";
import mist from "./assets/weather/mist.jpg";
import night from "./assets/weather/night.jpg";

import "./App.css";

function App() {

  // =========================
  // STATES
  // =========================

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);

  // OpenWeather API Key
  const API_KEY = "59511a589f381c58968b5eaab8b721d7";

  // =========================
  // DYNAMIC BACKGROUND
  // =========================

  let bgImage = sunny;

  if (weather) {


    const condition = weather.weather[0].main;

    switch (condition) {

      case "Clear":
        bgImage = sunny;
        break;

      case "Clouds":
        bgImage = cloudy;
        break;

      case "Rain":
      case "Drizzle":
        bgImage = rainy;
        break;

      case "Thunderstorm":
        bgImage = thunder;
        break;

      case "Snow":
        bgImage = snow;
        break;

      case "Mist":
        bgImage = mist;
        break;

      case "Fog":
      case "Smoke":
      case "Haze":
        bgImage = fog;
        break;

      case "Squall":
      case "Tornado":
        bgImage = storm;
        break;

      default:
        bgImage = night;
    }


  }

  // =========================
  // CURRENT LOCATION WEATHER
  // =========================

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(

      async (position) => {

        try {

          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );

          const data = await response.json();

          setWeather(data);

        } catch (error) {

          console.log(error);

        }
      },

      (error) => {

        console.log(error);

      }
    );


  }, []);

  // =========================
  // LOAD HISTORY FROM STORAGE
  // =========================

  useEffect(() => {


    const savedHistory =
      JSON.parse(localStorage.getItem("weatherHistory")) || [];

    setHistory(savedHistory);


  }, []);

  // =========================
  // SEARCH WEATHER FUNCTION
  // =========================

  const fetchWeather = async (city) => {


    try {

      setLoading(true);
      setError("");
      // setWeather(null);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {

        throw new Error("Invalid City Name");

      }

      const data = await response.json();

      setWeather(data);



      // =========================
      // SAVE LAST 5 SEARCHES
      // =========================

      const updatedHistory = [
        city,
        ...history.filter((item) => item !== city),
      ].slice(0, 5);

      setHistory(updatedHistory);

      localStorage.setItem(
        "weatherHistory",
        JSON.stringify(updatedHistory)
      );

    } catch (error) {

      setError(error.message);

    } finally {

      setLoading(false);

    }


  };

// =========================
// UI
// =========================

return (

  <div
    className="app"
    style={{
      backgroundImage: `url(${bgImage})`,
    }}
  >

    <div className="dashboard-layout">

      {/* =========================
          LEFT SIDEBAR
      ========================= */}

      <aside className="sidebar">

        <h2>🌦 WeatherScope</h2>

        <button>🏠 Dashboard</button>

        <button>🔍 Search Cities</button>

        <button>⭐ Saved Cities</button>

        <button>📅 Forecast</button>

      </aside>



      {/* =========================
          RIGHT CONTENT AREA
      ========================= */}

      <main className="dashboard-content">

        {/* Search Bar */}

        <WeatherForm onSearch={fetchWeather} />



        {/* Recent Searches */}

        {history.length > 0 && (

          <div className="history">

            <h3>Recent Searches</h3>

            <div className="history-buttons">

              {history.map((city, index) => (

                <button
                  key={index}
                  onClick={() => fetchWeather(city)}
                >
                  {city}
                </button>

              ))}

            </div>

          </div>

        )}



        {/* =========================
            Weather Area
        ========================= */}

        <div className="weather-section">

          {loading ? (

            <Loading />

          ) : error ? (

            <ErrorMessage message={error} />

          ) : weather ? (

            <WeatherCard weather={weather} />

          ) : null}

        </div>

      </main>

    </div>

  </div>

);
}

export default App;
