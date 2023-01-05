import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../../styles/Card.module.css";

export default function Contact({ ...props }: any) {
  let { contact } = props;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`responsive grid place-content-evenly gap-4 md:grid-cols-2 ${styles._card}`}
    >
      {contact?.map((data: any) => {
        return (
          <div key={data?.id} className="icon-color flex flex-row gap-2">
            <Image
              src={`/images/icons/${data?.type}.svg`}
              alt={data?.type}
              width={25}
              height={25}
            />
            {data?.content?.includes("https://") ? (
              <a href={data?.content} target="_blank" rel="noreferrer">
                <p className="border-l-4 border-l-amber-500 pl-2">
                  {data?.content?.slice(8)}
                </p>
              </a>
            ) : (
              <p className="border-l-4 border-l-amber-500 pl-2">
                {data?.content}
              </p>
            )}
          </div>
        );
      })}
    </motion.div>
  );
}
