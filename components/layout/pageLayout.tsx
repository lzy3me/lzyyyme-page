import Head from "next/head";
import { ReactNode } from "react";
import styles from "../../styles/layout/Layout.module.css";
import Footer from "./footer.layout";

interface Props {
  children?: ReactNode;
  title?: string;
  description?: string;
}

export default function PageLayout({
  children,
  title = "LzyyyMe",
  description = "Just do it",
  ...props
}: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
      <Footer />
    </div>
  );
}
