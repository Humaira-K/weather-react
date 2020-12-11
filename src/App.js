import React from "react";
import "./App.css";
import Footer from "./Footer";
import Forecast from "./Forecast";
import Search from "./Search";
import TodaysWeather from "./TodaysWeather";
import WeatherDetails from "./WeatherDetails";

export default function App() {
  return (
    <div className="App">
      
        <div className="card">
          <div className="card-body">
          
            <Search />
            <br />
            <TodaysWeather />
            <br />
            <WeatherDetails /> ​
            <hr />
            <Forecast />
          </div>
        </div>

        <Footer />
      
      <script src="src/script.js"></script>
    </div>
  );
}



