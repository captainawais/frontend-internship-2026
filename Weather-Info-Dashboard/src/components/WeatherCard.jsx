function WeatherCard({ weather }) {

  return (


    <div className="weather-card">

      {/* =========================
      LIVE WEATHER BADGE
      ========================= */}

      <div className="location-badge">
        📍 Live Weather
      </div>



      {/* =========================
      WEATHER ICON
      ========================= */}

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        alt="weather"
      />



      {/* =========================
      CITY & COUNTRY
      ========================= */}

      <h2>
        {weather.name}, {weather.sys.country}
      </h2>



      {/* =========================
      CURRENT TEMPERATURE
       ========================= */}

      <h1>
        {Math.round(weather.main.temp)}°C
      </h1>



      {/* =========================
      WEATHER CONDITION
      ========================= */}

      <p className="condition">
        {weather.weather[0].description}
      </p>



      {/* =========================
      WEATHER DETAILS GRID
      ========================= */}

      <div className="weather-info">

        {/* Humidity */}

        <div className="info-box">
          <h3>💧 Humidity</h3>
          <p>{weather.main.humidity}%</p>
        </div>



        {/* Wind Speed */}

        <div className="info-box">
          <h3>🌬 Wind</h3>
          <p>{weather.wind.speed} km/h</p>
        </div>



        {/* Feels Like */}

        <div className="info-box">
          <h3>🌡 Feels Like</h3>
          <p>
            {Math.round(
              weather.main.feels_like
            )}°C
          </p>
        </div>



        {/* Pressure */}

        <div className="info-box">
          <h3>🔽 Pressure</h3>
          <p>{weather.main.pressure} hPa</p>
        </div>



        {/* Visibility */}

        <div className="info-box">
          <h3>👀 Visibility</h3>
          <p>
            {weather.visibility / 1000} km
          </p>
        </div>



        {/* Cloud Percentage */}

        <div className="info-box">
          <h3>☁ Clouds</h3>
          <p>{weather.clouds.all}%</p>
        </div>

      </div>



      {/* =========================
      FUTURE FEATURES
      (V2 / V3)
      =========================

        🌅 Sunrise
        🌇 Sunset
        ☀ UV Index
        🌫 Air Quality
        📅 7 Day Forecast
        ⏰ Local Time
        🗺 Map View
        📊 Hourly Forecast

       ========================= */}

    </div>


  );
}

export default WeatherCard;
