import React from 'react';
import Spinner from '../Spinner/Spinner';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { CountContainer } from './Count.styles';

type Props = {
    isFetching: any,
    error: any,
    count: number
};

const Count: React.FC<Props> = ({ isFetching, error, count }) => {

    if (isFetching) return <Spinner />;
    if (error) return <ErrorBoundary />;

    return (
        <CountContainer><b>Total: </b>{count}</CountContainer>
    );
};

export default Count;
