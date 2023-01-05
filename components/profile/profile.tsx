import Image from "next/image";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="responsive flex gap-2 rounded-lg border border-gray-600/50 p-2 duration-150 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]"
    >
      <div>
        <Image
          src="/images/me.jpg"
          alt="photo of ME"
          width={200}
          height={200}
          priority
        />
      </div>
      <div className="flex border-l-4 border-l-amber-500 pl-2">
        <div className="my-auto">
          <h1 className="text-2xl font-bold">Jessada Supapsuntorn</h1>
          <p>Let&apos;s try something new.</p>
        </div>
      </div>
    </motion.div>
  );
}
