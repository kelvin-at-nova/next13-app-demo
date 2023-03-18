/*
Pure SSR components are for server level page generation.
They can't do client level data manipulation.
Designed for static things with the lifespan of the page.
It is good for SEO.
Use case: branding, stations, articles, etc.
*/

import StoreProvider from "@/components/StoreProvider";
import UserListSsr from "@/components/UserListSsr";
import { ssrUsersPreloader } from "@/preloaders/SsrUsersPreloader";
import styles from "../page.module.css";
import { getUsers } from "@/preloaders/fetchers/getUsers";

export default async function Home() {
  const gotUsers = await getUsers(); //get data from server side
  const ssrUsers = await ssrUsersPreloader(gotUsers);
  return (
    <>
      <StoreProvider>
        <main className={styles.main}>
          <UserListSsr users={ssrUsers} />
        </main>
      </StoreProvider>
    </>
  );
}
