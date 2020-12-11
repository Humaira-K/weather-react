import React, { useState } from "react";

export default function Search() {
  let [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      setMessage(`${city}`);
    } else {
      setMessage("Enter a city..");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
  
    <div className="searchedCity">
 
      <form  onSubmit={handleSubmit}>
      
              <input type="search"  placeholder="Enter a city..."
              autoFocus="on"
              autoComplete="off"
               onChange={updateCity} 
                className="form-control shadow-sm" id="search-input" />
           
            
              <input type="submit" value="Search" className="btn btn-outline-secondary btn-med" />
           
           
              <button type="submit" className="btn btn-outline-secondary btn-med" id="current-location">📍
              </button>
            
         
       
      </form>
     
      <hgroup>
      <h1>{message}</h1>
        <time id="date-time">Sunday November 20th 2020 12:00 PM</time>
      </hgroup>
      
    </div>
     
  );
}
