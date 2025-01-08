import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://travel-main-app.vercel.app/api",
});
