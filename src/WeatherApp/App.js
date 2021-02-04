import React, {Component, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "../styles/App.css";

async function getWeather(city, setData, data) {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&appid=e6ebd56804d0ed1639181c4a36c41c1c`
  );

  data.arrayCity.push(response.data);
  //setData({arrayCity: data.arrayCity, city: response.data});
  setData({...data, city: response.data });
}

function ButtonTest(props) {
  let data = props.data;
  let setData = props.setData;

  return (
    <button
      onClick={() => {
        let city = prompt("Enter city");
        getWeather(city, setData, data);
      }}
    >
      Жми
    </button>
  );
}

function App(props) {
  const [data, setData] = React.useState({
    city: {},
    arrayCity: [],
  });
  const [isLoading, setLoading] = React.useState(false);

  useEffect(() => {
    getWeather("moscow", setData, data);
    setLoading(true);
  }, []);

  if (!isLoading) {
    return <div>Загрузка!</div>;
  } else {
    console.log(data.arrayCity);
    return <ButtonTest data={data} setData={setData} />;
  }
}

export default App;
