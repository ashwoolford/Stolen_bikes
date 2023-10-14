import React from 'react';
import ContainerStyled from './Container.styles';

type Props = {
    children?: any; 
}
const Container: React.FC<Props> = ({ children }) => {

    return (
        <ContainerStyled data-testid="root-container">{ children }</ContainerStyled>
    );
};

export default Container;
