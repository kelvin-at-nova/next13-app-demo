import data from "@/users.json";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const strSearch = searchParams.get("search");
  const page = parseInt(searchParams.get("page") ?? "1");
  const limit = parseInt(searchParams.get("limit") ?? "10"); // default 10 per page
  const results = data.results;
  const filtered = strSearch
    ? results.filter(
        (u) =>
          u.name.title.toLowerCase().includes(strSearch.toLowerCase()) ||
          u.name.first.toLowerCase().includes(strSearch.toLowerCase()) ||
          u.name.last.toLowerCase().includes(strSearch.toLowerCase()) ||
          (u.name.title + " " + u.name.first + " " + u.name.last)
            .toLowerCase()
            .includes(strSearch.toLowerCase())
      )
    : results;
  const paged = filtered.slice((page - 1) * limit, page * limit);
  return NextResponse.json({ results: paged, total: filtered.length });
}
