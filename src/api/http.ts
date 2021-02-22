import axios from "axios";

const Http = axios.create({
    baseURL: '/api',
    timeout: 6000,
})


export default Http
