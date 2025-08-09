"use server";

import { AXIOSTRAVEL } from "@/lib/axiosInstances/travel";
import { fetchToken } from "./auth";

export const getTravels = async (category, offset) => {
  const token = await fetchToken();

  try {
    const res = await AXIOSTRAVEL.get(
      `?category=${category}&offset=${offset}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
