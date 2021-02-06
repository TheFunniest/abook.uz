import axios from 'axios'

const API = axios.create({
    baseURL: "http://185.74.5.132:3050/api/",
})

export default API;