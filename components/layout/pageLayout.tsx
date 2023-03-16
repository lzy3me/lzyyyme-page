import { Props } from "common/interfaces/page_layout.interface";
import Head from "next/head";
import styles from "styles/layout/Layout.module.css";
import Footer from "./footer.layout";
import Header from "./header.layout";

export default function PageLayout({
  children,
  title = "LzyyyMe",
  description = "Just do it",
  navbar = false,
  pagename,
  page_list,
  ...props
}: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {navbar ? (<Header pagename={pagename} page_list={page_list} />) : null}
      {children}
      <Footer />
    </div>
  );
}
