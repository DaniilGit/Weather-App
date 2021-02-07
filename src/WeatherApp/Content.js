import React, {Component, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import "../styles/Content.css";
import Icon from "./Icons";

function Content() {

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
    </div>
  );
}

export default Content;