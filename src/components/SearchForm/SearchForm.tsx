import React, { useState } from 'react';
import { CaseInput, FromDate, ToDate, SearchFormContainer, SearchButton } from './SearchForm.styles';

type Props = {
    caseText: string,
    from?: Date | undefined,
    to?: Date | undefined,
    onSubmit: Function
}
const SearchForm: React.FC<Props> = ({caseText, from, to, onSubmit }) => {
    const [fromDate, setFromDate] = useState(from);
    const [toDate, setToDate] = useState(to);
    const [query, setQuery] = useState(caseText);

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
                value={query}
                placeholder="Case title"
                onChange={handleQueryChange}
            />

            <FromDate placeholder={'From'}
                selected={fromDate}
                maxDate={new Date()}
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
