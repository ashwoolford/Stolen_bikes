import React from 'react';
import { HeaderContainer, Title, SubTitle } from './Header.styles';

const Header: React.FC = () => {

    return (
        <HeaderContainer data-testid="header-container">
            <Title>Police Department of Munich</Title>
            <SubTitle>Stolen Bikes</SubTitle>
        </HeaderContainer>
    );
};

export default Header;
