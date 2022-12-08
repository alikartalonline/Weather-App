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
                                <h4 className=''>Current Weather Data</h4>
                                {/* <h1 style={{float:"right"}}>{current.name}</h1> */}
                                <h1 >{current.name}</h1>


                                <div className="d-flex mt-3"  >
                                    <img 
                                    src={`http://openweathermap.org/img/wn/${current.weather[0].icon}.png`} 
                                    alt="icon" width={60} height={60} />
                                    <h1 className='ms-3'>{current.main.temp.toFixed()} °C </h1>

                                    <div>
                                        <h4 className='ms-5'>{current.weather[0].description}</h4>
                                        <h4 className='ms-5'>Feel Like: {current.main.feels_like.toFixed()}</h4>
                                    </div>

                                </div>

                                {/* <h1>{Math.floor(current.main.temp)} °C </h1> */}
                            </div>
                            : null
                    }


                </div>
            </div>
        </section>
    )
}

export default Section;