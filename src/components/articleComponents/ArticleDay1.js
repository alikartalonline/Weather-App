import React from 'react';

function ArticleDay1({ hourly }) {

    const options = { weekday: 'long' };
    const options2 = { year: 'numeric', month: 'numeric', day: 'numeric' };

    const dayIcon = (x) => {
        return `${
            hourly.list[x].weather[0].icon === "01d" ? "/gif/clearskyicon.gif" :
            hourly.list[x].weather[0].icon === "01n" ? "/gif/clearskyicon.gif" : 
            hourly.list[x].weather[0].icon === "02d" ? "/gif/fewcloudsicon.gif" :
            hourly.list[x].weather[0].icon === "02n" ? "/gif/brokencloudsicon.gif" :
            hourly.list[x].weather[0].icon === "03d" ? "/gif/brokencloudsicon.gif" :
            hourly.list[x].weather[0].icon === "03n" ? "/gif/scatteredcloudsicon.gif" :
            hourly.list[x].weather[0].icon === "04n" ? "/gif/brokencloudsicon.gif" :
            hourly.list[x].weather[0].icon === "04n" ? "/gif/scatteredcloudsicon.gif" :
            hourly.list[x].weather[0].icon === "09d" ? "/gif/rainicon.gif" :
            hourly.list[x].weather[0].icon === "09n" ? "/gif/showerrainicon.gif" :
            hourly.list[x].weather[0].icon === "10d" ? "/gif/rainicon.gif" :
            hourly.list[x].weather[0].icon === "10n" ? "/gif/showerrainicon.gif" :
            hourly.list[x].weather[0].icon === "11d" ? "/gif/drizzleicon.gif" :
            hourly.list[x].weather[0].icon === "11n" ? "/gif/drizzleicon.gif" :
            hourly.list[x].weather[0].icon === "13d" ? "/gif/snowicon.gif" :
            hourly.list[x].weather[0].icon === "13n" ? "/gif/snowicon.gif" :
            hourly.list[x].weather[0].icon === "50d" ? "/gif/misticon.gif" :
            hourly.list[x].weather[0].icon === "50n" ? "/gif/misticon.gif" :
            "/gif/clearskyicon.gif"
        }`
    };

    return (
        <div className={
            ((new Date(hourly.list[2].dt_txt).getUTCHours() >= 8 && new Date(hourly.list[2].dt_txt).getUTCHours() <= 18)) ? 
            "day1 daysLight0" : 'day1 daysNight0'
        }>

            <div className='article-titles'>
                <h1>
                    { hourly.city.country === "TR" ? 
                    new Date(hourly.list[0].dt_txt).toLocaleDateString('tr-TR', options) : 
                    new Date(hourly.list[0].dt_txt).toLocaleDateString('en-EN', options)
                    }
                </h1>

                <span className='fs-6'>
                    { hourly.city.country === "TR" ? 
                        new Date(hourly.list[0].dt_txt).toLocaleDateString('tr-TR', options2) :
                        new Date(hourly.list[0].dt_txt).toLocaleDateString('en-EN', options2)
                    }
                </span>
            </div>
            
            <ul className='mt-2' style={{whiteSpace:"nowrap"}}>

                <li>
                    {
                        new Date(hourly.list[0].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[0].dt_txt).getUTCHours() : "0" + new Date(hourly.list[0].dt_txt).getUTCHours()
                    } : 00 <span><img src={dayIcon(0)} alt="WAppIcon" height={40}/></span>
                    <span className='days-temp'>{hourly.list[0].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[1].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[1].dt_txt).getUTCHours() : "0" + new Date(hourly.list[1].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(1)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[1].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[2].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[2].dt_txt).getUTCHours() : "0" + new Date(hourly.list[2].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(2)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[2].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[3].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[3].dt_txt).getUTCHours() : "0" + new Date(hourly.list[3].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(3)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[3].main.temp}°C</span>
                </li>


                <li>
                    {
                        new Date(hourly.list[4].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[4].dt_txt).getUTCHours() : "0" + new Date(hourly.list[4].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(4)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[4].main.temp}°C</span>
                </li>


                <li>
                    {
                        new Date(hourly.list[5].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[5].dt_txt).getUTCHours() : "0" + new Date(hourly.list[5].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(5)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[5].main.temp}°C</span>
                </li>


                <li>
                    {
                        new Date(hourly.list[6].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[6].dt_txt).getUTCHours() : "0" + new Date(hourly.list[6].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(6)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[6].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[7].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[7].dt_txt).getUTCHours() : "0" + new Date(hourly.list[7].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(7)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[7].main.temp}°C</span>
                </li>
            </ul>
        </div>
    );
}

export default ArticleDay1;