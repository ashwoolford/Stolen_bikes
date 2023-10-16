import React, { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import SearchForm from '../components/SearchForm/SearchForm';
import Pagination from '../components/Pagination/Pagination';
import Spinner from '../components/Spinner/Spinner';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import StolenBikesList from '../components/StolenBikesList/StolenBikesList';
import Count from '../components/Count/Count';

import useQueryParams from '../hooks/useQueryParams';
import useFetchStolenBikes from '../hooks/useFetchStolenBikes';
import useFetchCount from '../hooks/useFetchCount';
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

    const { 
        isLoading: isLoadingStolenBikes, 
        isFetching: isFetchingStolenBikes, 
        refetch: refetchStolenBikes, 
        error: errorStolenBikes, 
        data: stolenBikesData 
    } = useFetchStolenBikes(queryParamsObj);

    const {
        isLoading: isLoadingCount,
        isFetching: isFetchingCount,
        refetch: refetchCount,
        error: errorCount,
        data: countData
    } = useFetchCount(queryParamsObj);

    useEffect(() => {
        refetchStolenBikes();
        refetchCount();
    }, [location, refetchStolenBikes, refetchCount]);

    const onSubmit = (params: any) => {
        const serialized = serializeFormQuery({
            ...queryParamsObj,
            ...params,
            page: 1
        });
        
        serialized.from &&= dateToUnix(serialized.from);
        serialized.to &&= dateToUnix(serialized.to);

        setSearchParams(serialized);
    };

    const handlePageChange = (page: number) => {
        setSearchParams(serializeFormQuery({ ...queryParamsObj, page }));
    };

    if (isLoadingStolenBikes || isLoadingCount || isFetchingStolenBikes || isFetchingCount) return <Spinner />;
    if (errorStolenBikes || errorCount) return <ErrorBoundary />;

    return (
        <div>
            <SearchForm
                caseText={queryParamsObj.query}
                from={queryParamsObj.from ? unixToDate(parseInt(queryParamsObj.from)) : undefined}
                to={queryParamsObj.to ? unixToDate(parseInt(queryParamsObj.to)) : undefined}
                onSubmit={onSubmit} />
            <Count
                count={countData}
            />
            <StolenBikesList bikes={stolenBikesData} />
            <Pagination
                forcePage={parseInt(queryParamsObj.page)}
                pageCount={Math.ceil(countData/10)}
                handlePageChange={handlePageChange}
            />
        </div>
    );
};

export default Index;
