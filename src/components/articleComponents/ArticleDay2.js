import React from 'react';

function ArticleDay2({ hourly }) {

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
            ((new Date(hourly.list[10].dt_txt).getUTCHours() >= 8 && new Date(hourly.list[10].dt_txt).getUTCHours() <= 18)) ? 
            "day2 col-2 daysLight8 ms-3" : 'day2 col-2 daysNight8 ms-3'
        }>

            <div className='article-titles'>
                <h1>
                    { hourly.city.country === "TR" ? 
                    new Date(hourly.list[8].dt_txt).toLocaleDateString('tr-TR', options) : 
                    new Date(hourly.list[8].dt_txt).toLocaleDateString('en-EN', options)
                    }
                </h1>

                <span className='fs-6'>
                    { hourly.city.country === "TR" ? 
                        new Date(hourly.list[8].dt_txt).toLocaleDateString('tr-TR', options2) :
                        new Date(hourly.list[8].dt_txt).toLocaleDateString('en-EN', options2)
                    }
                </span>
            </div>

            <ul className='mt-2' style={{whiteSpace:"nowrap"}}>

                <li>
                    {
                        new Date(hourly.list[8].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[8].dt_txt).getUTCHours() : "0" + new Date(hourly.list[8].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(8)} alt="WAppIcon" height={40}/></span>
                    <span className='days-temp'>{hourly.list[8].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[9].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[9].dt_txt).getUTCHours() : "0" + new Date(hourly.list[9].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(9)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[9].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[10].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[10].dt_txt).getUTCHours() : "0" + new Date(hourly.list[10].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(10)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[10].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[11].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[11].dt_txt).getUTCHours() : "0" + new Date(hourly.list[11].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(11)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[11].main.temp}°C</span>
                </li>


                <li>
                    {
                        new Date(hourly.list[12].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[12].dt_txt).getUTCHours() : "0" + new Date(hourly.list[12].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(12)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[12].main.temp}°C</span>
                </li>


                <li>
                    {
                        new Date(hourly.list[13].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[13].dt_txt).getUTCHours() : "0" + new Date(hourly.list[13].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(13)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[13].main.temp}°C</span>
                </li>


                <li>
                    {
                        new Date(hourly.list[14].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[14].dt_txt).getUTCHours() : "0" + new Date(hourly.list[14].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(14)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[14].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[15].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[15].dt_txt).getUTCHours() : "0" + new Date(hourly.list[15].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={dayIcon(15)} alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[15].main.temp}°C</span>
                </li>
            </ul>
        </div>
  );
}

export default ArticleDay2;