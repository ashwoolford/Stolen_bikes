import {
    useQuery
} from '@tanstack/react-query';
import API from '../services/API';

const api = new API();

const useFetchStolenBikes = (queryParams: any) => {
    //Utils function query builder
    const page = queryParams.page ? `&page=${queryParams.page}` : '';
    const query = queryParams.query ? `&query=${queryParams.query}` : '';
    const from = queryParams.from ? `&stolen_after=${queryParams.from}` : '';
    const to = queryParams.to ? `&stolen_before=${queryParams.to}` : '';

    const url = `/bikes_search/stolen?proximity=Munich&per_page=10${page}${query}${from}${to}`;

    return useQuery(
        {
            queryKey: ['stolen-bike-data'],
            queryFn: () => api.get(url).then(({ data }) => {
                return data.bikes;
            }),
            refetchOnWindowFocus: false,
            enabled: false
        }
    );
};

export default useFetchStolenBikes;
