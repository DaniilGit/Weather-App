import React from "react";
import "../styles/Cards.css";
import Icon from "@material-ui/core/Icon";
import WeatherIcon from "./WeatherIcons";

function Card(props) {
  let city = props.city;

  return (
    <div
      className="card"
      onClick={() => {
        props.setModal({isOpen: true, city: city});
      }}
    >
      <div className="name-city">{city.name}</div>
      <WeatherIcon
        weather={city.currentDay.weather}
        nameClass={"icon-weather"}
      />
      <div className="temp">{city.currentDay.temp}°</div>
      <div className="weather">{city.currentDay.weather}</div>
      <div className="min-max-temp">
        <div className="min">
          <Icon className="temp-icon">arrow_drop_down</Icon>
          <div className="temp">{city.currentDay.tempMin}°</div>
          <span>Min</span>
        </div>
        <div className="max">
          <Icon className="temp-icon">arrow_drop_up</Icon>
          <div className="temp">{city.currentDay.tempMax}°</div>
          <span>Max</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
