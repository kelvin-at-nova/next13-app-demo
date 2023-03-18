import { UsersState } from "@/models/User";
import { store } from "@/store/Store";
import { setResults } from "@/store/UsersSlice";

export const ssrUsersPreloader = async (users: UsersState) => {
  store.dispatch(setResults(users)); //set server side store
  return store.getState().ssrUsers; //retrieve server side store data
};
