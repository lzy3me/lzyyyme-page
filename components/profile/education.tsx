import { motion } from "framer-motion";
import { useCallback } from "react";
import styles from "../../styles/Card.module.css";

export default function Education({ education, ...props }: any) {
  const renderer = useCallback((name: string, year: string, degree: string) => {
    return (
      <div className={`flex flex-col gap-2 ${styles._card}`}>
        <div>
          <h1 className="text-2xl font-bold max-sm:text-lg">{name}</h1>
        </div>
        <div className="border-t-4 border-t-amber-500 pt-2">
          <h1 className="text-xl font-light max-sm:text-base">
            {year} {degree ? <span>- {degree}</span> : ""}
          </h1>
        </div>
      </div>
    );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="responsive flex flex-col-reverse gap-4"
    >
      {education.map((data: any) => {
        return renderer(data?.name, data?.gradYear, data?.degree);
      })}
    </motion.div>
  );
}
