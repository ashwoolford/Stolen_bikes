import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
    display: flex;
    margin: 20px 15px;
    box-sizing: border-box;
    border: none;
    border-radius: .25rem;
    background-color: #e6e6e6;
    @media (max-width: 576px) {
        flex-direction: column;
    }
`;

export const CardImage = styled.img`
    height: 200px;
    width: 300px;
    flex: 30%;
    overflow: hidden;
    object-fit: cover;
    @media (max-width: 576px) {
        width: auto;
    }
`;
export const CardTexts = styled.div`
    display: flex;
    flex: 70%;
    flex-direction: column;
`;
export const Title = styled(Link)`
    font-size: 1.6rem;
    font-weight: 500;  
    margin: 10px;
    color: #000;
    text-transform: uppercase;
`;
export const Description = styled.span`
    font-size: 1rem;
    font-weight: 500;  
    margin: 10px;
`;
export const TheftDateAndLocation = styled.span`
    font-size: 1rem;
    font-weight: 550;  
    margin: 10px;
`;

