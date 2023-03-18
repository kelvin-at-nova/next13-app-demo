"use client";

import UserRow from "./UserRow";
import { User, UsersState } from "@/models/User";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { getSearch } from "@/store/UsersSlice";
import { listQuery, searchQuery, usersApi } from "@/store/UsersApi";
import { useEffect } from "react";

interface Props {
  users: UsersState;
}
//use client means list will generate on the client side
const UserListCsr = ({ users }: Props) => {
  const page = 1;
  const limit = 10; // page is always 1, feature not implemented
  const dispatch = useAppDispatch();
  const search = useAppSelector(getSearch);
  const { results, total } = users;
  const users2 = useAppSelector(listQuery({ page: 1, limit: 10 }));
  const users3 = useAppSelector(searchQuery({ page: 1, limit: 10, q: search }));
  useEffect(() => {
    if (search) {
      dispatch(usersApi.endpoints.search.initiate());
    } else {
    }
  }, [dispatch, search]);
  return (
    <>
      <div style={{ display: "grid", gap: "10px", gridTemplateColumns: "16px auto 1fr" }}>
        {results.map((u: User) => (
          <UserRow u={u} key={u.id} />
        ))}
      </div>
      <div style={{ margin: "40px auto" }}>
        page {page} of {Math.floor(total / limit)} - {total} results
      </div>
    </>
  );
};
export default UserListCsr;
