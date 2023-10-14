import React, { useState } from 'react';
import { CaseInput, FromDate, ToDate, SearchFormContainer, SearchButton } from './SearchForm.styles';

const SearchForm: React.FC = () => {
    const [fromDate, setFromDate] = useState();
    const [toDate, setToDate] = useState();

    const handleFromDateChange = (date: any) => {
        setFromDate(date);
    };

    const handleToDateChange = (date: any) => {
        setToDate(date);
    };

    return (
        <SearchFormContainer>
            <CaseInput
                placeholder="Case title"
            />

            <FromDate placeholder={'From'}
                selected={fromDate}
                onChange={handleFromDateChange} />

            <ToDate placeholder={'To'}
                selected={toDate}
                maxDate={new Date()}
                onChange={handleToDateChange} />

            <SearchButton>Search</SearchButton>
            
        </SearchFormContainer>
    );
};

export default SearchForm;
