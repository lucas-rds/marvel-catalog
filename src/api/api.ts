import Axios, { AxiosInstance } from "axios";
import { applyInterceptors, apiKeyInterceptor } from "./interceptors";

export const axios = Axios.create({
  baseURL: process.env.MARVEL_BASE_URL
});
export const api: AxiosInstance = applyInterceptors(axios, [apiKeyInterceptor]);
