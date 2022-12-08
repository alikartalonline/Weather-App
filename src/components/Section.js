import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Section({ lat, lon, item }) {

    const [current, setCurrent] = useState([])

    // Current weather data
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
            .then(res => {
                // console.log("günlük :", res.data.name)
                // console.log("günlük :", res.data.weather[0].description)
                setCurrent(res.data)
            }).catch(err => {
                console.log("error", err);
            })
    }, [item, lat, lon]);

    return (
        <section>
            <div className='container mt-5'>
                <div className='row'>

                    {
                        current.name != undefined ?
                            <div className='current-weather'>
                                <h4 className='text-white'>Current Weather Data</h4>
                                <img src={current.weather[0].icon} alt="s" />
                                <h1>{current.name}</h1>
                                <h1>{current.main.temp} °C </h1>
                            </div>
                            : null
                    }


                </div>
            </div>
        </section>
    )
}

export default Section;