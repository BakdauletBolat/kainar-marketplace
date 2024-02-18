import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'http://213.171.4.132:8000',
    timeout: 10000
});

export default axiosInstance;