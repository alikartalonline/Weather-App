import React from 'react';

function ArticleDay3({ hourly }) {

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
            ((new Date(hourly.list[18].dt_txt).getUTCHours() >= 8 && new Date(hourly.list[18].dt_txt).getUTCHours() <= 18)) ? 
            "day3 col-2 daysLight16 ms-3" : 'day3 col-2 daysNight16 ms-3'
        }>

            <div className='article-titles'>
                <h1>
                    { hourly.city.country === "TR" ? 
                    new Date(hourly.list[16].dt_txt).toLocaleDateString('tr-TR', options) : 
                    new Date(hourly.list[16].dt_txt).toLocaleDateString('en-EN', options)
                    }
                </h1>

                <span className='fs-6'>
                    { hourly.city.country === "TR" ? 
                        new Date(hourly.list[16].dt_txt).toLocaleDateString('tr-TR', options2) :
                        new Date(hourly.list[16].dt_txt).toLocaleDateString('en-EN', options2)
                    }
                </span>
            </div>
            
            <ul className='mt-2' style={{whiteSpace:"nowrap"}}>

                <li>
                    {
                        new Date(hourly.list[16].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[16].dt_txt).getUTCHours() : "0" + new Date(hourly.list[16].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(16)} alt="WAppIcon" height={40}/></span>
                    <span className='days-temp'>{hourly.list[16].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[17].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[17].dt_txt).getUTCHours() : "0" + new Date(hourly.list[17].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(17)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[17].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[18].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[18].dt_txt).getUTCHours() : "0" + new Date(hourly.list[18].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(18)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[18].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[19].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[19].dt_txt).getUTCHours() : "0" + new Date(hourly.list[19].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(19)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[19].main.temp}°C</span>
                </li>


                <li>
                    {
                        new Date(hourly.list[20].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[20].dt_txt).getUTCHours() : "0" + new Date(hourly.list[20].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(20)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[20].main.temp}°C</span>
                </li>


                <li>
                    {
                        new Date(hourly.list[21].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[21].dt_txt).getUTCHours() : "0" + new Date(hourly.list[21].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(21)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[21].main.temp}°C</span>
                </li>


                <li>
                    {
                        new Date(hourly.list[22].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[22].dt_txt).getUTCHours() : "0" + new Date(hourly.list[22].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(22)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[22].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[23].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[23].dt_txt).getUTCHours() : "0" + new Date(hourly.list[23].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(23)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[23].main.temp}°C</span>
                </li>
            </ul>
        </div>
  );
}

export default ArticleDay3;