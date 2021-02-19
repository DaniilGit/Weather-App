import React from "react";
import "../styles/Search.css"
import Card from "./Card";
import Loader from "./Loader";
import Icon from "@material-ui/core/Icon";
import getWeather from "./function/getWeather";
import Context from "./Context";

function Search(props) {
  let city;
  const {data, setData} = React.useContext(Context);
  const [error, setError] = React.useState(false);

  function isEmpty(obj) {
    for (let key in obj)
      return true;
    return false;
  }

  function getInputValue(e) {
    e.preventDefault();
    city = e.target.value;
  }

  function searchCity(e, city) {
    e.preventDefault();
    getWeather(city, setData, data, false, setError);
    console.log(error.error)
  }
  
  return (
    <div className="container-search">
      <div className="block-search">
        <div className="block-left">
          <div className="block-left__header">Поиск городов</div>
          <form className="form-search">
            <input className="form-search__input" onChange={getInputValue} placeholder="Введите название города..."></input>
            <button className="form-search__button" onClick={(e) => searchCity(e, city)}>
              <Icon className="form-search__icon">search</Icon>
            </button>
          </form>
          <div className="block-left__styles-points">O O O</div>
          <div className="main-content">
            {
              !error
                ? ( 
                  isEmpty(data.newCity)
                    ? <>
                        <Card city={data.newCity} key={data.newCity.name} foundCard={true} nameClass={"card found-card"}/>
                        <button 
                          className="block-left__button-add" 
                          onClick={() => {
                            let buffer = data.savedCities;
                            buffer.push(data.newCity);
                            setData({...data, savedCities: buffer});
                          }}>
                            Добавить город
                          </button>
                      </>
                    : <Loader/>
                )
                : <div className="block-unknown-city">
                    <div className="block-unknown-city__error">Такого города нет</div>
                    <Icon className="block-unknown-city__icon">mood_bad</Icon>
                  </div>
            }
          </div>
        </div>
        <div className="block-right">
          <button onClick={() => {
            props.setSearch(false);
            setData({ ...data, newCity: "" });
          }}>
            Назад
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search;