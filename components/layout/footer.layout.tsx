import styles from "../../styles/layout/Footer.module.css";

export default function Footer({ ...props }) {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/lzy3me"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made by&nbsp;
        <span className={styles.logo}>Lzy3Me</span>
      </a>
    </footer>
  );
}
