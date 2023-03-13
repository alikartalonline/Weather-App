import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Nav() {

    const [istanbul, setIstanbul] = useState("");
    const [ankara, setAnkara] = useState("");
    const [izmir, setIzmir] = useState("");

    // ISTANBUL
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=41.0091982&lon=28.9662187&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
            .then(res => {
                setIstanbul(res.data)
            }).catch(err => {
                console.log("error", err);
            })
    }, []);


    // ANKARA
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=39.9207886&lon=32.8540482&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
            .then(res => {
                setAnkara(res.data)
            }).catch(err => {
                console.log("error", err);
            })
    }, []);

    // IZMIR
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=38.4224548&lon=27.1310699&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
            .then(res => {
                setIzmir(res.data)
            }).catch(err => {
                console.log("error", err);
            })
    }, []);



    return (
        <nav>
            <div className='container'>
                <div className='row'>

                    {/* ISTANBUL */}
                    {istanbul !== "" ?
                        <div className='col-4 col-sm d-flex  nav-border border-end border-start istanbul'>
                            <span className=' d-flex mt-1'>
                                <span className='nav-title mt-1'>
                                    {istanbul.name === "Karaköy" ? "Istanbul" : istanbul.name}</span>
                                <img
                                    src={`http://openweathermap.org/img/wn/${istanbul.weather[0].icon}.png`}
                                    alt="icon" width={35} height={35} className="ms-3" />
                                <div className='d-flex ms-2 mt-1'>
                                    <span className='nav-title'>{istanbul.main.temp.toFixed()}</span>
                                    <span className='nav-title'>°C</span>
                                </div>
                            </span>
                        </div>
                        : null}

                    {/* ANKARA */}
                    {ankara !== "" ?
                        <div className='col-4 col-sm d-flex  nav-border border-end border-start ankara'>
                            <span className='d-flex mt-1'>
                                <span className='nav-title mt-1'>
                                    {ankara.name}
                                </span>
                                <img
                                    src={`http://openweathermap.org/img/wn/${ankara.weather[0].icon}.png`}
                                    alt="icon" width={30} height={30} className="ms-3" />
                                <div className='d-flex ms-2 mt-1'>
                                    <span className='nav-title'>{ankara.main.temp.toFixed()}</span>
                                    <span className='nav-title'>°C</span>
                                </div>
                            </span>
                        </div>
                        : null}

                    {/* IZMIR */}
                    {izmir !== "" ?
                        <div className='col-4 col-sm d-flex  nav-border border-end border-start izmir'>
                            <span className='mt-1 d-flex'>
                                <span className='nav-title mt-1'>
                                    {izmir.name}
                                </span>
                                <img
                                    src={`http://openweathermap.org/img/wn/${izmir.weather[0].icon}.png`}
                                    alt="icon" width={30} height={30} className="ms-3" />
                                <div className='d-flex ms-2 mt-1'>
                                    <span className='nav-title'>{izmir.main.temp.toFixed()}</span>
                                    <span className='nav-title'>°C</span>
                                </div>
                            </span>
                        </div>
                        : null}

                </div>
            </div>
        </nav>
    );
}

export default Nav;