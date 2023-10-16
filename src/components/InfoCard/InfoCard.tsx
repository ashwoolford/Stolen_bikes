import React from 'react';

import {
    CardContainer, 
    Title, 
    Description,
    TheftDateAndLocation,
    CardImage, 
    CardTexts
} from './InfoCard.styles';
import { IMG_PLACE_HOLDER } from '../../constants/appConstants';

type Props = {
    id: string;
    title: string,
    description: string,
    theftDate: string,
    location: string,
    image?: string | undefined
};

const InfoCard: React.FC<Props> = ({ id, title, description, theftDate, location, image }) => {

    return (
        <CardContainer data-testid="root-info-card">
            <CardImage src={image ? image : IMG_PLACE_HOLDER}/>
            <CardTexts>
                <Title to={`details/${id}`}>{title}</Title>
                <Description>{description}</Description>
                <TheftDateAndLocation>{`${theftDate} - ${location}`}</TheftDateAndLocation>
            </CardTexts>
        </CardContainer>
    );
};

export default InfoCard;
