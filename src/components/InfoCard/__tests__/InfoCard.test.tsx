import React from 'react';
import { render, screen } from '@testing-library/react';
import InfoCard from '../InfoCard';

describe('InfoCard.tsx', () => {
    describe('Basic tests', () => {
        it('Should render the component', () => {
            render(
                <InfoCard
                    title=""
                    description=""
                    theftDate=""
                    location=""
                />);
            const containerElement = screen.getByTestId('root-info-card');
            expect(containerElement).toBeInTheDocument();
        });
    });

    describe('Functional tests', () => {
        it('Should render the component', () => {
            const mockProps = {
                title: 'test-title',
                description: 'test-description',
                theftDate: 'test-date',
                location: 'test-location'
            };
            render(
                <InfoCard
                    {...mockProps}
                />);

            expect(screen.getByText(mockProps.title)).toHaveTextContent(mockProps.title);
            expect(screen.getByText(mockProps.description)).toHaveTextContent(mockProps.description);
            const theftDateLoc = `${mockProps.theftDate} - ${mockProps.location}`;
            expect(screen.getByText(theftDateLoc)).toHaveTextContent(theftDateLoc);
        });
    });
});
