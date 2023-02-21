import axios from "axios";

axios.defaults.headers.post["Content-Type"]="application/json";
var mainAxios = axios.create({
    baseUrl: "http://localhost:5000/"
})

export {mainAxios};