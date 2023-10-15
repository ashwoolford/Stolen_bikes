import {
    useQuery
} from '@tanstack/react-query';
import API from '../services/API';
//import { transformLiveStatusData } from "../services/CarParkService";

const api = new API();

const useFetchCount = (queryParams: any) => {
    //Utils function query builder
    const query = queryParams.query ? `&query=${queryParams.query}` : '';
    const from = queryParams.from ? `&stolen_after=${queryParams.from}` : '';
    const to = queryParams.to ? `&stolen_before=${queryParams.to}` : '';

    const url = `/bikes_search/count?proximity=Munich${query}${from}${to}`;

    return useQuery(
        {
            queryKey: ['count-bike-data'],
            queryFn: () => api.get(url).then(({ data }) => {
                // const transformedData = transformLiveStatusData(data);
                // return transformedData;
                return data.proximity;
            })
        }
    );
};

export default useFetchCount;
