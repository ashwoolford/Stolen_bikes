import React from 'react';
import { render, screen } from '@testing-library/react';
import Empty from '../Empty';

describe('Empty.tsx', () => {
    describe('Basic tests', () => {
        it('Should render the component', () => {
            render(<Empty />);
            const containerElement = screen.getByTestId('root-empty-container');
            expect(containerElement).toBeInTheDocument();
        });
    });
});
