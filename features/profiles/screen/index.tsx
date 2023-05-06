import Image from "next/image";
import styles from "../styles/Profiles.module.css";
import { useRouter } from "next/router";

export default function index() {
  const { route } = useRouter();

  return (
    <div className={styles.projects_home}>
      <Image
        src="/images/me-pixel.png"
        alt="photo of ME"
        width={256}
        height={256}
        priority
      />
      <div className="flex border-l-4 border-l-amber-500 pl-2">
        <div className="my-auto">
          <h1 className="text-2xl font-bold">Jessada Supapsuntorn</h1>
          <p>Let&apos;s try something new.</p>
        </div>
      </div>
    </div>
  );
}
