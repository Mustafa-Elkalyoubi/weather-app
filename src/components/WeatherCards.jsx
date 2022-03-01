import React, { Component, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import { useUpdateDataContext, useLocation } from "./LocationProvider";
import getWeather from "../api/getWeather";

const WeatherCards = () => {
  const location = useLocation();
  const updateData = useUpdateDataContext();

  useEffect(() => {
    getWeather(location).then((data) => {
      updateData(data);
    });
  }, [location]);

  return (
    <div className="weather-cards">
      <WeatherCard />
    </div>
  );
};

export default WeatherCards;
