import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/Homepage.module.css";
import { useRouter } from "next/router";

export default function index() {
  const { route } = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.1 }}
      transition={{ delay: 0.3 }}
      className={styles.main}
    >
      <h1 className={styles.logo_new_homepage}>
        <span className={styles.logo_top}>F1uke Jessada</span>
        <span className={styles.logo_lzy}>lzy</span>
        <span
          className={styles.logo_i_want_a_change_btw_yy_and_3}
          hover-string="3"
        >
          yy
        </span>
        <span className={styles.logo_me}>me</span>
      </h1>

      <div className={styles.navbar_of_change}>
        <ul>
          <motion.li
            initial={{ scale: 1, opacity: 1 }}
            exit={route.includes("me") ? { scale: 10, opacity: 0.1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Link href={"/me"}>just want to know me</Link>
          </motion.li>
          <motion.li
            initial={{ scale: 1, opacity: 1 }}
            exit={route.includes("blog") ? { scale: 10, opacity: 0.1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Link href={"/blog"}>“my personal opinion”</Link>
          </motion.li>
          <motion.li
            initial={{ scale: 1, opacity: 1 }}
            exit={route.includes("projects") ? { scale: 10, opacity: 0.1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Link href={"/projects"}>projects</Link>
          </motion.li>
        </ul>
      </div>
    </motion.div>
  );
}
