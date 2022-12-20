import React, { useEffect, useState } from 'react'
import axios from 'axios';

// COMPONENTS
import GoogleMapContent from './GoogleMapContent';

// CSS
import '../css/sectionBackgrounds.css'

function Section({ lat, lon, item,setDateTime }) {

    const [current, setCurrent] = useState([])

    // Current weather data
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
            .then(res => {
                setCurrent(res.data)
                setDateTime(res.data.timezone)
            }).catch(err => {
                console.log("error", err);
            })
    }, [item, lat, lon, setDateTime]);


    const dates = new Date()
    const trHour = (dates.getHours('tr-TR', current.timezone)); 
    // console.log("trHour:", trHour); // 22
    // const options = { weekday: 'long' };
    // const dateTime = (dates.toLocaleString(current.timezone, 'tr-TR', { timeZone: 'UTC' })); // 10.12.2022 22:50:15
    // const dateString = (dates.toDateString(current.timezone)); //  Sat Dec 10 2022 
    // const weekDay = (dates.toLocaleDateString('en-EN', options, current.timezone));  // Saturday
    // const Clock = (dates.toLocaleTimeString('tr-TR', current.timezone)); // 22:50:15
 

    return (
        <section>
            <div className='container mt-4'>
                <div className='row'>

                    {
                        current.name !== undefined ?

                            <div className={
                                ((current.weather[0].main === "Clear") && (trHour >= 8 && trHour <= 18)) ? "current-weather clearSky col-8" : 
                                ((current.weather[0].main === "Clear") && (trHour < 8 && trHour > 18)) ? "current-weather nightclearSky col-8" : 
                                ((current.weather[0].main === "Clouds") && (trHour >= 8 && trHour <= 18))  ? "current-weather scatteredClouds col-8" :
                                ((current.weather[0].main === "Clouds") && (trHour < 8 && trHour > 18))  ? "current-weather cloudsnightsky col-8" : 
                                ((current.weather[0].main === "Rain") && (trHour >= 8 && trHour <= 18)) ? "current-weather rain col-8 " :
                                ((current.weather[0].main === "Rain") && (trHour < 8 && trHour > 18)) ? "current-weather nightRain col-8" :
                                current.weather[0].main === "Fog" ? "current-weather mist2 col-8" :
                                current.weather[0].main === "Smoke " ? "current-weather mist2 col-8" :
                                current.weather[0].main === "Haze " ? "current-weather mist2 col-8" :
                                current.weather[0].main === "Mist" ? "current-weather mist col-8" :
                                current.weather[0].main === "Dust" ? "current-weather mist col-8" :
                                current.weather[0].main === "Sand" ? "current-weather mist col-8" :
                                current.weather[0].main === "Ash" ? "current-weather Ash col-8" :
                                current.weather[0].main === "Drizzle " ? "current-weather ShowerRain col-8" :
                                ((current.weather[0].main === "Snow") && (trHour >= 8 && trHour <= 18)) ? "current-weather SNOW col-8" :
                                ((current.weather[0].main === "Snow") && (trHour < 8 && trHour > 18)) ? "current-weather nightSNOW col-8" :
                                current.weather[0].main === "Thunderstorm"  ? "current-weather thunderstorm col-8" : 
                                current.weather[0].main === "Tornado "  ? "current-weather nightThunderstorm col-8" :
                                current.weather[0].main === "Squall"  ? "current-weather thunderstorm2 col-8" : "current-weather rain col-8"
                                }
                                >

                                <div className="d-flex">
                                   <h4 className='col-8 CWD'>CURRENT WEATHER DATA</h4>

                                    <ul className='col-4'>
                                        <li className='country-li fs-2'>
                                            {
                                                current.name === "Karaköy" ? <>Istanbul</>
                                                    : <>{current.name}</>
                                            }
                                        </li>
                                        <li className="fs-5 h3 border-top country-li">
                                            {current.sys.country}
                                        </li>
                                    </ul>  
                                </div>


                                <div className="d-flex mt-2"  >

                                        {
                                            current.weather[0].description === "clear sky" ?
                                            <img
                                            src="/gif/clearskyicon.gif"
                                            alt="icon" width={100} height={100} /> : 
                                            current.weather[0].description === "few clouds" ?
                                            <img
                                            src="/gif/fewcloudsicon.gif"
                                            alt="icon" width={100} height={100} /> :
                                            current.weather[0].description === "scattered clouds" ?
                                            <img
                                            src="/gif/scatteredcloudsicon.gif"
                                            alt="icon" width={150} height={130} /> : 
                                            current.weather[0].description === "broken clouds" ?
                                            <img
                                            src="/gif/brokencloudsicon.gif"
                                            alt="icon" width={150} height={130} /> :
                                            current.weather[0].description === "rain" ?
                                            <img
                                            src="/gif/rainicon.gif"
                                            alt="icon" width={150} height={130} /> : 
                                            current.weather[0].description === "shower rain" ?
                                            <img
                                            src="/gif/showerrainicon.gif"
                                            alt="icon" width={150} height={130} /> :
                                            current.weather[0].description === "thunderstorm" ?
                                            <img
                                            src="/gif/thunderstormicon.gif"
                                            alt="icon" width={150} height={130} /> :
                                            current.weather[0].description === "snow" ?
                                            <img
                                            src="/gif/snowicon.gif"
                                            alt="icon" width={150} height={130} /> :
                                            current.weather[0].description === "mist" ?
                                            <img
                                            src="/gif/misticon.gif"
                                            alt="icon" width={100} height={100} /> : 
                                            <img
                                            src={`http://openweathermap.org/img/wn/${current.weather[0].icon}.png`}
                                            alt="icon" width={100} height={100} className="ms-3" />
                                        }


                                    <div className='d-flex'>
                                        <h1 className='ms-3 main-temp'>{current.main.temp.toFixed()}</h1>
                                        <span className='main-temp-c'>°C</span>
                                    </div>

                                    <div>
                                        <h4 className='ms-5'>
                                            {current.weather[0].description.toUpperCase().slice(0, 1) + current.weather[0].description.toLowerCase().slice(1)}</h4>
                                        <h5 className='ms-5 feel'>Feel Like {current.main.feels_like.toFixed()}°</h5>
                                    </div>

                                </div>

                                <ul className='d-flex'>

                                    <li style={{ marginLeft: "-5%" }}>WIND <span className='footer-words'>
                                        {current.wind.speed.toFixed()} km/s
                                    </span>
                                    </li>
                                    <li>HUMIDITY <span>{current.main.humidity}%</span></li>
                                    <li>PRESSURE <span className='footer-words'>{current.main.pressure} mb</span></li>
                                    <li>MAIN <span>{current.weather[0].main}</span></li>
                                    <li>VISIBILITY <span>{current.visibility / 1000} km</span></li>
                                </ul>
                            </div>
                            : null
                    }

                    <div className='col-4'>
                        <GoogleMapContent lat={lat} lon={lon} />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Section;