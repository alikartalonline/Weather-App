import React, { useEffect, useState } from 'react'
import axios from 'axios';

// CSS
import '../css/article.css';

function ArticleHourly({ lat, lon, item }) {

    const [hourly, setHourly] = useState([])

    // Hourly Weather Data (Call 5 day / 3 hour forecast data)
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
            .then(res => {
                setHourly(res.data)
            }).catch(err => {
                console.log("hourly error", err);
            })
    }, [item, lat, lon]);

    // console.log("saatlik:", hourly.list[0].weather[0].main)

    const options = { weekday: 'long' };

    // DAY 1: HOURS
    const day1hour1 = new Date(hourly.list[0].dt_txt);
    // const day1hour2 = new Date(hourly.list[1].dt_txt);
    // const day1hour3 = new Date(hourly.list[2].dt_txt);
    // const day1hour4 = new Date(hourly.list[3].dt_txt);
    // const day1hour5 = new Date(hourly.list[4].dt_txt);
    // const day1hour6 = new Date(hourly.list[5].dt_txt);
    // const day1hour7 = new Date(hourly.list[6].dt_txt);
    // const day1hour8 = new Date(hourly.list[7].dt_txt);

    // DAYS
    const day1weekDay = (day1hour1.toLocaleDateString('en-EN', options));
    // const day2weekDay = (day2.toLocaleDateString('en-EN', options));
    // const day3weekDay = (day3.toLocaleDateString('en-EN', options));
    // const day4weekDay = (day4.toLocaleDateString('en-EN', options));
    // const day5weekDay = (day5.toLocaleDateString('en-EN', options));



    // const day2 = new Date(hourly.list[8].dt_txt);
    // const day3 = new Date(hourly.list[16].dt_txt);
    // const day4 = new Date(hourly.list[24].dt_txt);
    // const day5 = new Date(hourly.list[32].dt_txt);


    // console.log("saat :",day1hour1.getUTCHours());
    // console.log("saat :",day1hour2.getUTCHours());
    // console.log("saat :",day1hour3.getUTCHours());
    // console.log("HAFTANIN GÜNÜ:",day2weekDay)
    // console.log("günlük saat:",day2weekDay)
    // console.log("günlük saat:",day1.toLocaleTimeString('en-US'));


    return (
        <article>
            <div className='container mt-4 text-white'>
                <div className='row'>


                    {
                        item !== "" ?

                            <div className='day1 col-2'>
                                <h1>{day1weekDay}</h1>
                                <span className='fs-6'>{hourly.list[1].dt_txt} </span>
                                <ul>
                                    <li>
                                        {day1hour1.getUTCHours()} : 00 <span><img src={`http://openweathermap.org/img/wn/${hourly.list[0].weather[0].icon}.png`} alt="" /></span><span>{hourly.list[1].main.temp}°C</span>
                                    </li>
                                    <li>
                                        {/* {hourly.list[1].dt_txt}  */}
                                    </li>
                                    <li>
                                        {/* {hourly.list[5].dt_txt}  */}
                                    </li>
                                </ul>
                            </div>



                            : null
                    }


                </div>
            </div>
        </article>
    )
}

export default ArticleHourly;