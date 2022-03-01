import React, { useState, useEffect, useContext } from "react";

const LocationContext = React.createContext();
const LocationUpdateContext = React.createContext();

const DataContext = React.createContext();
const UpdateDataContext = React.createContext();

export function useLocation() {
  return useContext(LocationContext);
}
export function useLocationUpdate() {
  return useContext(LocationUpdateContext);
}

export function useDataContext() {
  return useContext(DataContext);
}
export function useUpdateDataContext() {
  return useContext(UpdateDataContext);
}

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState("Dubai");
  const [data, setData] = useState({
    weather: [
      {
        main: "0",
        description: "0",
        icon: "0",
      },
    ],
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      humidity: 0,
    },
    wind: {
      speed: 0,
    },
    clouds: {
      all: 0,
    },
    name: "0",
  });

  const changeLocation = (e) => {
    setLocation(e);
  };

  const updateData = (e) => {
    setData(e);
  };

  return (
    <LocationContext.Provider value={location}>
      <LocationUpdateContext.Provider value={changeLocation}>
        <DataContext.Provider value={data}>
          <UpdateDataContext.Provider value={updateData}>
            {children}
          </UpdateDataContext.Provider>
        </DataContext.Provider>
      </LocationUpdateContext.Provider>
    </LocationContext.Provider>
  );
};

export default LocationProvider;
