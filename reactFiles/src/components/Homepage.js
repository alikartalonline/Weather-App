import React, { useEffect, useState } from 'react';
import axios from 'axios';

// COMPONENTS
import Header from './Header';

function Homepage() {

    const API_KEY = "5accb725677f47f8a257540c2db32718";

    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [item, setItem] = useState(""); // Location 

    // FIND "LAT" - "LOT" 
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${item}&appid=${API_KEY}`)
            .then(res => {
                setLat(res.data[0].lat);
                setLon(res.data[0].lon);
                // console.log(res.data[0].lat)
                // console.log(res.data[0].lon)
            }).catch(err => {
                console.log("error", err);
            })
    }, [item]);


    return (
        <div>

            <Header item={item} setItem={setItem} />


        </div>
    )
};

export default Homepage;