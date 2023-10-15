import React, { useEffect } from 'react';
import SearchForm from '../components/SearchForm/SearchForm';
import InfoCard from '../components/InfoCard/InfoCard';
import Pagination from '../components/Pagination/Pagination';
import Spinner from '../components/Spinner/Spinner';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

import useQueryParams from '../hooks/useQueryParams';
import useFetchStolenBikes from '../hooks/useFetchStolenBikes';

const Index: React.FC = () => {
    const queryParams = useQueryParams();
    const query = queryParams.get('query');
    const from = queryParams.get('from');
    const to = queryParams.get('to');
    const page = queryParams.get('page');

    const { isLoading, refetch, error, data } = useFetchStolenBikes({query, from, to, page});


    console.log(data);

    useEffect(() => {
        console.log('Something has changed ', [query, from, to, page]);

    }, [query, from, to, page]);

    const onSubmit = (queryParams: object) => {
        console.log(queryParams);
    };

    const handlePageChange = (page: any) => {
        console.log(page);
    };

    if (isLoading) return <Spinner />;
    if (error) return <ErrorBoundary />;

    return (
        <div>
            <SearchForm onSubmit={onSubmit} />
            <InfoCard
                title="This is a Title"
                description="Test description"
                theftDate="2022-05-25"
                location="Munich, 81669, DE"
            />
            <Pagination
                initialPage={0}
                pageCount={10}
                handlePageChange={handlePageChange}
            />
        </div>
    );
};

export default Index;
