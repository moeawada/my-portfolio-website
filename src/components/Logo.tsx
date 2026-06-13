import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <Image src="/logo/logo-mark.svg" alt="" width={41} height={51} priority />
      <span className="sr-only">Mohamad Awada</span>
    </Link>
  );
}
