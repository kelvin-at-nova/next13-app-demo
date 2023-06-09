import { ResultsState } from "@/models/User";

export async function getUsers() {
  const response = await fetch("http://localhost:3000/api/query", {
    method: "GET",
    // headers: {
    //   Accept: "application/json",
    //   Authorization: `Bearer ${process.env.SOME_API_KEY_IF_NEEDED}`,
    //   "Content-Type": "application/json; charset=utf-8",
    // },
  });
  if (!response.ok) throw new Error("Failed to fetch data");
  return (await response.json()) as ResultsState;
}
