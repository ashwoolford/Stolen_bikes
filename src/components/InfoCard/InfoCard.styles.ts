import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    margin: 10px 15px;
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
    overflow: hidden;
    object-fit: cover;
    @media (max-width: 576px) {
        width: auto;
    }
`;
export const CardTexts = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Title = styled.a`
    font-size: 1.6rem;
    font-weight: 500;  
    margin: 10px;
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

