function WeatherCard({ weather }) {
  return (
    <div className="weather-card">

      <div className="location-badge">
        📍 Live Weather
      </div>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        alt="weather"
      />

      <h2>{weather.name}, {weather.sys.country}</h2>

      <h1>{Math.round(weather.main.temp)}°C</h1>

      <p className="condition">
        {weather.weather[0].description}
      </p>

      <div className="weather-info">

        <div className="info-box">
          <h3>💧 Humidity</h3>
          <p>{weather.main.humidity}%</p>
        </div>

        <div className="info-box">
          <h3>🌬 Wind</h3>
          <p>{weather.wind.speed} km/h</p>
        </div>

        <div className="info-box">
          <h3>🌡 Feels Like</h3>
          <p>{Math.round(weather.main.feels_like)}°C</p>
        </div>

        <div className="info-box">
          <h3>🔽 Pressure</h3>
          <p>{weather.main.pressure} hPa</p>
        </div>

        <div className="info-box">
          <h3>👀 Visibility</h3>
          <p>{weather.visibility / 1000} km</p>
        </div>

        <div className="info-box">
          <h3>☁ Clouds</h3>
          <p>{weather.clouds.all}%</p>
        </div>

      </div>

    </div>
  );
}

export default WeatherCard;