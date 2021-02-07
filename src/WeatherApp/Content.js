import React from "react";
import "../styles/Content.css";
import Icon from "./Icons";
import Loader from "./Loader";

function Content(props) {
  let isLoading = props.isLoading;

  return (
    <div className="lightTheme main-container">
      <div className="header">
        <div className="title">
          <div className="title__name">Weather App</div>
          <Icon weather={"cloudy"} nameClass={"title__icon"}/>
        </div>
        <div className="header__center">TODAY</div>
        <div className="container-button">
          <button>Тема</button>
          <button>Язык</button>
        </div>
      </div>
      <div className="cards-container">
      </div>
    </div>
  );
}

export default Content;