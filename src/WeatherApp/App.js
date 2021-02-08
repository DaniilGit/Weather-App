import React, {useEffect} from "react";
import getWeather from "./function/getWeather";
import Content from "./Content";

function App(props) {
  const [data, setData] = React.useState({
    newCity: {},
    savedCities: []
  });
  const [isLoading, setLoading] = React.useState(false);

  function getStandardCities() {
    const cities = ["Лондон", "Москва", "Пекин", "Вашингтон"];

    cities.forEach(item => {
      getWeather(item, setData, data, true);
    });
  }

  useEffect(() => {
    getStandardCities();
    setLoading(true);
  }, []);

  return <Content cities={data.savedCities} />;
}

export default App;
