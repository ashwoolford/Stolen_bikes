import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    },
    .date_picker.margin-lr {
        margin: 0 12px 0 12px;
    },
    .date_picker.input {
        border: none;
        border-radius: .25rem;
        background-color: #e6e6e6;
    },
    .pagination {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-bottom: 5rem;
        font-size: 1.2rem;
        gap: 5px;
    },
    .pagination .page-num {
        padding: 8px 15px;
        cursor: pointer;
        border-radius: 3px;
        font-weight: 400;
    },
    .pagination .active {
        background-color: #5AB1BB;
        color: #fff;
    }

`;

export const Input = styled.input`
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-radius: .25rem;
    background-color: #e6e6e6;
`;
