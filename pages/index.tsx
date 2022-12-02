import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";
import Profile from "components/profile/profile";
import Skills from "components/profile/skills";
import Education from "components/profile/education";
import Experience from "components/profile/experience";

import { join } from "path";
import { promises as fs } from "fs";

export default function Home(props: any) {
  return (
    <div className={styles.home_container}>
      <Head>
        <title>LzyyyMe</title>
        <meta name="description" content="Just do it" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Profile />

        <h1 className={styles.title}>Experience</h1>

        <Experience experience={props["experience"]} />

        <h1 className={styles.title}>Education</h1>

        <Education education={props["education"]} />

        <h1 className={styles.title}>Skills</h1>

        <div className="grid md:grid-cols-2 gap-6 responsive">
          <Skills headerStyle="border-b-4 border-b-amber-500" skills={props["skills"]} type="programming" />
          <Skills headerStyle="border-b-4 border-b-amber-500" skills={props["skills"]} type="framework" />
          <Skills cardStyle="col-span-2" headerStyle="border-b-4 border-b-amber-500" skills={props["skills"]} type="tools" render="row" />
        </div>

        <h1 className={styles.title}>Hobbies & Interest</h1>

        <p className="responsive text-center">
          Mainly playing competitive games for stress relief, Storytelling games is
          also given me joy as well. Hardware programming is also a way for me
          to think what I want to do with it.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/lzy3me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by&nbsp;
          <span className="logo">
            LzyyyMe
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const jsonDirectory = join(process.cwd(), "public");
  const skills = await fs.readFile(
    jsonDirectory + "/skills.json",
    "utf8",
  );
  const education = await fs.readFile(
    jsonDirectory + "/education.json",
    "utf8",
  );
  const experience = await fs.readFile(
    jsonDirectory + "/experience.json",
    "utf8",
  );

  return {
    props: {
      skills,
      education,
      experience
    },
  };
}
