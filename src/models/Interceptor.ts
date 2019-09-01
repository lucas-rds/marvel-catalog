import { AxiosRequestConfig, AxiosResponse } from "axios";

export type RequestInterceptor = (
  config: AxiosRequestConfig
) => AxiosRequestConfig;
export type ResponseInterceptor = (
  response: AxiosResponse
) => Promise<AxiosResponse>;

export default class Interceptor {
  request?: RequestInterceptor;
  response?: ResponseInterceptor;

  constructor(interceptor: Interceptor) {
    this.request = interceptor.request;
    this.response = interceptor.response;
  }
}
