import React from 'react'

function ArticleDay1({ hourly }) {

    const options = { weekday: 'long' };
    const options2 = { year: 'numeric', month: 'numeric', day: 'numeric' };

    return (
        <div className='day1 col-2'>

            <div className='article-titles'>
                <h1>
                    {
                        new Date(hourly.list[0].dt_txt).toLocaleDateString('en-EN', options)
                    }
                </h1>

                <span className='fs-6'>
                    {
                        new Date(hourly.list[0].dt_txt).toLocaleDateString('en-EN', options2)
                    }
                </span>
            </div>

            <ul className='mt-2'>

                <li>
                    {
                        new Date(hourly.list[0].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[0].dt_txt).getUTCHours() : "0" + new Date(hourly.list[0].dt_txt).getUTCHours()
                    } : 00 <span><img src={`http://openweathermap.org/img/wn/${hourly.list[0].weather[0].icon}.png`} alt="" /></span><span>{hourly.list[0].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[1].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[1].dt_txt).getUTCHours() : "0" + new Date(hourly.list[1].dt_txt).getUTCHours()
                    } : 00 <span><img src={`http://openweathermap.org/img/wn/${hourly.list[1].weather[0].icon}.png`} alt="" /></span><span>{hourly.list[1].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[2].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[2].dt_txt).getUTCHours() : "0" + new Date(hourly.list[2].dt_txt).getUTCHours()
                    } : 00 <span><img src={`http://openweathermap.org/img/wn/${hourly.list[2].weather[0].icon}.png`} alt="" /></span><span>{hourly.list[2].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[3].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[3].dt_txt).getUTCHours() : "0" + new Date(hourly.list[3].dt_txt).getUTCHours()
                    } : 00 <span><img src={`http://openweathermap.org/img/wn/${hourly.list[3].weather[0].icon}.png`} alt="" /></span><span>{hourly.list[3].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[4].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[4].dt_txt).getUTCHours() : "0" + new Date(hourly.list[4].dt_txt).getUTCHours()
                    } : 00 <span><img src={`http://openweathermap.org/img/wn/${hourly.list[4].weather[0].icon}.png`} alt="" /></span><span>{hourly.list[4].main.temp}°C</span>
                </li>


                <li>
                    {
                        new Date(hourly.list[5].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[5].dt_txt).getUTCHours() : "0" + new Date(hourly.list[5].dt_txt).getUTCHours()
                    } : 00 <span><img src={`http://openweathermap.org/img/wn/${hourly.list[5].weather[0].icon}.png`} alt="" /></span><span>{hourly.list[5].main.temp}°C</span>
                </li>


                <li>
                    {
                        new Date(hourly.list[6].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[6].dt_txt).getUTCHours() : "0" + new Date(hourly.list[6].dt_txt).getUTCHours()
                    } : 00 <span><img src={`http://openweathermap.org/img/wn/${hourly.list[6].weather[0].icon}.png`} alt="" /></span><span>{hourly.list[6].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[7].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[7].dt_txt).getUTCHours() : "0" + new Date(hourly.list[7].dt_txt).getUTCHours()
                    } : 00 <span><img src={`http://openweathermap.org/img/wn/${hourly.list[7].weather[0].icon}.png`} alt="" /></span><span>{hourly.list[7].main.temp}°C</span>
                </li>
            </ul>
        </div>
    )
}

export default ArticleDay1;