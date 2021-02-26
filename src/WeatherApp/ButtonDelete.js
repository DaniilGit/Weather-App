import React from "react";
import "../styles/Cards.css";
import Icon from "@material-ui/core/Icon";
import Context from "./Context";

function deleteCity(city, data, setData, setDeleteCheck) {
  data.savedCities.forEach((item, index, array) => {
    if (item === city) {
      console.log(item);
      array.splice(index, 1);
    }
  })
  console.log(data);
  setDeleteCheck(true);
  setData(data);
}

function ButtonDelete(props) {
  const {data, setData} = React.useContext(Context);
  
  return (
    <button className="button-delete" onClick={() => deleteCity(props.city, data, setData, props.setDeleteCheck)}>
      <Icon>close</Icon>
    </button>
  )
}

export default ButtonDelete;