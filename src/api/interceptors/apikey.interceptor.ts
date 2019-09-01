import { AxiosRequestConfig } from "axios";
import Interceptor from "@/models/Interceptor";

const request = (requestConfig: AxiosRequestConfig): AxiosRequestConfig => {
  return {
    ...requestConfig,
    params: {
      ...requestConfig.params,
      apikey: process.env.API_KEY
    }
  };
};

export const apiKeyInterceptor = new Interceptor({ request });
