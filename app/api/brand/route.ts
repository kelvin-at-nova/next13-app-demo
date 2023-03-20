import { Company } from "@/models/Company";
import { Message } from "@/models/Message";
import { NextResponse } from "next/server";

//hello route is just going to return a {message: string} object with time
export async function GET(request: Request) {
  return NextResponse.json({
    name: "Technologent Pty Ltd",
    acn: "345234534",
    image: "https://robohash.org/345234534",
  } as Company);
}
