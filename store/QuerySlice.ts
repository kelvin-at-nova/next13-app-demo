import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./Store";
import { QueryState } from "@/models/User";

const initialState: QueryState = {
  search: undefined,
  page: 1,
  limit: 10,
};
const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
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
export const { setSearch } = querySlice.actions;
export default querySlice;
