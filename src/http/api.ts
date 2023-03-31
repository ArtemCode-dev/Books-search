import axios from "axios";

const PORT = 3000

export const API_BASE_URL = "https://www.googleapis.com";
export const APP_BASE_URL = `http://localhost:${PORT}`;

const $api = axios.create({
    baseURL: API_BASE_URL,
    // withCredentials: true,
    headers: {
        common: {
            accept: 'application/json'
        }
    }
});

$api.interceptors.request.use(config => {
    config.params = {
        key: 'AIzaSyCdL-B4l2SmLYOoxRnC6D4FbefS05_7pR0',
        ...config.params,
    };
    return config;
});

export { $api };