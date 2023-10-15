import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

type Props = {
    bikes: any
};

const StolenBikesList: React.FC<Props> = ({ bikes }) => {

    return bikes.map((bike: any) => (
        <InfoCard
            key={bike.id}
            title={bike.title}
            description={bike.description}
            theftDate={bike.date_stolen}
            location={bike.stolen_location}
            image={bike.thumb}
        />
    ));
};

export default StolenBikesList;
