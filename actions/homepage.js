"use server";

import { AXIOSCOUNTRY } from "@/lib/axiosInstances/countries";

export const getContinents = async () => {
  try {
    const res = await AXIOSCOUNTRY.get("/");
    return res.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
