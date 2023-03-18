import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./Store";
import { UsersState } from "@/models/User";

const initialState: UsersState = {
  page: 1,
  total: 0,
  results: [],
};

//what is the relationship between the cache in usersSlice and the one in UsersApiSlice?
//this slice is for preloading cache#1 from server side
//the api slice is for fetching cache#2 from client side
//where cache1 and cache#2 are separated.
//cache#1 is global data init
//cache#2 is global state update
const usersSlice = createSlice({
  name: "ssrUsers",
  initialState,
  reducers: {
    setResults(state, action: PayloadAction<UsersState>) {
      state.page = action.payload.page;
      state.total = action.payload.total;
      state.results = action.payload.results;
    },
    setSearch(state, action: PayloadAction<string | undefined>) {
      state.search = action.payload;
    },
  },
});

export const getSearch = (state: RootState) => state.ssrUsers.search;
export const getResults = (state: RootState) => ({
  results: state.ssrUsers.results,
  total: state.ssrUsers.total,
  page: state.ssrUsers.page,
});
export const { setResults, setSearch } = usersSlice.actions;
export default usersSlice;
