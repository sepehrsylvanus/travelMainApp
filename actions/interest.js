"use server";

import { Axios } from "@/utils/axios";

export const getInterest = async () => {
  try {
    const res = await Axios("/interest");
    console.log("🚀 ~ getInterest ~ res:", res.data.data);
    return res.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
