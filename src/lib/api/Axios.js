import axios from 'axios';
//import { getEnvVariables } from '../utils/getEnvVariables';

//const { VITE_API_URL } = getEnvVariables();

//const BASE_URL = 'https://api.dataplushn.com/';
const BASE_URL = 'http://localhost:1337/api';

export default axios.create({
    baseURL: BASE_URL, //'https://poswebbackend-dataplus.up.railway.app/api/',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL, //'https://poswebbackend-dataplus.up.railway.app/api/',
    headers: { 'Content-Type': 'application/json' },
    withCredentials: '*'
});