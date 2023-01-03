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
                                <li className='col-sm-7 col-md-4 col-lg-3 col-xl-3 me-4 mb-3' style={{marginLeft:"-3%"}}>< ArticleDay1 hourly={hourly} /></li>
                                <li className='col-sm-7 col-md-4 col-lg-3 col-xl-3  mb-3'>< ArticleDay2 hourly={hourly} /></li>
                                <li className='col-sm-7 col-md-4 col-lg-3 col-xl-3  mb-3'>< ArticleDay3 hourly={hourly} /></li>
                                <li className='col-sm-7 col-md-4 col-lg-3 col-xl-3  mb-3'>< ArticleDay4 hourly={hourly} /></li>
                                <li className='col-sm-7 col-md-4 col-lg-3 col-xl-3  mb-3'>< ArticleDay5 hourly={hourly} /></li>
                            </ul> : <div className='d-flex mb-5'>Loading . . . (DAYS) </div>
                    }

            </div>
        </article>
    );
}

export default ArticleHourly;