import axios from 'axios';
//import { getEnvVariables } from '../utils/getEnvVariables';

//const { VITE_API_URL } = getEnvVariables();

//const BASE_URL = 'https://api.dataplushn.com/api';
//const BASE_URL = 'http://back.dataplushn.com/api';
//const BASE_URL = 'https://poswebbackend-production.up.railway.app/api';
const BASE_URL = 'http://localhost:1337/api';

export default axios.create({
    baseURL: BASE_URL, //'https://poswebbackend-dataplus.up.railway.app/api/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL, //'https://poswebbackend-dataplus.up.railway.app/api/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
});

axiosPrivate.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwt')
        ? localStorage.getItem('jwt')
        : null 
    
    config.headers['Authorization'] = `jwt=${token}`

    return config 
})

