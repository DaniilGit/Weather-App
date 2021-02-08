import React from "react";
import "../styles/Cards.css";
import Icon from "@material-ui/core/Icon";
import WeatherIcons from "./WeatherIcons";

function Card(props) {
  let weather = props.weather;

  return (
    <div className="card">
      <div className="name-city">{weather.name}</div>
      <WeatherIcons
        weather={weather.currentDay.weather}
        nameClass={"icon-weather"}
      />
      <div className="temp">{weather.currentDay.temp + "°"}</div>
      <div className="weather">{weather.currentDay.weather}</div>
      <div className="min-max-temp">
        <div className="min">
          <Icon>arrow_drop_down</Icon>
          <div className="temp">{weather.currentDay.tempMin + "°"}</div>
          <span>Min</span>
        </div>
        <div className="max">
          <Icon>arrow_drop_up</Icon>
          <div className="temp">{weather.currentDay.tempMax + "°"}</div>
          <span>Max</span>
        </div>
      </div>
    </div>
  );
}

export default Card;