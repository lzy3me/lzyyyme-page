import Head from "next/head";
import styles from "styles/Home.module.css";
import Profile from "components/profile/profile";
import Skills from "components/profile/skills";
import Education from "components/profile/education";
import Experience from "components/profile/experience";

import { join } from "path";
import { promises as fs } from "fs";
import PageLayout from "components/layout/pageLayout";
import Link from "next/link";

export default function Home(props: any) {
  return (
    <div className={styles.home_container}>
      <Head>
        <title>LzyyyMe</title>
        <meta name="description" content="Just do it" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <main className={styles.main}>
          <h1 className="logo">LzyyyMe</h1>
          <Link href={"/me"} className="duration-150 hover:underline hover:drop-shadow-[0_0_20px_rgba(255,255,255,1)]">all about me. click here</Link>
        </main>
      </PageLayout>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
