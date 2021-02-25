import axios from "axios";

const api = axios.create({
    baseURL: "https://nichoon.herokuapp.com"

})
export default api;