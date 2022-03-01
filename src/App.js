import React, { Component, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import WeatherCards from "./components/WeatherCards";
import LocationProvider from "./components/LocationProvider";

function App() {
  return (
    <div className="App">
      <LocationProvider>
        <Header />
        <Search />
        <WeatherCards />
      </LocationProvider>
    </div>
  );
}

export default App;
