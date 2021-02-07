import React, {useEffect} from "react";
import axios from "axios";
import Content from "./Content";
import getWeatherNextDays from "./function/getWeatherNextDays";
import Loader from "./Loader";

async function getWeather(nameCity, setData, data) {
  // const response = await axios.get(
  //   `https://api.openweathermap.org/data/2.5/forecast?q=${nameCity}&lang=ru&units=metric&appid=e6ebd56804d0ed1639181c4a36c41c1c`
  // );

  // let city = {
  //   name: response.data.city.name,
  //   currentDay: {
  //     temp: response.data.list[0].main.temp,
  //     tempMax: response.data.list[0].main.temp_max,
  //     tempMin: response.data.list[0].main.temp_min,
  //     clouds: response.data.list[0].weather[0].description,
  //     wind: response.data.list[0].wind.speed,
  //     humidity: response.data.list[0].main.humidity,
  //   },
  //   nextDays: getWeatherNextDays(response.data.list),
  // };

  setData({...data, newCity: "HI"});
}

function App(props) {
  const [data, setData] = React.useState({
    newCity: {},
    savedCity: [],
  });
  const [isLoading, setLoading] = React.useState(false);

  useEffect(() => {
    getWeather("moscow", setData, data);
    setLoading(true);
  });

  console.log(data.newCity);
  if (!isLoading)
    return <div>Загрузка</div>;
  else
    return <Content isLoading={isLoading} />;
}

export default App;