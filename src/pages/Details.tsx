import React from 'react';
import { useParams } from 'react-router-dom';

import TheftInfo from '../components/TheftInfo/TheftInfo';
import MapView from '../components/MapView/MapView';
import Spinner from '../components/Spinner/Spinner';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

import useFetchBikeDetails from '../hooks/useFetchBikeDetails';
import { unixToDate } from '../utils/utils';

const Details: React.FC = () => {
    let { id } = useParams();
    const { isLoading, error, data } = useFetchBikeDetails(id||'');

    if (isLoading) return <Spinner />;
    if (error) return <ErrorBoundary />;
    return (
        <div>
            <TheftInfo
                title={data.title}
                description={data.description}
                theftDate={unixToDate(data.date_stolen).toDateString()}
                location={data.stolen_location}
                year={data.year}
            />
            <MapView coordinates={data.stolen_coordinates} />
        </div>
    );
};

export default Details;
