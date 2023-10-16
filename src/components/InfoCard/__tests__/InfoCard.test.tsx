import React from 'react';
import { render, screen } from '@testing-library/react';
import InfoCard from '../InfoCard';
import { BrowserRouter } from 'react-router-dom';

describe('InfoCard.tsx', () => {
    describe('Basic tests', () => {
        it('Should render the component', () => {
            render(
                <BrowserRouter>
                    <InfoCard
                        id="test-id"
                        title=""
                        description=""
                        theftDate=""
                        location=""
                    />
                </BrowserRouter>
            );
            const containerElement = screen.getByTestId('root-info-card');
            expect(containerElement).toBeInTheDocument();
        });
    });

    describe('Functional tests', () => {
        it('Should render the component', () => {
            const mockProps = {
                id: 'test-id',
                title: 'test-title',
                description: 'test-description',
                theftDate: 'test-date',
                location: 'test-location'
            };
            render(
                <BrowserRouter>
                    <InfoCard
                        {...mockProps}
                    />
                </BrowserRouter>
            );

            expect(screen.getByText(mockProps.title)).toHaveTextContent(mockProps.title);
            expect(screen.getByText(mockProps.description)).toHaveTextContent(mockProps.description);
            const theftDateLoc = `${mockProps.theftDate} - ${mockProps.location}`;
            expect(screen.getByText(theftDateLoc)).toHaveTextContent(theftDateLoc);
        });
    });
});
