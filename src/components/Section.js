import React, { useEffect, useState } from 'react';
import axios from 'axios';

// COMPONENTS
import GoogleMapContent from './GoogleMapContent';

// CSS
import '../css/sectionBackgrounds.css';

function Section({ lat, lon, item,setDateTime }) {

    const [current, setCurrent] = useState([]);
    const [dayNightState, setDayNightState] = useState(null);

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


    const dates = new Date();
    const trHour = (dates.getHours('tr-TR', current.timezone)); 

    // DAY - NIGHT STATE
        useEffect(() => {
        if(trHour >= 8 && trHour <= 18){
            setDayNightState(true)
        } else {
            setDayNightState(false)
        }
    }, [setDayNightState, trHour]);


    return (
        <section>
            <div className='container mt-4'>
                <div className='row'>

                <div className='col-sm-9 col-md-8 col-lg-8 col-xl-7 col-xxl-6 '>
                    {
                        current.name !== undefined ?
                        
                        <div className={
                            ((current.weather[0].main === "Clear") && (dayNightState === true)) ? "current-weather clearSky col-8" || "current-weather nightclearSky col-8":  
                            ((current.weather[0].main === "Clear") && (dayNightState === false)) ? "current-weather nightclearSky2 col-8" : 
                            ((current.weather[0].main === "Clouds") && (dayNightState === true))  ? "current-weather scatteredClouds col-8" :
                            ((current.weather[0].main === "Clouds") && (dayNightState === false))  ? "current-weather cloudsnightsky col-8" :  
                                ((current.weather[0].main === "Rain") && (dayNightState === true)) ? "current-weather rain col-8 " :
                                ((current.weather[0].main === "Rain") && (dayNightState === false)) ? "current-weather nightRain col-8" :
                                current.weather[0].main === "Fog" ? "current-weather mist2 col-8" :
                                current.weather[0].main === "Smoke " ? "current-weather mist2 col-8" :
                                current.weather[0].main === "Mist" ? "current-weather mist col-8" :
                                current.weather[0].main === "Haze" ? "current-weather mist col-8" :
                                current.weather[0].main === "Dust" ? "current-weather mist col-8" :
                                current.weather[0].main === "Sand" ? "current-weather mist col-8" :
                                current.weather[0].main === "Ash" ? "current-weather Ash col-8" :
                                current.weather[0].main === "Drizzle " ? "current-weather ShowerRain col-8" :
                                ((current.weather[0].main === "Snow") && (dayNightState === true)) ? "current-weather SNOW col-8" :
                                ((current.weather[0].main === "Snow") && (dayNightState === false)) ? "current-weather nightSNOW col-8" :
                                current.weather[0].main === "Thunderstorm"  ? "current-weather thunderstorm col-8" : 
                                current.weather[0].main === "Tornado "  ? "current-weather nightThunderstorm col-8" :
                                current.weather[0].main === "Squall"  ? "current-weather thunderstorm2 col-8" : "current-weather random col-8"
                                }
                                >

                                <div className="d-flex">
                                   <h4 className='col-8 CWD'>CURRENT WEATHER DATA</h4>

                                    <ul className='col-4 country-city-max'>
                                        <li className='fs-4 '>
                                                {
                                                    current.name === "Karaköy" ? "Istanbul"
                                                    : current.name
                                                }
                                        </li>
                                        <li className="fs-5 h3 border-top">
                                            {current.sys.country}
                                        </li>
                                    </ul>  
                                </div>


                                <div className="d-flex mt-2"  >

                                        {
                                            ((current.weather[0].main === "Clear") && (trHour >= 8 && trHour <= 18)) ?
                                            <img
                                            src="/gif/clearskyicon.gif"
                                            alt="clearskyicon" width={100} height={100} /> :
                                            ((current.weather[0].main === "Clear") ^ (trHour < 8 && trHour > 18)) ?
                                            <img
                                            src="/gif/moon7.gif" className='mt-2'
                                            alt="moonicon" width={55} height={55} /> :
                                            ((current.weather[0].main === "Clouds") && (trHour >= 8 && trHour <= 18)) ?
                                            <img
                                            src="/gif/fewcloudsicon.gif"
                                            alt="fewcloudsicon" width={100} height={100} /> :
                                            ((current.weather[0].main === "Clouds") ^ (trHour < 8 && trHour > 18)) ?
                                            <img
                                            src="/gif/brokencloudsicon.gif"
                                            alt="brokencloudsicon" width={135} height={100} /> :
                                            ((current.weather[0].main === "Rain") && (trHour >= 8 && trHour <= 18)) ?
                                            <img
                                            src="/gif/rainicon.gif"
                                            alt="rainicon" width={150} height={120} /> : 
                                            ((current.weather[0].main === "Rain") ^ (trHour < 8 && trHour > 18)) ?
                                            <img
                                            src="/gif/showerrainicon.gif"
                                            alt="showerrainicon" width={150} height={100} /> :
                                            current.weather[0].main === "Snow" ?
                                            <img
                                            src="/gif/snowicon.gif"
                                            alt="snowicon" width={150} height={100} /> : 
                                            current.weather[0].main === "Mist" ?
                                            <img
                                            src="/gif/misticon.gif"
                                            alt="misticon" width={100} height={100} /> :
                                            current.weather[0].main === "Thunderstorm" ?
                                            <img
                                            src="/gif/thunderstormicon.gif"
                                            alt="thunderstormicon" width={150} height={100} /> :
                                            current.weather[0].main === "Tornado" ?
                                            <img
                                            src="/gif/thunderstormicon.gif"
                                            alt="thunderstormicon" width={150} height={100} /> :
                                            current.weather[0].main === "Squall" ?
                                            <img
                                            src="/gif/Squallicon.gif"
                                            alt="Squallicon" width={150} height={100} /> :
                                            current.weather[0].main === "Dust" ?
                                            <img
                                            src="/gif/thunderstormicon2.gif"
                                            alt="thunderstormicon2" width={150} height={100} /> :
                                            current.weather[0].main === "Drizzle" ?
                                            <img
                                            src="/gif/drizzleicon.gif"
                                            alt="drizzleicon" width={150} height={100} /> :
                                            current.weather[0].main === "Ash" ?
                                            <img
                                            src="/gif/ashicon.gif"
                                            alt="ashicon" width={150} height={100} /> :
                                            current.weather[0].main === "Smoke" ?
                                            <img
                                            src="/gif/scatteredcloudsicon.gif"
                                            alt="scatteredcloudsicon" width={150} height={100} /> :
                                            current.weather[0].main === "Haze" ?
                                            <img
                                            src="/gif/scatteredcloudsicon.gif"
                                            alt="scatteredcloudsicon" width={150} height={100} /> :
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

                                {/* <ul className='d-flex'> */}
                                <ul className='current-weather-footer-list'>

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
                </div>

                    <div className='col-sm-2 col-md-3 col-lg-3 col-xl-4 col-xxl-4 ms-4'>
                        <GoogleMapContent lat={lat} lon={lon} />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Section;