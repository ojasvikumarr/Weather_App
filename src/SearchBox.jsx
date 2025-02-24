import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import "./SearchBox.css"
// eslint-disable-next-line react/prop-types
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error , setError] = useState(false);
  
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "04756827757faafed141b330a3db21c1";
  //this response gets added to the api url and then the api gives use the required information
  //the info is converted into json formate and the passed to console.log
  let getWeatherInfo = async () => {
    try{
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    let result = {
      city: city,
      feelslike: jsonResponse.main.feels_like,
      temperature: jsonResponse.main.temp,
      temp_max: jsonResponse.main.temp_max,
      temp_min: jsonResponse.main.temp_min,
      humidity: jsonResponse.main.humidity,
      weather: jsonResponse.weather[0].description,
    };
    console.log(jsonResponse);
    console.log(result);
    return result;
  } catch(err){
    setError(true);
  }
  };
  let handleChange = (event) => {
    setCity(event.target.value)
  };
  let handleSubmit = async (event) => {
    try{
      event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
  }catch (err) {
    setError(true);
  }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Search for weather</h3>
        <TextField
          id="city"
          label="City name"
          variant="outlined"
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="outlined" type="submit">
          Search
        </Button>
        {error && <Alert severity="error">Your place doesn't exists in our API</Alert>}
      </form>

    </>
  );
}
