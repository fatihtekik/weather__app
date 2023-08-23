import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Home.css';
export default function Search(){
    const navigate = useNavigate( )
    const [cityName, setCityName] = useState("");
   
    const [weather, setWeather] = useState({temp: undefined, feels_like: undefined, wind_speed: undefined});
    const [displayedCity, setDisplayedCity] = useState("");

    const url = process.env.REACT_APP_API_URL;
    const apiKey = process.env.REACT_APP_API_KEY;

    const getCoordinates = async (cityName) => {
      const req = await fetch(`${url}/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`);
      const response = await req.json();
      const data = response[0];
      return {
        lat: data?.lat,
        lon: data?.lon
      };
    };
    const onClickNavigate = () =>{
      navigate(`/${cityName}`)
      if(localStorage.getItem('history')){
     const lcItem = localStorage.getItem('history');
    const history = lcItem ? JSON.parse(lcItem) : [];
if (cityName) {
    history.push(cityName);
    const maxHistoryLength = 10;
    if (history.length > maxHistoryLength) {
        history.shift();
    }
    localStorage.setItem('history', JSON.stringify(history));
}
  console.log(history);

      }
      else{
        localStorage.setItem('history',cityName)
      }
      
      
      
      
    }
    const fetchWeather = async (lat, lon) => {
      if (lat !== undefined && lon !== undefined) {
        const req = await fetch(`${url}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        const response = await req.json();
        console.log(response);
        return {
          temp: response.main.temp,
          feels_like: response.main.feels_like,
          wind_speed: response.wind.speed
        };
      }
      return {};
    };

    const getWeather = async () => {
      const coordinates = await getCoordinates(cityName);
      const weatherData = await fetchWeather(coordinates.lat, coordinates.lon);
      setWeather(weatherData);
      setDisplayedCity(cityName);
      console.log(cityName);
    };

    const inputWeather = (event) => {
      setCityName(event.target.value);

    };

  
    return (
        
        <div>
          <input className="inputWeather" type="text" value={cityName} onChange={inputWeather} />
          <button value={cityName} onClick={onClickNavigate}>нажми</button>
          {weather.temp !== undefined && (
            <div>
              <h2>{displayedCity}</h2>
              <p className="dataMap" value={cityName}>Температура: {weather.temp}°C</p>
              <p className="dataMap" value={weather}>Ощущается как: {weather.feels_like}°C</p>
              <p className="dataMap" value={displayedCity}>Скорость ветра: {weather.wind_speed} м/с</p>
            </div>
          )}
        </div>
      ); 
}