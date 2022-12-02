import Image from "next/image";

export default function Contact({ ...props }: any) {
  let { contact } = props;
  console.log("🚀 ~ file: contact.tsx:3 ~ Contact ~ contact", contact);

  return (
    <div className="responsive grid md:grid-cols-2 gap-4 place-content-evenly rounded-lg border border-gray-600 p-6 duration-150 hover:shadow-[0_0_24px_rgba(255,255,255,0.3)]">
      {contact?.map((data: any) => {
        return (
          <div className="icon-color flex flex-row gap-2">
            <Image
              src={`/images/icons/${data?.type}.svg`}
              alt={data?.type}
              width={25}
              height={25}
            />
            {data?.content?.includes("https://") ? (
              <a href={data?.content} target="_blank">
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
    </div>
  );
}
