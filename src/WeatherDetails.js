import React from "react";

export default function WeatherDetails() {
  return (
    <section className="weatherDetails">
      <div className="row" id="weather-details">
    
        <div className="col-6">
          Humidity: <span id="humidity">80</span>%
        </div>
        <div className="col-6">
          Wind: <span id="wind">29</span>/KmH
        </div>
        <div className="col-6">
          Sunset: <span id="sunset">6:00 PM</span>
        </div>
        <div className="col-6">
          Sunrise: <span id="sunrise">5:00 AM</span>
        </div>
      </div>
    </section>
  );
}
