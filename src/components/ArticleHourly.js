import React, { useEffect, useState } from 'react';
import axios from 'axios';

// CSS
import '../css/article.css';

// COMPONENTS
import ArticleDay1 from './articleComponents/ArticleDay1';
import ArticleDay2 from './articleComponents/ArticleDay2';
import ArticleDay3 from './articleComponents/ArticleDay3';
import ArticleDay4 from './articleComponents/ArticleDay4';
import ArticleDay5 from './articleComponents/ArticleDay5';

function ArticleHourly({ lat, lon, item }) {

    const [hourly, setHourly] = useState([]);


    // Hourly Weather Data (Call 5 day / 3 hour forecast data)
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
            .then(res => {
                setHourly(res.data)
            }).catch(err => {
                console.log("hourly error", err);
            })

    }, [lat, lon, item]);


    return (
        <article>
            <div className='container mt-4 text-white'>

                {
                    hourly != "" ?
                        <ul className='row mb-5 article-list'>

                            <li
                                className='col-5 me-auto col-sm-5  col-md-3 col-lg-2  col-xl-2 col-xxl-1 me-xxl-auto  me-4 mb-3'
                                style={{ marginLeft: "-5%" }}
                            >< ArticleDay1 hourly={hourly} /></li>

                            <li
                                className='col-5 ms-auto me-auto col-sm-6 ms-sm-auto me-sm-auto  col-md-3 col-lg-2 ms-lg-auto col-xl-2 ms-xl-auto  col-xxl-1  mb-3'>< ArticleDay2 hourly={hourly} /></li>

                            <li
                                className='col-5 me-auto col-sm-6  ms-md-auto col-md-4 col-lg-2 ms-lg-auto col-xl-2 ms-xl-auto col-xxl-1 me-xxl-auto mb-3'>< ArticleDay3 hourly={hourly} /></li>

                            <li
                                className='col-5 me-auto ms-auto  col-sm-6 ms-sm-auto me-sm-auto col-md-5 me-md-auto ms-md-auto  col-lg-2 ms-lg-auto col-xl-2  ms-xl-auto col-xxl-1 mb-3'>< ArticleDay4 hourly={hourly} /></li>

                            <li
                                className=' col-sm-4 col-md-6 me-md-auto  col-lg-2 ms-lg-auto col-xl-2 ms-xl-auto col-xxl-3 mb-3'>< ArticleDay5 hourly={hourly} /></li>

                        </ul>
                        : <div className='d-flex mb-5'>Loading . . . (DAYS) </div>
                }

            </div>
        </article>
    );
}

export default ArticleHourly;