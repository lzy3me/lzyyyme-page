import Link from "next/link";
import { motion } from "framer-motion";
import { Props } from "common/interfaces/header.interface";
import styles from "styles/layout/Header.module.css";

export default function Header({ pagename, page_list, ...props }: Props) {
  const navbar_animate = {
    animate: (custom: number) => ({
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: page_list ? page_list?.length * 0.6 : 0.3,
      },
    }),
  };
  console.log(page_list?.length);

  return (
    <motion.nav exit={{ opacity: 0 }} className={styles.navbar_emerge}>
      <div className={styles.logo_side}>
        <motion.h1
          custom={0}
          initial={{ opacity: 0 }}
          animate="animate"
          variants={navbar_animate}
          className={styles.logo_navbar}
          style={{ transform: "translateY(var(--logo-side))" }}
        >
          <span className={styles.logo_lzy}>lzy</span>
          <span className={styles.logo_yy_and_3} hover-string="yy">
            3
          </span>
          <span className={styles.logo_me}>me</span>
          <span className={styles.logo_pagename}>{pagename}</span>
        </motion.h1>
        <motion.div
          custom={1}
          initial={{ opacity: 0 }}
          animate="animate"
          variants={navbar_animate}
        >
          <Link className={styles.goback_home} href={"/"}>
            &#60;-- go back
          </Link>
        </motion.div>
      </div>

      <ul>
        {page_list?.map((item, index) => (
          <motion.li
            custom={1 + index}
            initial={{ opacity: 0 }}
            animate="animate"
            variants={navbar_animate}
          >
            <Link href={item.path}>{item.pagename}</Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
