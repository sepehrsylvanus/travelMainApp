"use server";

import { AXIOS } from "@/lib/axiosInstances/user";
import { fetchToken } from "./auth";

export const getUserPosts = async () => {
  const token = await fetchToken();
  try {
    const res = await AXIOS.get("/post", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("🚀 ~ getUserPosts ~ res:", res.data.data);
    return res.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
