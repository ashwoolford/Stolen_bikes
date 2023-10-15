import React from 'react';
import { 
    TopInfoContainer, 
    BottomInfoContainer, 
    Heading,
    Title,
    TheftDate,
    Description,
    Location,
    Year
 } from './TheftInfo.styles';
type Props = {
    title: string,
    description: string,
    theftDate: string,
    location: string,
    year?: number;
};

const TheftInfo: React.FC<Props> = ({ title, description, theftDate, location, year }) => {

    return (
        <div data-testid="theft-info">
            <TopInfoContainer>
                <Heading>STOLEN</Heading>
                <Title>{title}</Title>
                <TheftDate>{theftDate}</TheftDate>
            </TopInfoContainer>
            <BottomInfoContainer>
                <Description><b>Description: </b>{description}</Description>
                <Location><b>Location: </b>{location}</Location>
                <Year><b>Year: </b>{year}</Year>
            </BottomInfoContainer>
        </div>
    );
};

export default TheftInfo;
