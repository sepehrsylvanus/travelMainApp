"use server";

import { cookies } from "next/headers";

export const cookieToken = async (token: string) => {
  const cookieStore = await cookies();

  cookieStore.set({
    name: "token",
    value: token,
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
  });
  return true;
};
