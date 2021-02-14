import React, {useEffect} from "react";
import getWeather from "./function/getWeather";
import Content from "./Content";

function App(props) {
  const [data, setData] = React.useState({
    newCity: {},
    savedCities: []
  });

  function getStandardCities() {
    const cities = ["Лондон", "Москва", "Пекин", "Вашингтон"];
    console.log(new Date());

    cities.forEach(item => {
      getWeather(item, setData, data, true);
    });
  }

  useEffect(() => {
    getStandardCities();
  }, []);

  return <Content cities={data.savedCities}/>;
}

export default App;
