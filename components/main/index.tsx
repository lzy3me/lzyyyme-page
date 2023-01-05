import Link from "next/link";
import styles from "styles/Home.module.css";
import { motion } from "framer-motion";

export default function Main({ ...props }: any) {
  return (
    <motion.main
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
      className={styles.main}
    >
      <h1 className="logo">LzyyyMe</h1>
      <Link
        href={"/me"}
        className="pt-2 duration-150 hover:underline hover:drop-shadow-[0_0_20px_rgba(255,255,255,1)]"
      >
        all about me. click here
      </Link>
    </motion.main>
  );
}
