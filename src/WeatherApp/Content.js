import React from "react";
import "../styles/Content.css";
import WeatherIcon from "./WeatherIcons";
import BlockCards from "./BlockCards";
import DetailedInfo from "./DetailedInfo";
import TodayDate from "./TodayDate";
import Search from "./Search";

function Content(props) {
  const [modal, setModal] = React.useState({
    isOpen: false,
    city: "",
  });
  const [search, setSearch] = React.useState(false);

  return (
    <div className="container-main">
      <div className="header">
        <div className="header__title">
          <div className="header__name">Weather App</div>
          <WeatherIcon weather={"обл"} nameClass={"header__icon"} />
        </div>
        <div className="header__center">
          <TodayDate/>
        </div>
        <div className="block-button">
          <button className="block-button__button-theme">Тема</button>
        </div>
      </div>
      {search && <Search setSearch={setSearch}/>}
      {
        !search && (
          modal.isOpen ? (
            <DetailedInfo modal={modal} setModal={setModal} />
          ) : (
            <BlockCards cities={props.cities} modal={modal} setModal={setModal} setSearch={setSearch}/>
          )
        )
      }
    </div>
  );
}

export default Content;