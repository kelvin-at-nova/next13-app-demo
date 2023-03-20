"use client";
/*
CSR components are for client level page generation.
They can do client level data manipulation.
They are rendered on the client side. So not good for SEO.
Use case: now playing, search, etc.
*/

import SearchInputCsr from "@/components/SearchInput";
import UserList from "@/components/UserList";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { useQuery } from "@/store/QueryApi";
import HelloTime from "@/components/HelloTime";

export default function CsrContent() {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.query.search);
  const { data, isLoading, isError, error } = useQuery({ page: 1, limit: 10, q: search });
  return (
    <div>
      <HelloTime />
      <SearchInputCsr /> {/* only CSR components can do client level data manipulation */}
      {data ? (
        <UserList users={data} />
      ) : isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>An Error has occured {error.toString()}</div>
      ) : null}
    </div>
  );
}
