import React from "react";
import "../styles/Cards.css";
import Card from "./Card";
import AddCard from "./AddCard";
import "../../node_modules/animate.css/animate.css";

function BlockCards(props) {
  let cities = props.cities;

  return (
    <div className="container-cards">
      {cities.map(item => {
        return (
          <Card
            city={item}
            key={item.name}
            modal={props.modal}
            setModal={props.setModal}
          />
        );
      })}
      <AddCard />
    </div>
  );
}

export default BlockCards;