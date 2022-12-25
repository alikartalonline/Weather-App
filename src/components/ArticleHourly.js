import React, { useEffect, useState } from 'react'
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

    const [hourly, setHourly] = useState([])


    // Hourly Weather Data (Call 5 day / 3 hour forecast data)
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
            .then(res => {
                setHourly(res.data)
            }).catch(err => {
                console.log("hourly error", err);
            })

    }, [lat, lon, item]);

    // console.log("hourly:",hourly.city.name)
    // console.log("hourly item:", item)

    return (
        <article>
            <div className='container mt-4 text-white'>
                <div className='row'>
                    {
                        hourly != "" ?
                            <div className='d-flex col-3'>
                                <ArticleDay1 hourly={hourly} />
                                <ArticleDay2 hourly={hourly} />
                                <ArticleDay3 hourly={hourly} />
                                <ArticleDay4 hourly={hourly} />
                                <ArticleDay5 hourly={hourly} />
                            </div>
                            : null
                    }
                </div>
            </div>
        </article>
    );
}

export default ArticleHourly;