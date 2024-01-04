import React from "react";
import { useState } from "react";
import "./WeatherApp.css";
import searchIcon from "../Asset/search.png";
// import clearIcon from "../Asset/clear.png";
import cloudIcon from "../Asset/cloud.png";
import clearIcon from "../Asset/clear.png";
import drizzleIcon from "../Asset/drizzle.png";
import rainIcon from "../Asset/rain.png";
import snowIcon from "../Asset/snow.png";
import windIcon from "../Asset/wind.png";
import humidityIcon from "../Asset/humidity.png";
const WeatherApp = () => {
  let apiKey = "337071406e4aa0cb932a5b6a50036e09";
  let [icon, setIcon] = useState(cloudIcon);
  // search city
  let search = async () => {
    const element = document.getElementsByClassName("cityInput");
    console.log(element[0].value);
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;
    // fetching data
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    //targeting Elements
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-speed");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    //updation of data
    humidity[0].textContent = data.main.humidity + "%";
    wind[0].textContent = data.wind.speed + " km/h";
    temperature[0].textContent = data.main.temp + "°C";
    location[0].textContent = data.name;
    //image updation
    console.log(data.weather[0].icon);
    console.log(icon);
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setIcon( clearIcon );
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setIcon( cloudIcon );
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setIcon( drizzleIcon );
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setIcon(drizzleIcon );
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setIcon( rainIcon );
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setIcon( rainIcon );
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setIcon( snowIcon );
    } else {
      setIcon( clearIcon );
    }
  };
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" class="cityInput" placeholder="Search" />
        <div className="search-icon" onClick={() => search()}>
          <img src={searchIcon} alt="searchIcon" />
        </div>
      </div>
      <div className="weather-image">
        <img src={icon} alt="cloudIcon" className="icon" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidityIcon} alt="humidityIcon" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windIcon} alt="windIcon" className="icon" />
          <div className="data">
            <div className="wind-speed">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
