import axios from "axios";

export const api = axios.create({
    baseURL: 'http://45.184.5.225:3333'
});