import axios from 'axios';
import { BASE_API_URL } from '../constants/appConstants';

export default class API {
    api;
    constructor(baseUrl?: string) {
        this.api = axios.create({
            baseURL: baseUrl || BASE_API_URL
        });

        this.api.interceptors.request.use((config: any) => {
            if (config.data) {
                config.data = JSON.stringify(config.data);
            }

            if (['put', 'post', 'patch'].includes(config.method)) {
                config.headers['content-type'] = 'application/json; charset=UTF-8';
            }

            return config;
        });

        // Add a response interceptor
        this.api.interceptors.response.use(
            response => {
                // Any status code 2xx cause this function to trigger
                return response;
            },
            error => {
                // Any status codes outside 2xx cause this function to trigger
                if (error.response && error.response.status === 422) {
                    let msg = ''; // process global error messages
                    error.response.data.errors.forEach((e: Error) => {
                        msg = `${msg + e.message}<br>`;
                    });
                    error.response.validationErrors = msg;
                }
                return Promise.reject(error);
            }
        );
    }

    isCancel(error: Error) {
        return axios.isCancel(error);
    }

    get(url: string, config = {}) {
        return this.api.get(url, config);
    }
}
