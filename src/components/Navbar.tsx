"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import Logo from "./Logo";
import Button from "./Button";

const links = [
  { href: "/work", label: "My Work" },
  { href: "/process", label: "Process" },
  { href: "/resume", label: "Resume" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 z-50 flex w-full flex-col bg-footer lg:h-auto ${
        open ? "h-screen" : ""
      }`}
    >
      <div className="flex items-center justify-between px-6 py-6 lg:px-16 lg:py-4">
        <div className="flex items-center gap-16">
          <Logo />
          <nav className="hidden items-center lg:flex">
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`px-4 py-2 font-body text-xl font-bold transition-colors ${
                    isActive ? "text-primary-light" : "text-contrast hover:text-primary-light"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Contact Me
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
          className="text-contrast lg:hidden"
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-1 flex-col gap-4 px-6 pt-4 pb-6 lg:hidden">
          <div className="flex w-full flex-col items-start">
            {(() => {
              const renderLink = ({ href, label }: (typeof links)[number], isFirst: boolean) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`w-full ${isFirst ? "py-4" : "py-2"} pr-4 font-heading text-h5 font-medium text-contrast transition-colors ${
                      isActive
                        ? "border-l-4 border-primary-light pl-3"
                        : "pl-4 hover:text-primary-light"
                    }`}
                  >
                    {label}
                  </Link>
                );
              };

              return (
                <>
                  {renderLink(links[0], true)}
                  <div className="flex w-full flex-col gap-3">
                    {links.slice(1).map((link) => renderLink(link, false))}
                  </div>
                </>
              );
            })()}
          </div>

          <div className="w-full border-t-2 border-primary-light py-2" />

          <Link
            href="#"
            onClick={() => setOpen(false)}
            className="px-4 py-2 font-body text-xl font-bold text-contrast underline transition-colors hover:text-primary-light"
          >
            LinkedIn
          </Link>

          <div className="w-full border-t-2 border-primary-light py-2" />

          <div className="px-4">
            <Button href="/contact" className="w-full" onClick={() => setOpen(false)}>
              Contact Me
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
