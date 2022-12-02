import Image from "next/image";

export default function Profile() {
  return (
    <div className="responsive flex gap-2 rounded-lg border border-gray-600 p-2 duration-150 hover:shadow-[0_0_24px_rgba(255,255,255,0.3)]">
      <div>
        <Image src="/me.jpg" alt="photo of ME" width={200} height={200} />
      </div>
      <div className="border-l-4 border-l-amber-500 pl-2 flex">
        <div className="my-auto">
          <h1 className="text-2xl font-bold">Jessada Supapsuntorn</h1>
          <p>Let&apos;s try something new.</p>
        </div>
      </div>
    </div>
  );
}
