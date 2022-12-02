import Head from "next/head";
import styles from "styles/Error.module.css";

export default function NotFound() {
  return (
    <div className={styles.err_container}>
      <Head>
        <title>Oops</title>
      </Head>

      <main className={styles.err_main}>
        <div className="text-xl">
          <h1 className={styles.err_msg}>
            Oops.{" "}
            <span className={styles.err_sup_msg}>Looks like the page you want to access dose not exist</span>
          </h1>
        </div>
      </main>
    </div>
  );
}
