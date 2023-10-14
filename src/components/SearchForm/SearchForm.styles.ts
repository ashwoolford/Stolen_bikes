import styled from 'styled-components';
import { Input } from '../../globalStyles';
import DatePicker from '../DatePicker/DatePicker';

export const SearchFormContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
`;
export const CaseInput = styled(Input)`
    margin: 0 12px 0 12px;
`;
export const FromDate = styled(DatePicker)`
    margin: 0 12px 0 12px;
`;
export const ToDate = styled(DatePicker)`
    margin: 0 12px 0 12px;
    border: 1px solid red;
`;
export const SearchButton = styled.button`
    margin: 0 12px 0 12px;
    align-items: center;
    background-clip: padding-box;
    background-color: #008080;
    border: 1px solid transparent;
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-size: 0.8rem;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    padding: 12px 20px;
    position: relative;
    text-decoration: none;
    width: auto;
`;


