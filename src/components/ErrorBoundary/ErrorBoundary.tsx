import React from 'react';
import { ErrorBoundaryContainer } from './ErrorBoundary.styles';

const ErrorBoundary: React.FC = () => {

    return (
        <ErrorBoundaryContainer data-testid="error-boundary-continer">
            Whoops something went wrong....
        </ErrorBoundaryContainer>
    );
};

export default ErrorBoundary;
