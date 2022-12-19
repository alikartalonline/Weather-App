import React, { useEffect, useState } from 'react';
import axios from 'axios';

// COMPONENTS
import Header from './Header';
import Section from './Section';
import Nav from './Nav';

function Homepage() {

    const [lat, setLat] = useState(41.0091982); 
    const [lon, setLon] = useState(28.9662187);
    const [item, setItem] = useState("Istanbul"); // Location 
    const [dateTime, setDateTime] = useState(""); 

    // FIND "LAT" - "LOT" 
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${item}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
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
            <Header item={item} setItem={setItem} dateTime={dateTime} />
            <Nav />
            <Section lat={lat} lon={lon} item={item} setDateTime={setDateTime} />
        </div>
    )
};

export default Homepage;