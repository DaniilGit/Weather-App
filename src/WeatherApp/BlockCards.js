import React from "react";
import "../styles/Cards.css";
import Card from "./Card";

function BlockCards(props) {
  let cities = props.cities;
  console.log(cities);

  return <div className="container-cards">
    {cities.map(item => { 
      return <Card weather={item} key={item.name}/>
    })}
  </div>;
}

export default BlockCards;