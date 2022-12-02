import moment from "moment";
import { useCallback } from "react";

export default function Experience(props: any) {
  let { experience } = props;
  experience = JSON.parse(experience);

  const renderer = useCallback(
    (name: string, year: any, position: string) => {
      const yearStart = moment(year?.start);
      const yearEnd = year?.end ? moment(year?.end) : moment();
      const total = yearEnd.from(yearStart, true);

      return (
        <div className="flex flex-col gap-2 rounded-lg border border-gray-600 p-6 duration-150 hover:shadow-[0_0_24px_rgba(255,255,255,0.3)]">
          <div>
            <h1 className="text-2xl max-sm:text-lg font-bold">{name}</h1>
          </div>
          <div className="border-t-4 border-t-amber-500 pt-2">
            <p className="text-xl max-sm:text-base">{position}</p>
            <p className="text-xl max-sm:text-base font-extralight text-white/70">
              {yearStart.format("MMMM YYYY")} -{" "}
              {year?.end ? yearEnd.format("MMMM YYYY") : "Present"} ({total})
            </p>
          </div>
        </div>
      );
    },
    [],
  );

  return (
    <div className="responsive flex flex-col-reverse gap-4">
      {experience.map((data: any) => {
        return renderer(data?.name, data?.year, data?.position);
      })}
    </div>
  );
}
