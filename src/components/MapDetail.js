import React, { useMemo } from 'react';
import { GoogleMap,Marker } from '@react-google-maps/api';

function MapDetail({lat, lon}) {

    const center = useMemo(() => ({ lat: lat, lng: lon }), [lat, lon]);
    
    return (
        <GoogleMap
            zoom={8} 
            center={center}
            mapContainerClassName="map-container rounded-3">
            <Marker position={center} />
        </GoogleMap>
    );
}


export default MapDetail;