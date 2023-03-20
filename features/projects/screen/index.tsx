import CardProject from "../components/CardProject";
import styles from "../styles/Projects.module.css";

export default function index() {
  return (
    <div className={styles.projects_home}>
      <div className={styles.projects_display}>
        <CardProject
          project_image={""}
          project_title={""}
          framework={[]}
          language={[]}
          description={""}
          live_demo={""}
          source_code={""}
        />
      </div>
    </div>
  );
}
