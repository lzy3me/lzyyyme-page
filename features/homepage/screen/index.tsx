import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/Homepage.module.css";
import { useRouter } from "next/router";

export default function index() {
  const { route } = useRouter();

  const homepage_animated = {
    list_menu: (custom: number) => ({
      opacity: 1,
      transition: { delay: custom * 0.3 }
    }),
    exit_menu: (custom: number) => ({
      opacity: 0,
      transition: { delay: custom * 0.2 }
    })
  };

  return (
    <motion.div
      custom={0}
      initial={{ opacity: 0 }}
      animate="list_menu"
      variants={homepage_animated}
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
            initial={{ opacity: 0 }}
            custom={1}
            animate="list_menu"
            exit="exit_menu"
            variants={homepage_animated}
          >
            <Link href={"/me"}>just want to know me</Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            custom={2}
            animate="list_menu"
            exit="exit_menu"
            variants={homepage_animated}
          >
            <Link href={"/blog"}>“my personal opinion”</Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            custom={3}
            animate="list_menu"
            exit="exit_menu"
            variants={homepage_animated}
          >
            <Link href={"/projects"}>projects</Link>
          </motion.li>
        </ul>
      </div>
    </motion.div>
  );
}
