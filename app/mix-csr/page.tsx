/*
CSR components are for client level page generation.
They can do client level data manipulation.
They are rendered on the client side. So not good for SEO.
Use case: now playing, search, etc.
*/

import SearchInputCsr from "@/components/SearchInput";
import StoreProvider from "@/components/StoreProvider";
import UserListCsr from "@/components/UserListCsr";
import CsrUsersPreloaderAsTag from "@/preloaders/CsrUsersPreloaderAsTag";
import { getUsers } from "@/preloaders/fetchers/getUsers";
import styles from "../page.module.css";

export default async function Home() {
  const gotUsers = await getUsers(); //get data from server side
  //this is server level page generation
  return (
    <>
      <CsrUsersPreloaderAsTag users={gotUsers} />
      <StoreProvider>
        <main className={styles.main}>
          <SearchInputCsr /> {/* only CSR components can do client level data manipulation */}
          <UserListCsr users={gotUsers} />
        </main>
      </StoreProvider>
    </>
  );
}
