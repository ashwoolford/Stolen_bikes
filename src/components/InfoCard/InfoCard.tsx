import React from 'react';
import { CardContainer } from './InfoCard.styles';

type Props = { 
    title: string, 
    description: string, 
    theftDate: string, 
    reportedDate: string, 
    location: string, 
    image?: string | undefined
};

const InfoCard: React.FC<Props> = ({ title, description, theftDate, reportedDate, location, image }) => {

    return (
        <CardContainer data-testid="root-info-card">
            <div>{title}</div>
            <div>{description}</div>
            <div>{theftDate}</div>
            <div>{reportedDate}</div>
            <div>{location}</div>
            <div>{image}</div>
        </CardContainer>
    );
};

export default InfoCard;
