import axios from 'axios';

export const AXIOS = axios.create({
    baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers'
});
