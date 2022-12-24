import React from 'react'

function ArticleDay1({ hourly }) {

    const options = { weekday: 'long' };
    const options2 = { year: 'numeric', month: 'numeric', day: 'numeric' };


    console.log("icon number4:",hourly.list[4].weather[0].icon)
    console.log("icon number5:",hourly.list[5].weather[0].icon)
    console.log("icon number6:",hourly.list[6].weather[0].icon)

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
            
            <ul className='mt-2' style={{whiteSpace:"nowrap"}}>

                <li>
                    {
                        new Date(hourly.list[0].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[0].dt_txt).getUTCHours() : "0" + new Date(hourly.list[0].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={
                        hourly.list[0].weather[0].icon === "01d" ? "/gif/clearskyicon.gif" :
                        hourly.list[0].weather[0].icon === "01n" ? "/gif/moon7.gif" : 
                        hourly.list[0].weather[0].icon === "02d" ? "/gif/fewcloudsicon.gif" :
                        hourly.list[0].weather[0].icon === "02n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[0].weather[0].icon === "03d" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[0].weather[0].icon === "03n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[0].weather[0].icon === "04n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[0].weather[0].icon === "04n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[0].weather[0].icon === "09d" ? "/gif/rainicon.gif" :
                        hourly.list[0].weather[0].icon === "09n" ? "/gif/showerrainicon.gif" :
                        hourly.list[0].weather[0].icon === "10d" ? "/gif/rainicon.gif" :
                        hourly.list[0].weather[0].icon === "10n" ? "/gif/showerrainicon.gif" :
                        hourly.list[0].weather[0].icon === "11d" ? "/gif/drizzleicon.gif" :
                        hourly.list[0].weather[0].icon === "11n" ? "/gif/drizzleicon.gif" :
                        hourly.list[0].weather[0].icon === "13d" ? "/gif/snowicon.gif" :
                        hourly.list[0].weather[0].icon === "13n" ? "/gif/snowicon.gif" :
                        hourly.list[0].weather[0].icon === "50d" ? "/gif/misticon.gif" :
                        hourly.list[0].weather[0].icon === "50n" ? "/gif/misticon.gif" :
                        "/gif/clearskyicon.gif"
                    } 
                    alt="WAppIcon"  height={hourly.list[0].weather[0].icon === "01n" ? 30 : 40}/></span>
                    <span>{hourly.list[0].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[1].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[1].dt_txt).getUTCHours() : "0" + new Date(hourly.list[1].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={
                        hourly.list[1].weather[0].icon === "01d" ? "/gif/clearskyicon.gif" :
                        hourly.list[1].weather[0].icon === "01n" ? "/gif/moon7.gif" : 
                        hourly.list[1].weather[0].icon === "02d" ? "/gif/fewcloudsicon.gif" :
                        hourly.list[1].weather[0].icon === "02n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[1].weather[0].icon === "03d" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[1].weather[0].icon === "03n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[1].weather[0].icon === "04n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[1].weather[0].icon === "04n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[1].weather[0].icon === "09d" ? "/gif/rainicon.gif" :
                        hourly.list[1].weather[0].icon === "09n" ? "/gif/showerrainicon.gif" :
                        hourly.list[1].weather[0].icon === "10d" ? "/gif/rainicon.gif" :
                        hourly.list[1].weather[0].icon === "10n" ? "/gif/showerrainicon.gif" :
                        hourly.list[1].weather[0].icon === "11d" ? "/gif/drizzleicon.gif" :
                        hourly.list[1].weather[0].icon === "11n" ? "/gif/drizzleicon.gif" :
                        hourly.list[1].weather[0].icon === "13d" ? "/gif/snowicon.gif" :
                        hourly.list[1].weather[0].icon === "13n" ? "/gif/snowicon.gif" :
                        hourly.list[1].weather[0].icon === "50d" ? "/gif/misticon.gif" :
                        hourly.list[1].weather[0].icon === "50n" ? "/gif/misticon.gif" :
                        "/gif/clearskyicon.gif"
                    } 
                    alt="WAppIcon"  height={hourly.list[1].weather[0].icon === "01n" ? 30 : 40}/></span>
                    <span>{hourly.list[1].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[2].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[2].dt_txt).getUTCHours() : "0" + new Date(hourly.list[2].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={
                        hourly.list[2].weather[0].icon === "01d" ? "/gif/clearskyicon.gif" :
                        hourly.list[2].weather[0].icon === "01n" ? "/gif/moon7.gif" : 
                        hourly.list[2].weather[0].icon === "02d" ? "/gif/fewcloudsicon.gif" :
                        hourly.list[2].weather[0].icon === "02n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[2].weather[0].icon === "03d" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[2].weather[0].icon === "03n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[2].weather[0].icon === "04n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[2].weather[0].icon === "04n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[2].weather[0].icon === "09d" ? "/gif/rainicon.gif" :
                        hourly.list[2].weather[0].icon === "09n" ? "/gif/showerrainicon.gif" :
                        hourly.list[2].weather[0].icon === "10d" ? "/gif/rainicon.gif" :
                        hourly.list[2].weather[0].icon === "10n" ? "/gif/showerrainicon.gif" :
                        hourly.list[2].weather[0].icon === "11d" ? "/gif/drizzleicon.gif" :
                        hourly.list[2].weather[0].icon === "11n" ? "/gif/drizzleicon.gif" :
                        hourly.list[2].weather[0].icon === "13d" ? "/gif/snowicon.gif" :
                        hourly.list[2].weather[0].icon === "13n" ? "/gif/snowicon.gif" :
                        hourly.list[2].weather[0].icon === "50d" ? "/gif/misticon.gif" :
                        hourly.list[2].weather[0].icon === "50n" ? "/gif/misticon.gif" :
                        "/gif/clearskyicon.gif"
                    } 
                    alt="WAppIcon"  height={hourly.list[2].weather[0].icon === "01n" ? 30 : 40}/></span>
                    <span>{hourly.list[2].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[3].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[3].dt_txt).getUTCHours() : "0" + new Date(hourly.list[3].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={
                        hourly.list[3].weather[0].icon === "01d" ? "/gif/clearskyicon.gif" :
                        hourly.list[3].weather[0].icon === "01n" ? "/gif/moon7.gif" : 
                        hourly.list[3].weather[0].icon === "02d" ? "/gif/fewcloudsicon.gif" :
                        hourly.list[3].weather[0].icon === "02n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[3].weather[0].icon === "03d" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[3].weather[0].icon === "03n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[3].weather[0].icon === "04n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[3].weather[0].icon === "04n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[3].weather[0].icon === "09d" ? "/gif/rainicon.gif" :
                        hourly.list[3].weather[0].icon === "09n" ? "/gif/showerrainicon.gif" :
                        hourly.list[3].weather[0].icon === "10d" ? "/gif/rainicon.gif" :
                        hourly.list[3].weather[0].icon === "10n" ? "/gif/showerrainicon.gif" :
                        hourly.list[3].weather[0].icon === "11d" ? "/gif/drizzleicon.gif" :
                        hourly.list[3].weather[0].icon === "11n" ? "/gif/drizzleicon.gif" :
                        hourly.list[3].weather[0].icon === "13d" ? "/gif/snowicon.gif" :
                        hourly.list[3].weather[0].icon === "13n" ? "/gif/snowicon.gif" :
                        hourly.list[3].weather[0].icon === "50d" ? "/gif/misticon.gif" :
                        hourly.list[3].weather[0].icon === "50n" ? "/gif/misticon.gif" :
                        "/gif/clearskyicon.gif"
                    } 
                    alt="WAppIcon"  height={hourly.list[3].weather[0].icon === "01n" ? 30 : 40}/></span>
                    <span>{hourly.list[3].main.temp}°C</span>
                </li>


                <li>
                    {
                        new Date(hourly.list[4].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[4].dt_txt).getUTCHours() : "0" + new Date(hourly.list[4].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={
                        hourly.list[4].weather[0].icon === "01d" ? "/gif/clearskyicon.gif" :
                        hourly.list[4].weather[0].icon === "01n" ? "/gif/moon7.gif" : 
                        hourly.list[4].weather[0].icon === "02d" ? "/gif/fewcloudsicon.gif" :
                        hourly.list[4].weather[0].icon === "02n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[4].weather[0].icon === "03d" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[4].weather[0].icon === "03n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[4].weather[0].icon === "04n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[4].weather[0].icon === "04n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[4].weather[0].icon === "09d" ? "/gif/rainicon.gif" :
                        hourly.list[4].weather[0].icon === "09n" ? "/gif/showerrainicon.gif" :
                        hourly.list[4].weather[0].icon === "10d" ? "/gif/rainicon.gif" :
                        hourly.list[4].weather[0].icon === "10n" ? "/gif/showerrainicon.gif" :
                        hourly.list[4].weather[0].icon === "11d" ? "/gif/drizzleicon.gif" :
                        hourly.list[4].weather[0].icon === "11n" ? "/gif/drizzleicon.gif" :
                        hourly.list[4].weather[0].icon === "13d" ? "/gif/snowicon.gif" :
                        hourly.list[4].weather[0].icon === "13n" ? "/gif/snowicon.gif" :
                        hourly.list[4].weather[0].icon === "50d" ? "/gif/misticon.gif" :
                        hourly.list[4].weather[0].icon === "50n" ? "/gif/misticon.gif" :
                        "/gif/clearskyicon.gif"
                    } 
                    alt="WAppIcon"  height={hourly.list[4].weather[0].icon === "01n" ? 30 : 40}/></span>
                    <span>{hourly.list[4].main.temp}°C</span>
                </li>


                <li>
                    {
                        new Date(hourly.list[5].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[5].dt_txt).getUTCHours() : "0" + new Date(hourly.list[5].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={
                        hourly.list[5].weather[0].icon === "01d" ? "/gif/clearskyicon.gif" :
                        hourly.list[5].weather[0].icon === "01n" ? "/gif/moon7.gif" : 
                        hourly.list[5].weather[0].icon === "02d" ? "/gif/fewcloudsicon.gif" :
                        hourly.list[5].weather[0].icon === "02n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[5].weather[0].icon === "03d" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[5].weather[0].icon === "03n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[5].weather[0].icon === "04n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[5].weather[0].icon === "04n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[5].weather[0].icon === "09d" ? "/gif/rainicon.gif" :
                        hourly.list[5].weather[0].icon === "09n" ? "/gif/showerrainicon.gif" :
                        hourly.list[5].weather[0].icon === "10d" ? "/gif/rainicon.gif" :
                        hourly.list[5].weather[0].icon === "10n" ? "/gif/showerrainicon.gif" :
                        hourly.list[5].weather[0].icon === "11d" ? "/gif/drizzleicon.gif" :
                        hourly.list[5].weather[0].icon === "11n" ? "/gif/drizzleicon.gif" :
                        hourly.list[5].weather[0].icon === "13d" ? "/gif/snowicon.gif" :
                        hourly.list[5].weather[0].icon === "13n" ? "/gif/snowicon.gif" :
                        hourly.list[5].weather[0].icon === "50d" ? "/gif/misticon.gif" :
                        hourly.list[5].weather[0].icon === "50n" ? "/gif/misticon.gif" :
                        "/gif/clearskyicon.gif"
                    } 
                    alt="WAppIcon"  height={hourly.list[5].weather[0].icon === "01n" ? 30 : 40}/></span>
                    <span>{hourly.list[5].main.temp}°C</span>
                </li>


                <li>
                    {
                        new Date(hourly.list[6].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[6].dt_txt).getUTCHours() : "0" + new Date(hourly.list[6].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={
                        hourly.list[6].weather[0].icon === "01d" ? "/gif/clearskyicon.gif" :
                        hourly.list[6].weather[0].icon === "01n" ? "/gif/moon7.gif" : 
                        hourly.list[6].weather[0].icon === "02d" ? "/gif/fewcloudsicon.gif" :
                        hourly.list[6].weather[0].icon === "02n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[6].weather[0].icon === "03d" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[6].weather[0].icon === "03n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[6].weather[0].icon === "04n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[6].weather[0].icon === "04n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[6].weather[0].icon === "09d" ? "/gif/rainicon.gif" :
                        hourly.list[6].weather[0].icon === "09n" ? "/gif/showerrainicon.gif" :
                        hourly.list[6].weather[0].icon === "10d" ? "/gif/rainicon.gif" :
                        hourly.list[6].weather[0].icon === "10n" ? "/gif/showerrainicon.gif" :
                        hourly.list[6].weather[0].icon === "11d" ? "/gif/drizzleicon.gif" :
                        hourly.list[6].weather[0].icon === "11n" ? "/gif/drizzleicon.gif" :
                        hourly.list[6].weather[0].icon === "13d" ? "/gif/snowicon.gif" :
                        hourly.list[6].weather[0].icon === "13n" ? "/gif/snowicon.gif" :
                        hourly.list[6].weather[0].icon === "50d" ? "/gif/misticon.gif" :
                        hourly.list[6].weather[0].icon === "50n" ? "/gif/misticon.gif" :
                        "/gif/clearskyicon.gif"
                    } 
                    alt="WAppIcon"  height={hourly.list[6].weather[0].icon === "01n" ? 30 : 40}/></span>
                    <span>{hourly.list[6].main.temp}°C</span>
                </li>

                <li>
                    {
                        new Date(hourly.list[7].dt_txt).getUTCHours() > 9 ?
                            new Date(hourly.list[7].dt_txt).getUTCHours() : "0" + new Date(hourly.list[7].dt_txt).getUTCHours()
                    } : 00 <span><img 
                    src={
                        hourly.list[7].weather[0].icon === "01d" ? "/gif/clearskyicon.gif" :
                        hourly.list[7].weather[0].icon === "01n" ? "/gif/moon7.gif" : 
                        hourly.list[7].weather[0].icon === "02d" ? "/gif/fewcloudsicon.gif" :
                        hourly.list[7].weather[0].icon === "02n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[7].weather[0].icon === "03d" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[7].weather[0].icon === "03n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[7].weather[0].icon === "04n" ? "/gif/brokencloudsicon.gif" :
                        hourly.list[7].weather[0].icon === "04n" ? "/gif/scatteredcloudsicon.gif" :
                        hourly.list[7].weather[0].icon === "09d" ? "/gif/rainicon.gif" :
                        hourly.list[7].weather[0].icon === "09n" ? "/gif/showerrainicon.gif" :
                        hourly.list[7].weather[0].icon === "10d" ? "/gif/rainicon.gif" :
                        hourly.list[7].weather[0].icon === "10n" ? "/gif/showerrainicon.gif" :
                        hourly.list[7].weather[0].icon === "11d" ? "/gif/drizzleicon.gif" :
                        hourly.list[7].weather[0].icon === "11n" ? "/gif/drizzleicon.gif" :
                        hourly.list[7].weather[0].icon === "13d" ? "/gif/snowicon.gif" :
                        hourly.list[7].weather[0].icon === "13n" ? "/gif/snowicon.gif" :
                        hourly.list[7].weather[0].icon === "50d" ? "/gif/misticon.gif" :
                        hourly.list[7].weather[0].icon === "50n" ? "/gif/misticon.gif" :
                        "/gif/clearskyicon.gif"
                    } 
                    alt="WAppIcon"  height={hourly.list[7].weather[0].icon === "01n" ? 30 : 40}/></span>
                    <span>{hourly.list[7].main.temp}°C</span>
                </li>
            </ul>
        </div>
    );
}

export default ArticleDay1;