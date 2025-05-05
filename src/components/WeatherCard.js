const WeatherCard = ({ weather }) => {
    const { name, main, weather: details } = weather;
    const iconUrl = `https://openweathermap.org/img/wn/${details[0].icon}@2x.png`;
  
    return (
      <div className="weather-card">
        <h2>{name}</h2>
        <img src={iconUrl} alt={details[0].description} />
        <p>{details[0].main}</p>
        <p>{main.temp} °C</p>
      </div>
    );
  };
  
  export default WeatherCard;
  