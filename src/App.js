
import axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import Weathershow from './Weathershow';




function App() {

  const [inpval, setinpval] = useState("");
  const [info, setinfo] = useState([]);


  const Api_key = '5db6c0b641be547e10fc5f2982c90dd0';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inpval}&appid=${Api_key}`

  const getdata = async () => {
    try {
      const response = await axios.get(url);
      setinfo([response.data])
    }
    catch (error) {
      alert(" OOOPS !!! CITY NOT FOUND")
    }
  }
  const submitform = (e) => {

    getdata()
    e.preventDefault();
  }


  const displaydata = info.map((curr,i) => {
    const { name } = curr;
    const { temp } = curr.main;
    const { icon, main } = curr.weather[0];



    return (

      <Weathershow key={i} name={name} temp={(Math.round(temp-273.15))} icon={icon} climate={main} />

    )

  })

  return (

    <React.Fragment>

      <div className="heading">
        Check Your City Weather !!
      </div>

      <div className="App">

        <form onSubmit={submitform}>
          <input type="text" value={inpval}
            placeholder="Enter city name"
            onChange={(e) => setinpval(e.target.value)} className="userinput" />

          <input type="submit" value="Search" className="searchinput" />

        </form>

      </div>

      <div>

        {displaydata}

      </div>


    </React.Fragment>


  );
}

export default App;
