import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { unixToDate } from '../../utils/utils';

type Props = {
    bikes: any
};

const StolenBikesList: React.FC<Props> = ({ bikes }) => {

    return bikes.map((bike: any) => (
        <InfoCard
            key={bike.id}
            id={bike.id.toString()}
            title={bike.title}
            description={bike.description}
            theftDate={unixToDate(bike.date_stolen).toDateString()}
            location={bike.stolen_location}
            image={bike.thumb}
        />
    ));
};

export default StolenBikesList;
