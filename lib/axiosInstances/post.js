import axios from "axios";

export const POSTSAXIOS = axios.create({
  baseURL: "https://travelbff.org/api/post",
});
