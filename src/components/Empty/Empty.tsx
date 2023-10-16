import React from 'react';
import EmptyStyled from './Empty.styles';
import { NO_RESULT } from '../../constants/appConstants';

const Empty: React.FC = () => {

    return (
        <EmptyStyled data-testid="root-empty-container">
            {NO_RESULT}
        </EmptyStyled>
    );
};

export default Empty;
