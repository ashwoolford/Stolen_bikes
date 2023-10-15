import React from 'react';
import { render, screen } from '@testing-library/react';
import Spinner from '../Spinner';

describe('TheftInfo.tsx', () => {
    describe('Basic tests', () => {
        it('Should render the component', () => {
            render(<Spinner />);
            const containerElement = screen.getByTestId('loading-id');
            expect(containerElement).toBeInTheDocument();
        });
    });

    describe('Functional tests', () => {
        it('Should render the component', () => {
            render(<Spinner/>);

            expect(screen.getByText('Loading.....')).toBeInTheDocument();
        });
    });
});
