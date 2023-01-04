import Head from "next/head";
import { join } from "path";
import { promises as fs } from "fs";
import styles from "styles/Home.module.css";
import PageLayout from "components/layout/pageLayout";
import AboutMe from "components/profile";

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
        <AboutMe
          contact={contact}
          education={education}
          experience={experience}
          skills={skills}
        />
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
