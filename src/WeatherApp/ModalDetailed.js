import React from "react";
import WeatherIcon from "./WeatherIcons";
import "../styles/Modal.css";
import "../../node_modules/animate.css/animate.css";

function NextDay(props) {
  let day = props.day;
  return (
    <div className="day">
      <div className="day__title">{day.day}</div>
      <WeatherIcon weather={day.weather} nameClass={"day__icon"} />
      <div className="day__temp">{day.temp}°</div>
      <div className="day__weather">{day.weather}</div>
    </div>
  );
}

function ModalDetailed(props) {
  let city = props.modal.city;
  let setModal = props.setModal;

  if (props.modal.isOpen) {
    console.log(city);
    return (
      <div className="container-modal">
        <div
          className="container-modal__button-back"
          onClick={() => setModal({...props.modal, isOpen: false})}
        >
          <svg viewBox="4085 152 98.5 126">
            <g transform="translate(3980)">
              <circle
                className="a"
                cx="39"
                cy="39"
                r="39"
                transform="translate(105 152)"
              ></circle>
              <line
                className="b"
                transform="translate(123.5 190.5)"
                x1="80"
              ></line>
              <line
                className="b"
                transform="translate(123.5 164.5)"
                x2="26"
                y1="26"
              ></line>
              <line
                className="c"
                transform="translate(123.5 190.5)"
                x1="26"
                y1="27"
              ></line>
            </g>
          </svg>
        </div>
        <div className="modal-window">
          <div className="block-top">
            <div className="block-top-left">
              <div className="block-top-left__temp">{city.currentDay.temp}°</div>
              <div className="block-top-left__weather">{city.currentDay.weather}</div>
              <div className="block-top-left__other">
                <div className="block-top-left__humidity">
                  <div>Влажность</div>
                  {city.currentDay.humidity}%
                </div>
                <div className="block-top-left__wind">
                  <div>Ветер</div>
                  {city.currentDay.wind} м/c
                </div>
              </div>
            </div>
            <div className="block-top-right">
              <div className="block-top-right__name-city">{city.name}</div>
            </div>
          </div>
          <div className="block-bottom">
            <div className="next-days">
              {city.nextDays.map(item => {
                return <NextDay day={item} key={item.day} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
}

export default ModalDetailed;
