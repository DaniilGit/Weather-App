import React from "react";
import "../styles/Content.css";
import WeatherIcon from "./WeatherIcons";
import BlockCards from "./BlockCards";

function Content(props) {

  return (
    <div className="lightTheme main-container">
      <div className="header">
        <div className="title">
          <div className="title__name">Weather App</div>
          <WeatherIcon weather={"обл"} nameClass={"title__icon"} />
        </div>
        <div className="header__center">TODAY</div>
        <div className="container-button">
          <button>Тема</button>
        </div>
      </div>
      <BlockCards cities={props.cities} />
    </div>
  );
}

export default Content;