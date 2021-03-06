import React, {useEffect} from "react";
import getWeather from "./function/getWeather";
import Content from "./Content";
import Context from "./Context";

function App(props) {
  const [data, setData] = React.useState({
    newCity: {},
    savedCities: []
  });

  function getStandardCities() {
    const cities = ["Лондон", "Москва", "Пекин", "Вашингтон"];

    cities.forEach(item => {
      getWeather(item, setData, data, true);
    });
  }

  useEffect(() => {
    console.log(JSON.parse (localStorage.getItem ("data")))
    if (JSON.parse (localStorage.getItem ("data")))
      setData(JSON.parse(localStorage.getItem ("data")));
    else
      getStandardCities();
  }, []);

  return (
    <Context.Provider value={{data, setData}}>
        <Content cities={data.savedCities}/>
    </Context.Provider>
  );
}

export default App;
