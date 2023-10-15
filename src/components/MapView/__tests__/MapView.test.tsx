import React from 'react';
import { render, screen } from '@testing-library/react';
import MapView from '../MapView';

describe('TheftInfo.tsx', () => {
    describe('Basic tests', () => {
        it('Should render the component', () => {
            render(
                <MapView
                    coordinates={[0, 0]}
                />);
            const containerElement = screen.getByTestId('map-container');
            expect(containerElement).toBeInTheDocument();
        });

        it('Should not render the component', () => {
            render(
                <MapView
                    coordinates={undefined}
                />);
            const containerElement = screen.queryByTestId('map-container');
            expect(containerElement).not.toBeTruthy();
        });
    });
});
