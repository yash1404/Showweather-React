import React from "react"
import "./Weathershow.css"
const Weathershow = ({ name, temp, icon, climate }) => {


  return (

    <div className="frame">
  

      <h1 >{name}</h1>
      <h3 >{temp} ° C</h3>
      <img className="dynamicimg"src={`http://openweathermap.org/img/w/${icon}.png`} alt="dynamicalyy img"/>
      <h5 >{climate}</h5>

    </div>

  )
}
export default Weathershow;

