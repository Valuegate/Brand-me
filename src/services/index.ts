import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 500000,
});

const formAxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 500000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

axiosInstance.interceptors.request.use((request) => {
  const userToken = localStorage.getItem("userToken");

  if (userToken) {
    request.headers.Authorization = `Bearer ${userToken}`;
  } else {
    request.headers.Authorization = undefined;
  }

  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Error in Axios response:", error);
    throw error;
  }
);

formAxiosInstance.interceptors.request.use((request) => {
  const userToken = localStorage.getItem("userToken");

  if (userToken) {
    request.headers.Authorization = `Bearer ${userToken}`;
  } else {
    request.headers.Authorization = undefined;
  }

  return request;
});

formAxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Error in Axios response:", error);
    throw error;
  }
);

const axiosInstances = { axiosInstance, formAxiosInstance };

export default axiosInstances;