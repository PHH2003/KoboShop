import axios from "axios";

export const confisAxios = axios.create({
    baseURL: "http://127.0.0.1:8081/api/v1"
})