import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./Store";
import { QueryState } from "@/models/User";

//what is the relationship between the cache in usersSlice and the one in UsersApiSlice?
//this slice is for preloading cache#1 from server side
//the api slice is for fetching cache#2 from client side
//where cache1 and cache#2 are separated.
//cache#1 is global data init
//cache#2 is global state update
const initialState: QueryState = {
  search: undefined,
  page: 1,
  limit: 10,
};
const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setList(state, action: PayloadAction<QueryState>) {
      state.page = action.payload.page;
      state.limit = action.payload.limit;
      state.search = undefined;
    },
    setSearch(state, action: PayloadAction<QueryState>) {
      state.page = action.payload.page;
      state.limit = action.payload.limit;
      state.search = action.payload.search;
    },
  },
});

export const getQuery = (state: RootState) => ({
  page: state.query.page,
  limit: state.query.limit,
  search: state.query.search,
});
export const { setList, setSearch } = querySlice.actions;
export default querySlice;
