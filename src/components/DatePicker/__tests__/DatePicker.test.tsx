import React from 'react';
import { render, screen } from '@testing-library/react';
import DatePicker from '../DatePicker';

describe('DatePicker.tsx', () => {
    describe('Basic tests', () => {
        it('Should render the component', () => {
            render(<DatePicker placeholder="foo"/>);
            const containerElement = screen.getByPlaceholderText('foo');
            expect(containerElement).toBeInTheDocument();
        });
    });
});
