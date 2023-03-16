import { Props } from "common/interfaces/header.interface";
import { PageList } from "common/interfaces/pagelist.interface";
import Link from "next/link";
import styles from "styles/layout/Header.module.css";

export default function Header({ pagename, page_list, ...props }: Props) {
  return (
    <nav className={styles.navbar_emerge}>
      <div className={styles.logo_side}>
        <h1 className={styles.logo_navbar}>
          <span className={styles.logo_lzy}>lzy</span>
          <span className={styles.logo_yy_and_3} hover-string="yy">
            3
          </span>
          <span className={styles.logo_me}>me</span>
          <span className={styles.logo_pagename}>{pagename}</span>
        </h1>
        <Link className={styles.goback_home} href={"/"}>&#60;-- go back</Link>
      </div>

      <ul>
        {page_list?.map((item) => (
          <li>
            <Link href={item.path}>{item.pagename}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
