import React, { useEffect, useState } from 'react'
import axios from 'axios';
import GoogleMapContent from './GoogleMapContent';

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
    }, [item, lat, lon]);


    const dates = new Date()
    const options = { weekday: 'long' };
    const trHour = (dates.getHours('tr-TR', current.timezone)); 
    const dateTime = (dates.toLocaleString(current.timezone, 'tr-TR', { timeZone: 'UTC' }));
    const dateString = (dates.toDateString(current.timezone));
    const weekDay = (dates.toLocaleDateString('en-EN', options, current.timezone));
    const Clock = (dates.toLocaleTimeString('tr-TR', current.timezone));

    // console.log("tr date:", trHour); // 22
    // console.log("Date and Time:",dateTime); // 10.12.2022 22:50:15
    // console.log("Date String :",dateString); //  Sat Dec 10 2022
    // console.log("Week Day :",weekDay); // Saturday
    // console.log("Clock:",Clock); // 22:50:15

    return (
        <section>
            <div className='container mt-4'>
                <div className='row'>

                    {
                        current.name !== undefined ?
                            <div className='current-weather col-8'>

                                <div className="d-flex">
                                    <h4 className='col-9 CWD'>CURRENT WEATHER DATA</h4>
                                    {
                                        current.name === "Karaköy" ? <h1 className=' col-3'>Istanbul</h1>
                                            : <h1>{current.name}</h1>
                                    }
                                </div>


                                <div className="d-flex mt-3"  >
                                    <img
                                        src={`http://openweathermap.org/img/wn/${current.weather[0].icon}.png`}
                                        alt="icon" width={100} height={100} />

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