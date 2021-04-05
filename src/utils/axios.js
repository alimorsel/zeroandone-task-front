import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'http://localhost:100/api/',
    timeout: 6000,
    headers: { 'Accept': 'application/json' }
});

export default axiosInstance;