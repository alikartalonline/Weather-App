import React from 'react';
import { useLoadScript } from '@react-google-maps/api';

// COMPONENTS
import MapDetail from './MapDetail';

export default function GoogleMapContent({lat, lon}) {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAP_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <MapDetail lat={lat} lon={lon} />;
};

