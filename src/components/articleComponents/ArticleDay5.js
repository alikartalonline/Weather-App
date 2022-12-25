import React from 'react'

function ArticleDay5({ hourly }) {
    const options = { weekday: 'long' };
    const options2 = { year: 'numeric', month: 'numeric', day: 'numeric' };


    return (
        <div className={
            ((new Date(hourly.list[32].dt_txt).getUTCHours() >= 8 && new Date(hourly.list[32].dt_txt).getUTCHours() <= 18)) ? 
            "day1 col-2 daysLight32 ms-3" : 'day1 col-2 daysNight32 ms-3'
        }>

            <div className='article-titles'>
                <h1>
                    { hourly.city.country === "TR" ? 
                    new Date(hourly.list[32].dt_txt).toLocaleDateString('tr-TR', options) : 
                    new Date(hourly.list[32].dt_txt).toLocaleDateString('en-EN', options)
                    }
                </h1>

                <span className='fs-6'>
                    { hourly.city.country === "TR" ? 
                        new Date(hourly.list[32].dt_txt).toLocaleDateString('tr-TR', options2) :
                        new Date(hourly.list[32].dt_txt).toLocaleDateString('en-EN', options2)
                    }
                </span>
            </div>
            
            <ul className='mt-2' style={{whiteSpace:"nowrap"}}>

                <li>
                    {
                        new Date(hourly.list[32].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[32].dt_txt).getUTCHours() : "0" + new Date(hourly.list[32].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={
                        hourly.list[32].weather[0].icon === "01d" ? "/gif/clearskyicon.gif" :
                        hourly.list[32].weather[0].icon === "01n" ? "/gif/clearskyicon.gif" : 
                        hourly.list[32].weather[0].icon === "02d" ? "/gif/fewcloudsicon.gif" :
                        hourly.list[32].weather[0].icon === "02n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[32].weather[0].icon === "03d" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[32].weather[0].icon === "03n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[32].weather[0].icon === "04n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[32].weather[0].icon === "04n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[32].weather[0].icon === "09d" ? "/gif/rainicon.gif" :
                        hourly.list[32].weather[0].icon === "09n" ? "/gif/showerrainicon.gif" :
                        hourly.list[32].weather[0].icon === "10d" ? "/gif/rainicon.gif" :
                        hourly.list[32].weather[0].icon === "10n" ? "/gif/showerrainicon.gif" :
                        hourly.list[32].weather[0].icon === "11d" ? "/gif/drizzleicon.gif" :
                        hourly.list[32].weather[0].icon === "11n" ? "/gif/drizzleicon.gif" :
                        hourly.list[32].weather[0].icon === "13d" ? "/gif/snowicon.gif" :
                        hourly.list[32].weather[0].icon === "13n" ? "/gif/snowicon.gif" :
                        hourly.list[32].weather[0].icon === "50d" ? "/gif/misticon.gif" :
                        hourly.list[32].weather[0].icon === "50n" ? "/gif/misticon.gif" :
                        "/gif/clearskyicon.gif"
                    } 
                    alt="WAppIcon" height={40}/></span>
                    <span className='days-temp'>{hourly.list[32].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[33].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[33].dt_txt).getUTCHours() : "0" + new Date(hourly.list[33].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={
                        hourly.list[33].weather[0].icon === "01d" ? "/gif/clearskyicon.gif" :
                        hourly.list[33].weather[0].icon === "01n" ? "/gif/clearskyicon.gif" : 
                        hourly.list[33].weather[0].icon === "02d" ? "/gif/fewcloudsicon.gif" :
                        hourly.list[33].weather[0].icon === "02n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[33].weather[0].icon === "03d" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[33].weather[0].icon === "03n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[33].weather[0].icon === "04n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[33].weather[0].icon === "04n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[33].weather[0].icon === "09d" ? "/gif/rainicon.gif" :
                        hourly.list[33].weather[0].icon === "09n" ? "/gif/showerrainicon.gif" :
                        hourly.list[33].weather[0].icon === "10d" ? "/gif/rainicon.gif" :
                        hourly.list[33].weather[0].icon === "10n" ? "/gif/showerrainicon.gif" :
                        hourly.list[33].weather[0].icon === "11d" ? "/gif/drizzleicon.gif" :
                        hourly.list[33].weather[0].icon === "11n" ? "/gif/drizzleicon.gif" :
                        hourly.list[33].weather[0].icon === "13d" ? "/gif/snowicon.gif" :
                        hourly.list[33].weather[0].icon === "13n" ? "/gif/snowicon.gif" :
                        hourly.list[33].weather[0].icon === "50d" ? "/gif/misticon.gif" :
                        hourly.list[33].weather[0].icon === "50n" ? "/gif/misticon.gif" :
                        "/gif/clearskyicon.gif"
                    } 
                    alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[33].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[34].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[34].dt_txt).getUTCHours() : "0" + new Date(hourly.list[34].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={
                        hourly.list[34].weather[0].icon === "01d" ? "/gif/clearskyicon.gif" :
                        hourly.list[34].weather[0].icon === "01n" ? "/gif/clearskyicon.gif" : 
                        hourly.list[34].weather[0].icon === "02d" ? "/gif/fewcloudsicon.gif" :
                        hourly.list[34].weather[0].icon === "02n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[34].weather[0].icon === "03d" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[34].weather[0].icon === "03n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[34].weather[0].icon === "04n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[34].weather[0].icon === "04n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[34].weather[0].icon === "09d" ? "/gif/rainicon.gif" :
                        hourly.list[34].weather[0].icon === "09n" ? "/gif/showerrainicon.gif" :
                        hourly.list[34].weather[0].icon === "10d" ? "/gif/rainicon.gif" :
                        hourly.list[34].weather[0].icon === "10n" ? "/gif/showerrainicon.gif" :
                        hourly.list[34].weather[0].icon === "11d" ? "/gif/drizzleicon.gif" :
                        hourly.list[34].weather[0].icon === "11n" ? "/gif/drizzleicon.gif" :
                        hourly.list[34].weather[0].icon === "13d" ? "/gif/snowicon.gif" :
                        hourly.list[34].weather[0].icon === "13n" ? "/gif/snowicon.gif" :
                        hourly.list[34].weather[0].icon === "50d" ? "/gif/misticon.gif" :
                        hourly.list[34].weather[0].icon === "50n" ? "/gif/misticon.gif" :
                        "/gif/clearskyicon.gif"
                    } 
                    alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[34].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[35].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[35].dt_txt).getUTCHours() : "0" + new Date(hourly.list[35].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={
                        hourly.list[35].weather[0].icon === "01d" ? "/gif/clearskyicon.gif" :
                        hourly.list[35].weather[0].icon === "01n" ? "/gif/clearskyicon.gif" : 
                        hourly.list[35].weather[0].icon === "02d" ? "/gif/fewcloudsicon.gif" :
                        hourly.list[35].weather[0].icon === "02n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[35].weather[0].icon === "03d" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[35].weather[0].icon === "03n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[35].weather[0].icon === "04n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[35].weather[0].icon === "04n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[35].weather[0].icon === "09d" ? "/gif/rainicon.gif" :
                        hourly.list[35].weather[0].icon === "09n" ? "/gif/showerrainicon.gif" :
                        hourly.list[35].weather[0].icon === "10d" ? "/gif/rainicon.gif" :
                        hourly.list[35].weather[0].icon === "10n" ? "/gif/showerrainicon.gif" :
                        hourly.list[35].weather[0].icon === "11d" ? "/gif/drizzleicon.gif" :
                        hourly.list[35].weather[0].icon === "11n" ? "/gif/drizzleicon.gif" :
                        hourly.list[35].weather[0].icon === "13d" ? "/gif/snowicon.gif" :
                        hourly.list[35].weather[0].icon === "13n" ? "/gif/snowicon.gif" :
                        hourly.list[35].weather[0].icon === "50d" ? "/gif/misticon.gif" :
                        hourly.list[35].weather[0].icon === "50n" ? "/gif/misticon.gif" :
                        "/gif/clearskyicon.gif"
                    } 
                    alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[35].main.temp}°C</span>
                </li>


                <li>
                    {
                        new Date(hourly.list[36].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[36].dt_txt).getUTCHours() : "0" + new Date(hourly.list[36].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={
                        hourly.list[36].weather[0].icon === "01d" ? "/gif/clearskyicon.gif" :
                        hourly.list[36].weather[0].icon === "01n" ? "/gif/clearskyicon.gif" : 
                        hourly.list[36].weather[0].icon === "02d" ? "/gif/fewcloudsicon.gif" :
                        hourly.list[36].weather[0].icon === "02n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[36].weather[0].icon === "03d" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[36].weather[0].icon === "03n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[36].weather[0].icon === "04n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[36].weather[0].icon === "04n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[36].weather[0].icon === "09d" ? "/gif/rainicon.gif" :
                        hourly.list[36].weather[0].icon === "09n" ? "/gif/showerrainicon.gif" :
                        hourly.list[36].weather[0].icon === "10d" ? "/gif/rainicon.gif" :
                        hourly.list[36].weather[0].icon === "10n" ? "/gif/showerrainicon.gif" :
                        hourly.list[36].weather[0].icon === "11d" ? "/gif/drizzleicon.gif" :
                        hourly.list[36].weather[0].icon === "11n" ? "/gif/drizzleicon.gif" :
                        hourly.list[36].weather[0].icon === "13d" ? "/gif/snowicon.gif" :
                        hourly.list[36].weather[0].icon === "13n" ? "/gif/snowicon.gif" :
                        hourly.list[36].weather[0].icon === "50d" ? "/gif/misticon.gif" :
                        hourly.list[36].weather[0].icon === "50n" ? "/gif/misticon.gif" :
                        "/gif/clearskyicon.gif"
                    } 
                    alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[36].main.temp}°C</span>
                </li>


                <li>
                    {
                        new Date(hourly.list[37].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[37].dt_txt).getUTCHours() : "0" + new Date(hourly.list[37].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={
                        hourly.list[37].weather[0].icon === "01d" ? "/gif/clearskyicon.gif" :
                        hourly.list[37].weather[0].icon === "01n" ? "/gif/clearskyicon.gif" : 
                        hourly.list[37].weather[0].icon === "02d" ? "/gif/fewcloudsicon.gif" :
                        hourly.list[37].weather[0].icon === "02n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[37].weather[0].icon === "03d" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[37].weather[0].icon === "03n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[37].weather[0].icon === "04n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[37].weather[0].icon === "04n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[37].weather[0].icon === "09d" ? "/gif/rainicon.gif" :
                        hourly.list[37].weather[0].icon === "09n" ? "/gif/showerrainicon.gif" :
                        hourly.list[37].weather[0].icon === "10d" ? "/gif/rainicon.gif" :
                        hourly.list[37].weather[0].icon === "10n" ? "/gif/showerrainicon.gif" :
                        hourly.list[37].weather[0].icon === "11d" ? "/gif/drizzleicon.gif" :
                        hourly.list[37].weather[0].icon === "11n" ? "/gif/drizzleicon.gif" :
                        hourly.list[37].weather[0].icon === "13d" ? "/gif/snowicon.gif" :
                        hourly.list[37].weather[0].icon === "13n" ? "/gif/snowicon.gif" :
                        hourly.list[37].weather[0].icon === "50d" ? "/gif/misticon.gif" :
                        hourly.list[37].weather[0].icon === "50n" ? "/gif/misticon.gif" :
                        "/gif/clearskyicon.gif"
                    } 
                    alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[37].main.temp}°C</span>
                </li>


                <li>
                    {
                        new Date(hourly.list[38].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[38].dt_txt).getUTCHours() : "0" + new Date(hourly.list[38].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={
                        hourly.list[38].weather[0].icon === "01d" ? "/gif/clearskyicon.gif" :
                        hourly.list[38].weather[0].icon === "01n" ? "/gif/clearskyicon.gif" : 
                        hourly.list[38].weather[0].icon === "02d" ? "/gif/fewcloudsicon.gif" :
                        hourly.list[38].weather[0].icon === "02n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[38].weather[0].icon === "03d" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[38].weather[0].icon === "03n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[38].weather[0].icon === "04n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[38].weather[0].icon === "04n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[38].weather[0].icon === "09d" ? "/gif/rainicon.gif" :
                        hourly.list[38].weather[0].icon === "09n" ? "/gif/showerrainicon.gif" :
                        hourly.list[38].weather[0].icon === "10d" ? "/gif/rainicon.gif" :
                        hourly.list[38].weather[0].icon === "10n" ? "/gif/showerrainicon.gif" :
                        hourly.list[38].weather[0].icon === "11d" ? "/gif/drizzleicon.gif" :
                        hourly.list[38].weather[0].icon === "11n" ? "/gif/drizzleicon.gif" :
                        hourly.list[38].weather[0].icon === "13d" ? "/gif/snowicon.gif" :
                        hourly.list[38].weather[0].icon === "13n" ? "/gif/snowicon.gif" :
                        hourly.list[38].weather[0].icon === "50d" ? "/gif/misticon.gif" :
                        hourly.list[38].weather[0].icon === "50n" ? "/gif/misticon.gif" :
                        "/gif/clearskyicon.gif"
                    } 
                    alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[38].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[39].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[39].dt_txt).getUTCHours() : "0" + new Date(hourly.list[39].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={
                        hourly.list[39].weather[0].icon === "01d" ? "/gif/clearskyicon.gif" :
                        hourly.list[39].weather[0].icon === "01n" ? "/gif/clearskyicon.gif" : 
                        hourly.list[39].weather[0].icon === "02d" ? "/gif/fewcloudsicon.gif" :
                        hourly.list[39].weather[0].icon === "02n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[39].weather[0].icon === "03d" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[39].weather[0].icon === "03n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[39].weather[0].icon === "04n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[39].weather[0].icon === "04n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[39].weather[0].icon === "09d" ? "/gif/rainicon.gif" :
                        hourly.list[39].weather[0].icon === "09n" ? "/gif/showerrainicon.gif" :
                        hourly.list[39].weather[0].icon === "10d" ? "/gif/rainicon.gif" :
                        hourly.list[39].weather[0].icon === "10n" ? "/gif/showerrainicon.gif" :
                        hourly.list[39].weather[0].icon === "11d" ? "/gif/drizzleicon.gif" :
                        hourly.list[39].weather[0].icon === "11n" ? "/gif/drizzleicon.gif" :
                        hourly.list[39].weather[0].icon === "13d" ? "/gif/snowicon.gif" :
                        hourly.list[39].weather[0].icon === "13n" ? "/gif/snowicon.gif" :
                        hourly.list[39].weather[0].icon === "50d" ? "/gif/misticon.gif" :
                        hourly.list[39].weather[0].icon === "50n" ? "/gif/misticon.gif" :
                        "/gif/clearskyicon.gif"
                    } 
                    alt="WAppIcon"  height={40}/></span>
                    <span className='days-temp'>{hourly.list[39].main.temp}°C</span>
                </li>
            </ul>
        </div>
  );
}

export default ArticleDay5;