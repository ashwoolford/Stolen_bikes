import React from 'react';
import { CountContainer } from './Count.styles';

type Props = {
    count: number
};

const Count: React.FC<Props> = ({ count }) => {
    return (
        <CountContainer><b>Total: </b>{count}</CountContainer>
    );
};

export default Count;
