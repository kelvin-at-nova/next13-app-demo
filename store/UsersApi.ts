import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { UsersState } from "@/models/User";
import { RootState } from "./Store";

type ListParams = { page: number; limit: number };
type SearchParams = { q: string | undefined } & ListParams;

export const usersApi = createApi({
  reducerPath: "csrUsers",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["list", "search"],
  endpoints: (builder) => ({
    list: builder.query<UsersState, ListParams>({
      query: ({ page = 1, limit = 10 }) => `list?page=${page}&limit=${limit}`,
      providesTags: ["list"],
    }),
    search: builder.query<UsersState, SearchParams>({
      query: ({ q = "", page = 1, limit = 10 }) =>
        `/search?search=${q}&page=${page}&limit=${limit}`,
      providesTags: (result, error, search) => [{ type: "search", search }],
    }),
  }),
});

export const listQuery = (params: ListParams) => (state: RootState) =>
  state.csrUsers.queries[`list({page:${params.page}}, limit:${params.limit})`]?.data as UsersState;
export const searchQuery = (params: SearchParams) => (state: RootState) =>
  state.csrUsers.queries[
    `search({q:"${params.q ?? ""}", page:${params.page}, limit:${params.limit}})`
  ]?.data as UsersState;
