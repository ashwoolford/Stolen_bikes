import React, { useState } from 'react';
import { CaseInput, FromDate, ToDate, SearchFormContainer, SearchButton } from './SearchForm.styles';

type Props = {
    onSubmit: Function
}
const SearchForm: React.FC<Props> = ({onSubmit }) => {
    const [fromDate, setFromDate] = useState();
    const [toDate, setToDate] = useState();
    const [query, setQuery] = useState();

    const handleQueryChange = (event: any) => {
        setQuery(event.target.value);
    };

    const handleFromDateChange = (date: any) => {
        setFromDate(date);
    };

    const handleToDateChange = (date: any) => {
        setToDate(date);
    };

    const handleOnSubmit = () => {
        onSubmit({
            from: fromDate,
            to: toDate,
            query
        });
    };

    return (
        <SearchFormContainer>
            <CaseInput
                placeholder="Case title"
                onChange={handleQueryChange}
            />

            <FromDate placeholder={'From'}
                selected={fromDate}
                onChange={handleFromDateChange} />

            <ToDate placeholder={'To'}
                selected={toDate}
                maxDate={new Date()}
                onChange={handleToDateChange} />

            <SearchButton onClick={handleOnSubmit}>Search</SearchButton>
            
        </SearchFormContainer>
    );
};

export default SearchForm;
