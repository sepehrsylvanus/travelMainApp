import axios from "axios";

export const AXIOS = axios.create({
  baseURL: "https://travelbff.org/api/user",
});
