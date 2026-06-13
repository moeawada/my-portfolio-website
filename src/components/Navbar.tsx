"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between px-6 py-4 sm:px-12">
      <Link href="/" className="text-lg font-semibold tracking-tight">
        Your Name
      </Link>
      <nav className="flex gap-6 text-sm">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={
                isActive
                  ? "font-medium text-foreground"
                  : "text-zinc-500 transition-colors hover:text-foreground dark:text-zinc-400"
              }
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
