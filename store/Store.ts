import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./QuerySlice";
import { queryApi } from "./QueryApi";
import { helloApi } from "./HelloApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [usersSlice.name]: usersSlice.reducer,
    [queryApi.reducerPath]: queryApi.reducer,
    [helloApi.reducerPath]: helloApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(queryApi.middleware).concat(helloApi.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
