/*
Pure SSR components are for server level page generation.
They can't do client level data manipulation.
Designed for static things with the lifespan of the page.
It is good for SEO.
Use case: branding, stations, articles, etc.
*/

import StoreProvider from "@/components/StoreProvider";
import styles from "./page.module.css";
import CsrContent from "../components/CsrContent";
import SsrHeading from "@/components/SsrHeading";
import { getBrand } from "@/preloaders/getBrand";

export default async function Home() {
  const company = await getBrand();
  return (
    <>
      <StoreProvider>
        <main className={styles.main}>
          <SsrHeading {...company} />
          <CsrContent />
        </main>
      </StoreProvider>
    </>
  );
}
