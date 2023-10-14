import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Container.tsx', () => {
    describe('Basic tests', () => {
        it('Should render the component', () => {
            render(<Header />);
            const containerElement = screen.getByTestId('header-container');
            expect(containerElement).toBeInTheDocument();
        });
    });

    describe('Functional tests', () => {
        it('Should have the correct texts', () => {
            render(<Header />);
            const titleText = screen.getByText('Police Department of Munich');
            expect(titleText).toBeInTheDocument();

            const subTitleText = screen.getByText('Stolen Bikes');
            expect(subTitleText).toBeInTheDocument();
        });
    });
});
