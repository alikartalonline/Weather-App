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
                {/* <div className='row'> */}

                    {/* {
                        hourly != "" ?
                            <div className=' d-flex row mb-5'>

                                <div className='col-2'>
                                    <ArticleDay1 hourly={hourly} />
                                </div>

                                <div className='col-2'>
                                    <ArticleDay2 hourly={hourly} />
                                </div>

                                <div className='col-2'>
                                    <ArticleDay3 hourly={hourly} />
                                </div>

                                <div className='col-2'>
                                    <ArticleDay4 hourly={hourly} />
                                </div>

                                <div className='col-2'>
                                    <ArticleDay5 hourly={hourly} />
                                </div>


                            </div>
                            : <div className='d-flex col-3 mb-5'>Loading . . . (DAYS) </div>
                    } */}

                    {
                        hourly != "" ?
                            <ul className='row mb-5'>
                                <li className='col  mb-3'>< ArticleDay1 hourly={hourly} /></li>
                                <li className='col  mb-3'>< ArticleDay2 hourly={hourly} /></li>
                                <li className='col  mb-3'>< ArticleDay3 hourly={hourly} /></li>
                                <li className='col  mb-3'>< ArticleDay4 hourly={hourly} /></li>
                                <li className='col  mb-3'>< ArticleDay5 hourly={hourly} /></li>
                            </ul> : <div className='d-flex mb-5'>Loading . . . (DAYS) </div>
                    }

                {/* </div> */}
            </div>
        </article>
    );
}

export default ArticleHourly;