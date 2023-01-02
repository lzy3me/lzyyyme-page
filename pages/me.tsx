import Education from "components/profile/education";
import Experience from "components/profile/experience";
import Profile from "components/profile/profile";
import Skills from "components/profile/skills";
import Head from "next/head";
import { join } from "path";
import { promises as fs } from "fs";
import styles from "styles/Home.module.css";
import Contact from "components/profile/contact";
import PageLayout from "components/layout/pageLayout";

export default function Me({
  contact,
  education,
  experience,
  skills,
  ...props
}: Props) {
  return (
    <div className={styles.home_container}>
      <Head>
        <title>Me - LzyyyMe</title>
        <meta name="description" content="Let's try something new." />
      </Head>

      <PageLayout>
        <main className={styles.main}>
          <Profile />

          <h1 className={styles.title}>Experience</h1>

          <Experience experience={experience} />

          <h1 className={styles.title}>Education</h1>

          <Education education={education} />

          <h1 className={styles.title}>Skills</h1>

          <div className="responsive grid gap-6 md:grid-cols-2">
            <Skills
              headerStyle="border-b-4 border-b-amber-500"
              skills={skills}
              type="programming"
            />
            <Skills
              headerStyle="border-b-4 border-b-amber-500"
              skills={skills}
              type="framework"
            />
            <Skills
              cardStyle="col-span-2"
              headerStyle="border-b-4 border-b-amber-500"
              skills={skills}
              type="tools"
              render="row"
            />
          </div>

          {/* <h1 className={styles.title}>Hobbies & Interest</h1>

          <p className="responsive text-center">
            Mainly playing competitive games for stress relief, Storytelling
            games is also given me joy as well. Hardware programming is also a
            way for me to think what I want to do with it.
          </p> */}

          <h1 className={styles.title}>Contact</h1>
          <Contact contact={contact} />
        </main>
      </PageLayout>
    </div>
  );
}

export async function getStaticProps() {
  const jsonDirectory = join(process.cwd(), "public/data");
  let skills = await fs.readFile(jsonDirectory + "/skills.json", "utf8");
  let education = await fs.readFile(jsonDirectory + "/education.json", "utf8");
  let experience = await fs.readFile(
    jsonDirectory + "/experience.json",
    "utf8",
  );
  let contact = await fs.readFile(jsonDirectory + "/contact.json", "utf8");

  skills = JSON.parse(skills);
  education = JSON.parse(education);
  experience = JSON.parse(experience);
  contact = JSON.parse(contact);

  return {
    props: {
      skills,
      education,
      experience,
      contact,
    },
  };
}

interface Props {
  skills?: object;
  education?: object;
  experience?: object;
  contact?: object;
}
