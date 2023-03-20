import Image from "next/image";
import styles from "../styles/CardProject.module.css";
import { Props } from 'common/interfaces/card_project.interface';

export default function CardProject({
  project_image,
  project_title,
  framework,
  language,
  description,
  live_demo,
  source_code,
}: Props) {
  return (
    <div className={styles.carded}>
      <Image
        src={"/images/me.jpg"}
        className={styles.project_pic}
        alt={"project_pic_is_here!"}
        fill
        sizes="20vw"
      />

      <h1>add or remove with language support (or i18n)</h1>

      <div className={styles.framework_and_language}>
        <Image
          src={`/images/icons/nextjs.svg`}
          alt={""}
          width={25}
          height={25}
        />
        <Image
          src={`/images/icons/nestjs.svg`}
          alt={""}
          width={25}
          height={25}
        />
        <Image
          src={`/images/icons/tailwindcss.svg`}
          alt={""}
          width={25}
          height={25}
        />

        <div className={styles.language}>
          <div
            className={styles.block_language}
            style={{ borderColor: "#FFFFFF80", backgroundColor: "#3178C6" }}
          >
            typescript
          </div>
          <div
            className={styles.block_language}
            style={{
              borderColor: "#FFFFFF80",
              backgroundColor: "#F7DF1E",
              color: "#000000",
            }}
          >
            js
          </div>
        </div>
      </div>
      <p className={styles.card_description}>
        description description description description
      </p>
      <div className={styles.card_sources}>
        <a className="" href="https://add-or-remove.vercel.app" target="_blank">
          live demo
        </a>
        <a
          className=""
          href="https://github.com/lzy3me/add-or-remove"
          target="_blank"
        >
          source code
        </a>
      </div>
    </div>
  );
}
