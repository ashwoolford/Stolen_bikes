import React from 'react';
import { render, screen } from '@testing-library/react';
import Container from './Container';

describe('Container.tsx', () => {
    describe('Basic tests', () => {
        it('Should render the component', () => {
            render(<Container />);
            const containerElement = screen.getByTestId('root-container');
            expect(containerElement).toBeInTheDocument();
        });
    });

    describe('Functional tests', () => {
        it('Should render the component', () => {
            render(
                <Container>
                    <div data-testid="container-children">Foo</div>
                </Container>);
            const containerElement = screen.getByTestId('root-container');
            expect(containerElement).toBeInTheDocument();
            expect(containerElement).toHaveTextContent('Foo');
        });
    });
});
