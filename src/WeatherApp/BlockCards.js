import React from "react";
import "../styles/Cards.css";
import Card from "./Card";
import AddCard from "./AddCard";
import ModalDetailed from "./ModalDetailed";

function BlockCards(props) {
  const [modal, setModal] = React.useState({
    isOpen: false,
    city: "",
  })
  let cities = props.cities;

  return (
    <div className="container-cards">
      {cities.map(item => {
        return (
          <Card
            weather={item}
            key={item.name}
            modal={modal}
            setModal={setModal}
          />
        );
      })}
      <AddCard />
      <ModalDetailed modal={modal} setModal={setModal}/>
    </div>
  );
}

export default BlockCards;