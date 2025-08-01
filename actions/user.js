"use server";

import { AXIOS } from "@/lib/axiosInstances/user";
import { fetchToken } from "./auth";

export const getUserProfile = async () => {
  try {
    const token = await fetchToken();
    const res = await AXIOS.get("/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
