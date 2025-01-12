import { getToken } from "@/actions/sessionActions";
import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://travelbff.org/api",
});
Axios.interceptors.request.use(
  async (config) => {
    // Retrieve the token
    const token = await getToken();

    if (token) {
      // Set the token in the Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle error
    return Promise.reject(error);
  }
);
