import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { unixToDate } from '../../utils/utils';
import Empty from '../Empty/Empty';

type Bike = {
    id: string,
    title: string,
    description: string,
    date_stolen: number,
    stolen_location: string,
    thumb: string | undefined
};

type Props = {
    bikes: Bike[]
};

const StolenBikesList: React.FC<Props> = ({ bikes }) => {

    if (!bikes.length) return <Empty />;

    return (
        <>
            {bikes.map((bike: Bike) => (
                <InfoCard
                    key={bike.id}
                    id={bike.id.toString()}
                    title={bike.title}
                    description={bike.description}
                    theftDate={unixToDate(bike.date_stolen).toDateString()}
                    location={bike.stolen_location}
                    image={bike.thumb}
                />
            ))}
        </>
    );
};

export default StolenBikesList;
