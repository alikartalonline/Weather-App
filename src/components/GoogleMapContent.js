import React from 'react';
import { useLoadScript } from '@react-google-maps/api';
import MapDetail from './MapDetail';

export default function GoogleMapContent({lat, lon}) {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyB2sihK_Sh8aDegzx8hkJ7aK22wivzbar0",
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <MapDetail lat={lat} lon={lon} />;
};

