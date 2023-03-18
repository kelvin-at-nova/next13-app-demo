import data from "@/users.json";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = parseInt(searchParams.get("limit") ?? "10"); // default 10 per page
  const results = data.results;
  const paged = results.slice((page - 1) * limit, page * limit);
  return NextResponse.json({ results: paged, total: results.length });
}
