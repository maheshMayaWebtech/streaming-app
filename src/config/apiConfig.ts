import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dummy.restapiexample.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
