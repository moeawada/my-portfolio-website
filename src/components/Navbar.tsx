"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import Logo from "./Logo";
import Button from "./Button";
import styles from "./Navbar.module.css";

const links = [
  { href: "/work", label: "My Work" },
  { href: "/process", label: "Process" },
  { href: "/resume", label: "Resume" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.leftGroup}>
          <Logo />
          <nav className={styles.desktopNav}>
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`${styles.navLink} ${
                    isActive ? styles.navLinkActive : styles.navLinkInactive
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className={styles.desktopContact}>
          <Button href="/contact" size="sm">
            Contact Me
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
          className={styles.menuToggle}
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      <nav
        aria-hidden={!open}
        className={`${styles.mobileNav} ${open ? styles.mobileNavOpen : ""}`}
      >
        <div className={styles.mobileTopRow}>
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className={styles.closeButton}
          >
            <X size={24} />
          </button>
        </div>

        <div className={styles.linksWrapper}>
          {(() => {
            const renderLink = ({ href, label }: (typeof links)[number], isFirst: boolean) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`${styles.link} ${isFirst ? styles.linkFirst : styles.linkRest} ${
                    isActive ? styles.linkActive : styles.linkInactive
                  }`}
                >
                  {label}
                </Link>
              );
            };

            return (
              <>
                {renderLink(links[0], true)}
                <div className={styles.linksGroup}>
                  {links.slice(1).map((link) => renderLink(link, false))}
                </div>
              </>
            );
          })()}
        </div>

        <div className={styles.divider}>
          <div className={styles.dividerLine} />
        </div>

        <Link
          href="https://www.linkedin.com/in/mohamad-awada-design/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className={styles.linkedin}
        >
          LinkedIn
        </Link>

        <div className={styles.divider}>
          <div className={styles.dividerLine} />
        </div>

        <div className={styles.contactWrapper}>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={styles.contactButton}
          >
            Contact Me
          </Link>
        </div>
      </nav>
    </header>
  );
}
