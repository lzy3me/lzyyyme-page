import moment from "moment";
import { useCallback } from "react";
import styles from "../../styles/Card.module.css";
import { motion } from "framer-motion";

export default function Experience({ experience, ...props }: any) {
  const renderer = useCallback((name: string, year: any, position: string) => {
    const yearStart = moment(year?.start);
    const yearEnd = year?.end ? moment(year?.end) : moment();
    const total = yearEnd.from(yearStart, true);

    return (
      <div className={`flex flex-col gap-2 ${styles._card}`}>
        <div>
          <h1 className="text-2xl font-bold max-sm:text-lg">{name}</h1>
        </div>
        <div className="border-t-4 border-t-amber-500 pt-2">
          <p className="text-xl max-sm:text-base">{position}</p>
          <p className="text-xl font-extralight text-white/70 max-sm:text-base">
            {yearStart.format("MMMM YYYY")} -{" "}
            {year?.end ? yearEnd.format("MMMM YYYY") : "Present"} ({total})
          </p>
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
      {experience.map((data: any) => {
        return renderer(data?.name, data?.year, data?.position);
      })}
    </motion.div>
  );
}
