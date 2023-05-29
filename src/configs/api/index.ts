import axios from "axios";

export const api = axios.create({
    baseURL: 'https://json-server-0wu5.onrender.com/'
});