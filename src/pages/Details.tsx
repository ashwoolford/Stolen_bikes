import React from 'react';
import TheftInfo from '../components/TheftInfo/TheftInfo';
import MapView from '../components/MapView/MapView';

const Details: React.FC = () => {

    return (
        <div>
            <TheftInfo
                title="2019 Infinity Cycle Works"
                description="It’s a 24 inch bike, it has two different grips, a flashlight in the front and the back."
                theftDate="Yesterday 10:39pm"
                location="Munich"
                year={2020}
            />
            <MapView coordinates={[51.505, -0.09]} />
        </div>
    );
};

export default Details;
