import { useCallback, useMemo } from "react";
import styles from "../../styles/Card.module.css";

export default function Skills(props: any) {
  let { skills, type, render, cardStyle, headerStyle } = props;

  const skillRenderer = useCallback((rank: string, name: string) => {
    switch (rank) {
      case "5":
      default:
        return <p className="text-lg text-gray-50">{name}</p>;
      case "4":
        return <p className="text-lg text-gray-50/80">{name}</p>;
      case "3":
        return <p className="text-lg text-gray-50/60">{name}</p>;
      case "2":
        return <p className="text-lg text-gray-50/40">{name}</p>;
      case "1":
        return <p className="text-lg text-gray-50/20">{name}</p>;
      case "0":
        return <p className="text-lg text-gray-50/5">{name}</p>;
    }
  }, []);

  const renderType = useMemo(() => {
    switch (render) {
      case "col":
      default:
        return "flex flex-col gap-2 pt-6";
      case "row":
        return "flex flex-row flex-wrap pt-6 justify-around gap-4";
    }
  }, [render]);

  return (
    <div
      className={`${styles._card} flex flex-col text-center ${cardStyle}`}
    >
      <p className={`pb-2 text-2xl font-bold uppercase ${headerStyle}`}>
        {type}
      </p>
      <div className={renderType}>
        {skills[type]?.map((data: any) => {
          return skillRenderer(data?.rank, data?.name);
        })}
      </div>
    </div>
  );
}
