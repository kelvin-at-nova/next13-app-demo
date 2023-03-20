import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Message } from "@/models/Message";

//hello route is just going to return a {message: string} object with time
export const helloApi = createApi({
  refetchOnReconnect: true,
  refetchOnFocus: true,
  reducerPath: "helloApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["hello"],
  endpoints: (builder) => ({
    hello: builder.query<Message, void>({
      query: () => `/hello`,
      providesTags: ["hello"],
    }),
  }),
});

export const { useHelloQuery } = helloApi;
