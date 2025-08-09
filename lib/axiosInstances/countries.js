import axios from "axios";

export const AXIOSCOUNTRY = axios.create({
  baseURL: "https://travelbff.org/api/country",
});
