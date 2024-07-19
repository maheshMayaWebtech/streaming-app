import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://dummy.restapiexample.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
