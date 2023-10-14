import React from 'react';
import {
    CardContainer, 
    Title, 
    Description,
    TheftDateAndLocation,
    CardImage, 
    CardTexts
} from './InfoCard.styles';

type Props = {
    title: string,
    description: string,
    theftDate: string,
    location: string,
    image?: string | undefined
};

const IMG_PLACE_HOLDER = 'https://placehold.co/350x250?text=Image+Not+Found';
const InfoCard: React.FC<Props> = ({ title, description, theftDate, location, image }) => {

    return (
        <CardContainer data-testid="root-info-card">
            <CardImage src={image ? image : IMG_PLACE_HOLDER}/>
            <CardTexts>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <TheftDateAndLocation>{`${theftDate} - ${location}`}</TheftDateAndLocation>
            </CardTexts>
        </CardContainer>
    );
};

export default InfoCard;
