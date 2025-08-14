"use server";

import { Axios } from "@/utils/axios";
import { cookies } from "next/headers";

export const cookieToken = async (token) => {
  console.log(token);
  try {
    const cookieStore = await cookies();

    cookieStore.set({
      name: "token",
      value: token,
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
    });
    return true;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const regiserUser = async (initData) => {
  try {
    const res = await Axios.post("/user/register", {
      initData,
    });
    console.log("🚀 ~ regiserUser ~ res:", res.data);
    return res.data.data.token;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const getToken = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");
    return token;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
