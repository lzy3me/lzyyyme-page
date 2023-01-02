import Link from "next/link";
import styles from "styles/Home.module.css";

export default function Main({ ...props }: any) {
  return (
    <main className={styles.main}>
      <h1 className="logo overflow-hidden w-[200px] h-[92px] flex flex-col items-center">
        <span className="absolute opacity-0 animate-logo1">lzy3me</span>
        <span className="absolute opacity-0 animate-logo2">LzyyyMe</span>
      </h1>
      <Link
        href={"/me"}
        className="duration-150 hover:underline hover:drop-shadow-[0_0_20px_rgba(255,255,255,1)] pt-2"
      >
        all about me. click here
      </Link>
    </main>
  );
}
