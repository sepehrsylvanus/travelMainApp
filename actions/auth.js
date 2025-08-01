"use server";

import { AXIOS } from "@/lib/axiosInstances/user";
import { cookies } from "next/headers";

export const getToken = async (initData) => {
  const cookieStore = await cookies();
  console.log("🚀 ~ getToken ~ initData:", initData);
  try {
    const res = await AXIOS.post("/register", { initData });
    const token = res.data.data.token;
    cookieStore.set("token", token);
  } catch (error) {
    console.log("🚀 ~ getToken ~ error:", error);
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const fetchToken = async () => {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("token").value;
    return token;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
