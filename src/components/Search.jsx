import React, { useState } from "react";
import { useLocationUpdate } from "./LocationProvider";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const changeLocation = useLocationUpdate();

  const handleSubmit = (event) => {
    event.preventDefault();
    changeLocation(searchValue);
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Where are you?"
          type="text"
          value={searchValue}
          onChange={handleChange}
          onSubmit={() => changeLocation(searchValue)}
        />
        <button
          type="submit"
          className="fa fa-search"
          onSubmit={() => changeLocation(searchValue)}
        ></button>
      </form>
    </div>
  );
};

export default Search;
