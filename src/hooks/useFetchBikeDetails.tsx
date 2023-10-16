import {
    useQuery
} from '@tanstack/react-query';
import API from '../services/API';

const api = new API();

const useFetchBikeDetails = (id: string) => {
    const url = `bikes/${id}`;

    return useQuery(
        {
            queryKey: ['stolen-bike-details'],
            queryFn: () => api.get(url).then(({ data }) => {
                return data.bike;
            }),
            refetchOnWindowFocus: false
        }
    );
};

export default useFetchBikeDetails;
