import React, { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import SearchForm from '../components/SearchForm/SearchForm';
import Pagination from '../components/Pagination/Pagination';
import Spinner from '../components/Spinner/Spinner';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import StolenBikesList from '../components/StolenBikesList/StolenBikesList';

import useQueryParams from '../hooks/useQueryParams';
import useFetchStolenBikes from '../hooks/useFetchStolenBikes';
import { serializeFormQuery, unixToDate, dateToUnix } from '../utils/utils';

const Index: React.FC = () => {
    const [, setSearchParams] = useSearchParams();
    const location = useLocation();


    const queryParams = useQueryParams();
    const queryParamsObj = {
        query: queryParams.get('query') || '',
        from: queryParams.get('from'),
        to: queryParams.get('to'),
        page: queryParams.get('page') || '1'
    };

    const { isFetching, refetch, error, data } = useFetchStolenBikes(queryParamsObj);

    useEffect(() => {
        refetch();
    }, [location, refetch]);

    const onSubmit = (params: any) => {
        const serialized = serializeFormQuery({
            ...queryParamsObj,
            ...params
        });

        if(serialized.from) serialized.from = dateToUnix(serialized.from);
        if(serialized.to) serialized.to = dateToUnix(serialized.to);

        setSearchParams(serialized);
    };

    const handlePageChange = (page: any) => {
        setSearchParams(serializeFormQuery({ ...queryParamsObj, page }));
    };

    if (isFetching) return <Spinner />;
    if (error) return <ErrorBoundary />;

    return (
        <div>
            <SearchForm
                caseText={queryParamsObj.query}
                from={queryParamsObj.from ? unixToDate(parseInt(queryParamsObj.from)) : undefined}
                to={queryParamsObj.to ? unixToDate(parseInt(queryParamsObj.to)) : undefined}
                onSubmit={onSubmit} />
            <StolenBikesList bikes={data} />
            <Pagination
                forcePage={parseInt(queryParamsObj.page)}
                pageCount={10}
                handlePageChange={handlePageChange}
            />
        </div>
    );
};

export default Index;
