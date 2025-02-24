import {useState} from 'react'
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp(){

    let [ weatherInfo , setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.02,
        temperature: 25,
        temp_max: 28,
        temp_min: 20,
        humidity: 10,
        weather: "Good",
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }
    return (
        <>
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Ojasvi</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
        </>
    )
}