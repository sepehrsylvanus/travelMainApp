import { NextResponse } from "next/server";

export const POST = async (req) => {
  const data = req.json();
  console.log(data);
  return NextResponse.json({ success: true });
};
