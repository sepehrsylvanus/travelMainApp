import axios from "axios";

export const AXIOSTRAVEL = axios.create({
  baseURL: "https://travelbff.org/api/travel",
});
