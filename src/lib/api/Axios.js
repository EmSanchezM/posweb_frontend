import axios from 'axios';
//import { getEnvVariables } from '../utils/getEnvVariables';

//const { VITE_API_URL } = getEnvVariables();

//const BASE_URL = 'http://api.dataplushn.com/api';
const BASE_URL = 'http://back.dataplushn.com/api';
//const BASE_URL = 'https://poswebbackend-production.up.railway.app/api';
//const BASE_URL = 'http://localhost:1338/api';

export default axios.create({
    baseURL: BASE_URL, //'https://poswebbackend-dataplus.up.railway.app/api/',
    headers: {
        'Content-Type': 'application/json'
            /* 'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE' */
    }
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL, //'https://poswebbackend-dataplus.up.railway.app/api/',
    headers: {
        'Content-Type': 'application/json'
            /* 'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE' */
    },
    withCredentials: '*'
});