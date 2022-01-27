import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:80/',
    timeout: 5000,
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
//aagit su

    export default axiosInstance;