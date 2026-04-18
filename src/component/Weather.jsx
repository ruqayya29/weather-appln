import './Weather.css'
import search_icon from "../assets/searchs.png"
import del from "../assets/del.png"
import clear_icon from "../assets/sun.png"
import cloud_icon from "../assets/cloud.png"
import drizzle_icon from "../assets/drizzle.png"
import humidity_icon from "../assets/humidity.png"
import rain_icon from "../assets/rain.png"
import snow_icon from "../assets/snow.png"
import wind_icon from "../assets/wind.png"
import { useState, useRef } from 'react'
import axios from "axios";
function Weather() {

  const [city, setcity] = useState("")
  const [icon, seticon] = useState("")
  const [weather, setweather] = useState("")
  const [temp, settemp] = useState("")
  const [desc, setdesc] = useState("")
  const [hum, sethum] = useState("")
  const [wind, setwind] = useState("")
  const [sunrise, setSunrise] = useState("")
  const [sunset, setSunset] = useState("")
  const inputRef = useRef(null)
  const [weatherData, setweatherData] = useState(null)

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  }



  function handleCity(evt) {
    setcity(evt.target.value)
  }

  function handleKeyDown(evt) {
    if (evt.key === "Enter") {
      getWeather();
    }
  }

  function delWeather() {
    setweatherData(null)
    setcity("")
    inputRef.current.value = ""
  }

  const toTime = (unix) => {
    const date = new Date(unix * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function getWeather() {
    if (!city) {
      alert("Enter City Name")
      return;
    }
    var request = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a40979f8f762ce664d1b2b57e88d9dcd&units=metric`)
    request.then(function (success) {


      console.log(success.data)
      setweatherData(success.data)
      setcity(success.data.name)
      setweather(success.data.weather[0].main)
      setdesc(success.data.weather[0].description)
      settemp(Math.floor(success.data.main.temp))
      seticon(allIcons[success.data.weather[0].icon] || clear_icon);
      sethum(success.data.main.humidity)
      setwind(success.data.wind.speed)
      setSunrise(toTime(success.data.sys.sunrise))
      setSunset(toTime(success.data.sys.sunset))

    })

      .catch(function (error) {
        alert("City Not Found")
        setweatherData(null)
      })

  }
  return (
    <>
      <div className='title'>
        <h1>Weather App</h1>
      </div>
      <div className='card'>
        <h2>Welcome</h2>
        <p className='desc-text'>Search any city to get the current temperature, humidity, wind speed, and weather conditions instantly.</p>
      </div>
      <div className='weather'>

        <div className="search-bar">
          <input ref={inputRef} onChange={handleCity} onKeyDown={handleKeyDown} type="text" placeholder='Enter the City' />
          <img src={search_icon} alt="" onClick={getWeather} />
          <img src={del} alt="" onClick={delWeather} />
        </div>
        {weatherData ? <><img className='weather_icon' src={icon} alt="" />
          <p className='temperature'>{temp}°C</p>
          <p className='location'>{city}</p>

          <div className="weather_data">
            <div className="desc">
              <p>Description</p>
              <span>{desc}</span>
            </div>
            <div className="main">
              <p>Weather</p>
              <span>{weather}</span>
            </div>
            <div className="humidity">
              <p>Humidity</p>
              <span>{hum}%</span>
            </div>
            <div className="wind">
              <p>Wind</p>
              <span>{wind} m/s</span>
            </div>
            <div className="sunrise">
              <p>Sunrise</p>
              <span>{sunrise}</span>
            </div>
            <div className="sunset">
              <p>Sunset</p>
              <span>{sunset}</span>
            </div>
          </div>
        </> : <></>}


      </div>
    </>
  )

}

export default Weather