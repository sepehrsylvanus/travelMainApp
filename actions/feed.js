"use server";

import { AXIOS } from "@/lib/axiosInstances/user";
import { fetchToken } from "./auth";
import { POSTSAXIOS } from "@/lib/axiosInstances/post";

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
export const getAllPosts = async (travel, offset = 0) => {
  const token = await fetchToken();

  try {
    const res = await POSTSAXIOS.get(`/?offset=${offset}&travel=${travel}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("🚀 ~ getAllPosts ~ res:", res.data.data);
    return res.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
