import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResultsState } from "@/models/User";

type QueryParams = { page: number; limit: number; q: string | undefined };

export const queryApi = createApi({
  refetchOnReconnect: true,
  refetchOnFocus: true,
  reducerPath: "queryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["query"],
  endpoints: (builder) => ({
    query: builder.query<ResultsState, QueryParams>({
      query: ({ q = "", page = 1, limit = 10 }) => `/query?search=${q}&page=${page}&limit=${limit}`,
      providesTags: (result, error, query) => [{ type: "query", query }],
    }),
  }),
});

export const { useQueryQuery: useQuery } = queryApi;
