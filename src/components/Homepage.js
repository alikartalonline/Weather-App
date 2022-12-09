import React, { useEffect, useState } from 'react';
import axios from 'axios';

// COMPONENTS
import Header from './Header';
import Section from './Section';

function Homepage() {

    // console.log("env apimiz:", process.env.REACT_APP_API_KEY)

    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [item, setItem] = useState(""); // Location 

    // FIND "LAT" - "LOT" 
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${item}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                // setLat(res.data[0].lat);
                setLat((res.data[0].lat))
                setLon((res.data[0].lon));
                console.log("lat :",lat)
                console.log("lon :",lon)
            }).catch(err => {
                console.log("error", err);
            })
    }, [item, lat, lon]);

    return (
        <div>

            <Header item={item} setItem={setItem} />
            <Section lat={lat} lon={lon} item={item} />


        </div>
    )
};

export default Homepage;