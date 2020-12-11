import React from "react";

export default function TodaysWeather() {
  return (
    <div>
    

      <section className="todaysWeather">
        <div className="row" id="details">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny"
              id="icon"
            />
          </div>
          <div className="col-6">
            <span id="number">10</span>
            <span className="units">
              <a href="/" className="celsius active">
                °C{" "}
              </a>
              |
              <a href="/" className="fahrenheit">
                °F{" "}
              </a>
            </span>

            <div id="description">Sunny</div>
          </div>
        </div>
      </section>
    </div>
  );
}
