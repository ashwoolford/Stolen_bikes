import React from 'react';
import { render, screen } from '@testing-library/react';
import TheftInfo from '../TheftInfo';

describe('TheftInfo.tsx', () => {
    describe('Basic tests', () => {
        it('Should render the component', () => {
            render(
                <TheftInfo
                    title=""
                    description=""
                    theftDate=""
                    location=""
                />);
            const containerElement = screen.getByTestId('theft-info');
            expect(containerElement).toBeInTheDocument();
        });
    });

    describe('Functional tests', () => {
        it('Should render the component', () => {
            const mockProps = {
                title: 'test-title',
                description: 'test-description',
                theftDate: 'test-date',
                location: 'test-location',
                year: 2020,
                coordinates: [1,2]
            };
            render(
                <TheftInfo
                    {...mockProps}
                />);

            expect(screen.getByText(mockProps.title)).toHaveTextContent(mockProps.title);
            expect(screen.getByText(mockProps.description)).toHaveTextContent(mockProps.description);
            expect(screen.getByText(mockProps.theftDate)).toHaveTextContent(mockProps.theftDate);
            expect(screen.getByText(mockProps.location)).toHaveTextContent(mockProps.location);
            expect(screen.getByText(mockProps.year)).toHaveTextContent(mockProps.year.toString());
        });
    });
});
