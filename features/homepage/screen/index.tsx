import Link from "next/link";
import styles from "../styles/Homepage.module.css";

export default function index() {
  return (
    <div className={styles.main}>
      <h1 className={styles.logo_new_homepage}>
        <span className={styles.logo_top}>Fluke Jessada</span>
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
          <li>
            <Link href={"/me"}>just want to know me</Link>
          </li>
          <li>
            <Link href={"/blog"}>“my personal opinion”</Link>
          </li>
          <li>
            <Link href={"/projects"}>projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
