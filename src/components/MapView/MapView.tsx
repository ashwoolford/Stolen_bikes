import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { OPEN_STREET_MAP } from '../../constants/appConstants';
import { MapViewContainer } from './MapView.styles';

type Props = {
    coordinates: [number, number] | undefined
};

const MapView: React.FC<Props> = ({ coordinates }) => {
    if (!coordinates) return null;

    return (
        <MapViewContainer data-testid="map-container">
            <MapContainer
                center={coordinates}
                zoom={OPEN_STREET_MAP.ZOOM_LEVEL}
                scrollWheelZoom={OPEN_STREET_MAP.SCROLL_WHEEL_TO_ZOOM}
                style={{ height: '480px' }}
            >
                <TileLayer
                    attribution={OPEN_STREET_MAP.ATTRIBUTION}
                    url={OPEN_STREET_MAP.TILE_URL}
                />
                <Marker position={coordinates} />
            </MapContainer>

        </MapViewContainer>
    );
};

export default MapView;
