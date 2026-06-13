import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 shrink-0">
      <Image src="/logo/logo-mark.svg" alt="" width={41} height={51} priority />
      <span className="sr-only">Mohamad Awada</span>
    </Link>
  );
}
