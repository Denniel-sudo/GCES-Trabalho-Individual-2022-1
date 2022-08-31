import axios from "axios";

export const BASE_API = axios.create({
    baseURL: "http://gces-library-back.herokuapp.com"
});