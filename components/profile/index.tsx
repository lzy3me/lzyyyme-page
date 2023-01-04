import { motion } from "framer-motion";
import styles from "styles/Home.module.css";
import Contact from "./contact";
import Education from "./education";
import Experience from "./experience";
import Profile from "./profile";
import Skills from "./skills";

export default function AboutMe({
  contact,
  education,
  experience,
  skills,
  ...props
}: any) {
  return (
    <motion.main
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
      className={styles.main}
    >
      <Profile />

      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={styles.title}
      >
        Experience
      </motion.h1>

      <Experience experience={experience} />

      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={styles.title}
      >
        Education
      </motion.h1>

      <Education education={education} />

      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={styles.title}
      >
        Skills
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="responsive grid gap-6 md:grid-cols-2"
      >
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
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={styles.title}
      >
        Contact
      </motion.h1>
      <Contact contact={contact} />
    </motion.main>
  );
}
