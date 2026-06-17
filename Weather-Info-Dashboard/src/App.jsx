import { useState, useEffect } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherCard from "./components/WeatherCard";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);

  const API_KEY = "59511a589f381c58968b5eaab8b721d7";

  // Current Location Weather
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
        } catch (err) {
          console.log(err);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  // Load Search History
  useEffect(() => {
    const savedHistory =
      JSON.parse(localStorage.getItem("weatherHistory")) || [];

    setHistory(savedHistory);
  }, []);

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError("");
      setWeather(null);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("Invalid City Name");
      }

      const data = await response.json();

      setWeather(data);

      const updatedHistory = [
        city,
        ...history.filter((item) => item !== city),
      ].slice(0, 5);

      setHistory(updatedHistory);

      localStorage.setItem(
        "weatherHistory",
        JSON.stringify(updatedHistory)
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>🌦 Weather Info Dashboard</h1>

      <WeatherForm onSearch={fetchWeather} />

      {loading && <Loading />}

      {error && <ErrorMessage message={error} />}

      {weather && <WeatherCard weather={weather} />}

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
    </div>
  );
}

export default App;