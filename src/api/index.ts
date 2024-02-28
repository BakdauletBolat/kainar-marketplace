import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'http://94.198.219.2:8000',
    timeout: 10000
});

export default axiosInstance;