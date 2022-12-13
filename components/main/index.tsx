import Link from "next/link";
import styles from "styles/Home.module.css";

export default function Main({ ...props }: any) {
  return (
    <main className={styles.main}>
      <h1 className="logo">LzyyyMe</h1>
      <Link
        href={"/me"}
        className="duration-150 hover:underline hover:drop-shadow-[0_0_20px_rgba(255,255,255,1)]"
      >
        all about me. click here
      </Link>
    </main>
  );
}
