"use server";

import { Axios } from "@/utils/axios";
import { fetchToken } from "./auth";

export const getInterest = async (show_home = false) => {
  const token = await fetchToken();
  try {
    const res = await Axios(`/interest?show_home=${show_home}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("🚀 ~ getInterest ~ res:", res.data.data);
    return res.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
