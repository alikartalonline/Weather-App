import React from 'react';

function ArticleDay4({ hourly }) {
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
            ((new Date(hourly.list[26].dt_txt).getUTCHours() >= 8 && new Date(hourly.list[26].dt_txt).getUTCHours() <= 18)) ? 
            "day4  daysLight24 ms-3" : 'day4  daysNight24 ms-3'
        }>

            <div className='article-titles'>
                <h1>
                    { hourly.city.country === "TR" ? 
                    new Date(hourly.list[24].dt_txt).toLocaleDateString('tr-TR', options) : 
                    new Date(hourly.list[24].dt_txt).toLocaleDateString('en-EN', options)
                    }
                </h1>

                <span className='fs-6'>
                    { hourly.city.country === "TR" ? 
                        new Date(hourly.list[24].dt_txt).toLocaleDateString('tr-TR', options2) :
                        new Date(hourly.list[24].dt_txt).toLocaleDateString('en-EN', options2)
                    }
                </span>
            </div>
            
            <ul className='mt-2' style={{whiteSpace:"nowrap"}}>

                <li>
                    {
                        new Date(hourly.list[24].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[24].dt_txt).getUTCHours() : "0" + new Date(hourly.list[24].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(24)} alt="WAppIcon" height={40}/></span>
                    <span className='days-temp'>{hourly.list[24].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[25].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[25].dt_txt).getUTCHours() : "0" + new Date(hourly.list[25].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(25)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[25].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[26].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[26].dt_txt).getUTCHours() : "0" + new Date(hourly.list[26].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(26)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[26].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[27].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[27].dt_txt).getUTCHours() : "0" + new Date(hourly.list[27].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(27)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[27].main.temp}°C</span>
                </li>


                <li>
                    {
                        new Date(hourly.list[28].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[28].dt_txt).getUTCHours() : "0" + new Date(hourly.list[28].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(28)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[28].main.temp}°C</span>
                </li>


                <li>
                    {
                        new Date(hourly.list[29].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[29].dt_txt).getUTCHours() : "0" + new Date(hourly.list[29].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(29)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[29].main.temp}°C</span>
                </li>


                <li>
                    {
                        new Date(hourly.list[30].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[30].dt_txt).getUTCHours() : "0" + new Date(hourly.list[30].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(30)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[30].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[31].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[31].dt_txt).getUTCHours() : "0" + new Date(hourly.list[31].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(31)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[31].main.temp}°C</span>
                </li>
            </ul>
        </div>
  );
}

export default ArticleDay4;