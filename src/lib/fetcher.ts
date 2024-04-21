import { AxiosResponse } from "axios";
import instance from "../services";



export const fetcher = async <T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" = "GET" ,
  data?: any
): Promise<AxiosResponse<T>> => {
  const {axiosInstance} = instance;
  try {
    const response = await axiosInstance.request<T>({
      url,
      method,
      data,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const formFetcher = async <T>(
  url: string,
  method: "POST" | "PUT",
  data?: any
): Promise<AxiosResponse<T>> => {
  const {formAxiosInstance} = instance;
  try {
    const response = await formAxiosInstance.request<T>({
      url,
      method,
      data,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
