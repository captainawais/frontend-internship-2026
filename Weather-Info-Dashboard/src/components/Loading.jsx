function Loading() {
  return (
    <div className="loading-container">

      <div className="weather-loader">
        <div className="spinner"></div>
      </div>

      <h3>Fetching Weather Data...</h3>

      <p>Please wait while we get the latest forecast</p>

    </div>
  );
}

export default Loading;