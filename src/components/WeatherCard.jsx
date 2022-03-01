import React from "react";
import { useLocation, useDataContext } from "./LocationProvider";

const WeatherCard = () => {
  const weatherData = useDataContext();
  const location = useLocation();
  let results;

  try {
    results = (
      <ul className="weather-card">
        <li className="darker-list">
          <div className="subject">Current weather: </div>
          <div className="reading">{weatherData.weather[0].description}</div>
        </li>
        <li className="brighter-list">
          <div className="subject">Temperature: </div>
          <div className="reading">{weatherData.main.temp}°C</div>
        </li>
        <li className="darker-list">
          <div className="subject">Feels like: </div>
          <div className="reading">{weatherData.main.feels_like}°C</div>
        </li>
        <li className="brighter-list">
          <div className="subject">Lowest Temperature: </div>
          <div className="reading">{weatherData.main.temp_min}°C</div>
        </li>
        <li className="darker-list">
          <div className="subject">Highest Temperature: </div>
          <div className="reading">{weatherData.main.temp_max}°C</div>
        </li>
        <li className="brighter-list">
          <div className="subject">Humidity: </div>
          <div className="reading">{weatherData.main.humidity}</div>
        </li>
        <li className="darker-list">
          <div className="subject">Wind Speed: </div>
          <div className="reading">{weatherData.wind.speed}m/s</div>
        </li>
        <li className="brighter-list">
          <div className="subject">Cloudiness: </div>
          <div className="reading">{weatherData.clouds.all}%</div>
        </li>
      </ul>
    );
  } catch (e) {
    results = (
      <>
        <br />
        <br />
        <br />
        Error retrieving data
      </>
    );
  }

  return (
    <div className="results">
      Country/City: <b>{location}</b>
      {results}
    </div>
  );
};

export default WeatherCard;
