import axios from "axios";
import { baseUrl } from "./base";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 500000,
});

const formAxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 500000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.error("Error in Axios response:", error);
    if (error.response && error.response.status === 401) {
      try {
        const response = await axios.post(`${baseUrl}/refresh`, {
          refreshToken: localStorage.getItem("refreshToken"),
        });
        const newAccessToken = response.data.access_token;
        localStorage.setItem("userToken", newAccessToken);
        error.config.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance.request(error.config);
      } catch (refreshError) {
        console.error("Failed to refresh token:", refreshError);
        localStorage.removeItem("userToken");
        window.location.href = "/login";
      }
    }
    throw error;
  }
);

const axiosInstances = { axiosInstance, formAxiosInstance };

export default axiosInstances;
