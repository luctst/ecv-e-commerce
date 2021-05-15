import axios from 'axios';

const http = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : process.env.REACT_APP_API_URL_PROD,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

http.interceptors.request.use(function (config) {
    if (localStorage.getItem('accessToken')) {
        config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    }

    return config;
});

http.interceptors.response.use(function (res) {
    if (res.data.accessToken) {
        localStorage.setItem('accessToken', res.data.accessToken);
    }

    return res;
}, function (resError) {
    if (resError && resError.response && resError.response.data && resError.response.data.accessToken) {
        localStorage.setItem('accessToken', resError.response.data.accessToken);
    }

    return Promise.reject(resError);
});

export default http;