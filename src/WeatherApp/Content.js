import React from "react";
import "../styles/Content.css";
import WeatherIcon from "./WeatherIcons";
import BlockCards from "./BlockCards";
import ModalDetailed from "./ModalDetailed";

function Content(props) {
  const [modal, setModal] = React.useState({
    isOpen: false,
    city: "",
  });

  return (
    <div className="main-container">
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
      {modal.isOpen ? (
        <ModalDetailed modal={modal} setModal={setModal} />
      ) : (
        <BlockCards cities={props.cities} modal={modal} setModal={setModal} />
      )}
    </div>
  );
}

export default Content;