import { createMockWorker } from "@/mocks/worker";
import axios from "axios";

const axiosInstance = axios.create({
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    await createMockWorker()
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance