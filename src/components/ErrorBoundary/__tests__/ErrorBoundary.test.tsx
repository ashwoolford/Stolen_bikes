import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../ErrorBoundary';

describe('ErrorBoundary.tsx', () => {
    describe('Basic tests', () => {
        it('Should render the component', () => {
            render(<ErrorBoundary />);
            const containerElement = screen.getByTestId('error-boundary-continer');
            expect(containerElement).toBeInTheDocument();
        });
    });

    describe('Functional tests', () => {
        it('Should render the component', () => {
            render(<ErrorBoundary/>);

            expect(screen.getByText('Whoops something went wrong....')).toBeInTheDocument();
        });
    });
});
