import "./App1.css" 
import axios from 'axios'
import { useState } from 'react'



export default function () {
    let [city,setcity]=useState("");
    let [weather,setweather]=useState("")
    let chkweather=()=>{
        axios.get(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a4cac524c79daa46227ab36a52c7a3e5&units=metric`
)

  .then(function (response) {
  
    setweather(response.data.main.temp);
  })
  .catch(function (error) {
    console.log(error);
  })
    }
  return (
    <div className="weather-container">
      <h3>Weather App</h3>
      <input type="text" onChange={(e)=>(setcity(e.target.value)
      )}/>
      <button onClick={chkweather}>check wearther</button>
      <h4> <i>Today current Temprature </i> {city}{weather}°C</h4>
    </div>
  )
}
// first go to npm axios example the go to open weather then go to api in weather app per cuerrnet api
// mai ayi gai per built in web api ko copy kry per per web api ap per ayi waha sai id copy kry gai

// per hum nai use state bna na hai  
