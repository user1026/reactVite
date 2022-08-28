import axios from "axios";
import { Alert } from "antd";
const http = axios.create({
    baseURL: "http://localhost:9090",
    timeout: 100000,
});
http.interceptors.request((req) => {
    if (req.code !== 200) {
    }
});
export const getAction = (url = "", param = {}) => {
    return http.get(url, param);
};
