import { Message } from "@/models/Message";
import { NextResponse } from "next/server";

//hello route is just going to return a {message: string} object with time
export async function GET(request: Request) {
  return NextResponse.json({ message: new Date().toLocaleTimeString() + " (API)" } as Message);
}
