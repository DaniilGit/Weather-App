import React from "react";
import WeatherIcon from "./WeatherIcons";
import "../styles/Modal.css"

function ModalDetailed(props) {
  let modal = props.modal;
  let setModal = props.setModal;

  if (modal.isOpen) {
    console.log(modal.city);
    return (
      <div className="modal">
        <div className="name-city">{modal.city.name}</div>
      </div>
    );
  } else return null;
}

export default ModalDetailed;