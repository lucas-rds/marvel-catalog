import { AxiosInstance } from "axios";

import Interceptor from "@/models/Interceptor";

export function applyInterceptors(
  axiosInstance: AxiosInstance,
  interceptors: Interceptor[]
): AxiosInstance {
  interceptors
    .filter((interceptor: Interceptor) => !!interceptor)
    .forEach((interceptor: Interceptor) => {
      if (interceptor.request)
        axiosInstance.interceptors.request.use(interceptor.request);
      if (interceptor.response)
        axiosInstance.interceptors.response.use(interceptor.response);
    });
  return axiosInstance;
}
