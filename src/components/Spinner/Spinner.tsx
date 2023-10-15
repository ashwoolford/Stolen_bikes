import React from 'react';
import { SpinnerContainer } from './Spinner.styles';

const Spinner: React.FC = () => {

    return (
        <SpinnerContainer data-testid="loading-id">
            Loading.....
        </SpinnerContainer>
    );
};

export default Spinner;
