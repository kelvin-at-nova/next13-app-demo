"use client";

import { UsersState } from "@/models/User";
import { store } from "@/store/Store";
import { setResults } from "@/store/UsersSlice";
import { useRef } from "react";
interface Props {
  users: UsersState;
}

//this is a client side behavior, it takes the serialized users
//just like pageProps and sets the client side store
const CsrUsersPreloaderAsTag = ({ users }: Props) => {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setResults(users)); //set client side store
    loaded.current = true;
  }
  return <></>;
};

export default CsrUsersPreloaderAsTag;
