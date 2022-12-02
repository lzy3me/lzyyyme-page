import { useCallback } from "react";
import styles from "../../styles/Card.module.css";

export default function Education(props: any) {
  let { education } = props;

  const renderer = useCallback(
    (name: string, year: string, degree: string) => {
      return (
        <div className={`flex flex-col gap-2 ${styles._card}`}>
          <div>
            <h1 className="text-2xl max-sm:text-lg font-bold">{name}</h1>
          </div>
          <div className="border-t-4 border-t-amber-500 pt-2">
            <h1 className="text-xl max-sm:text-base font-light">
              {year} {degree ? <span>- {degree}</span> : ""}
            </h1>
          </div>
        </div>
      );
    },
    [],
  );

  return (
    <div className="responsive flex flex-col-reverse gap-4">
      {education.map((data: any) => {
        return renderer(data?.name, data?.gradYear, data?.degree);
      })}
    </div>
  );
}
