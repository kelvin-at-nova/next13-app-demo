"use client";
//tell the compiler that this is a hybrid server/client module,
//so we can usState, client side redux, etc.
//now, it will ask for a client side store <Provider> if you don't have one yet.

import { setSearch, getSearch } from "@/store/UsersSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";

const SearchInputCsr = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector(getSearch);

  return (
    <>
      <div>
        🔍&nbsp;&nbsp;
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </div>
      <h3 style={{ visibility: search ? "visible" : "hidden", margin: "20px 0" }}>
        Search Results for: {search}
      </h3>
    </>
  );
};

export default SearchInputCsr;
