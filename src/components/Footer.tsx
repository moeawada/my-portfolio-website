import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import styles from "./Footer.module.css";

const workLinks = [
  { href: "/work", label: "Projects" },
  { href: "/process", label: "My Process" },
  { href: "/resume", label: "Resume" },
];

const connectLinks = [
  { href: "https://www.linkedin.com/in/mohamad-awada-design/", label: "LinkedIn" },
  { href: "mailto:hello@mohamadawada.ca", label: "Email" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.leftCol}>
            <div className={styles.brandBlock}>
              <div className={styles.brandRow}>
                <Logo />
                <span className={styles.brandName}>Mohamad Awada</span>
              </div>
              <p className={styles.tagline}>Made by Moe, designed with care.</p>
            </div>

            <div className={styles.ctaDesktop}>
              <p className={styles.ctaHeading}>Let&rsquo;s build something together.</p>
              <Button href="/contact" icon>
                Get in touch
              </Button>
            </div>
          </div>

          <div className={styles.linkColumns}>
            <div className={styles.linkColumn}>
              <h3 className={styles.columnHeading}>Work</h3>
              <div className={styles.columnLinks}>
                {workLinks.map(({ href, label }) => (
                  <Link key={label} href={href} className={styles.footerLink}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.verticalDivider} />

            <div className={styles.linkColumn}>
              <h3 className={styles.columnHeading}>Connect</h3>
              <div className={styles.columnLinks}>
                {connectLinks.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={styles.footerLink}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.mobileDivider} />

        <div className={styles.mobileCta}>
          <p className={styles.ctaHeading}>Let&rsquo;s build something together.</p>
          <Button href="/contact" icon fullWidth>
            Get in touch
          </Button>
        </div>

        <div className={styles.mobileDivider} />

        <div className={styles.mobileLinksRow}>
          <div className={styles.linkColumn}>
            <h3 className={styles.mobileColumnHeading}>Work</h3>
            <div className={styles.columnLinks}>
              {workLinks.map(({ href, label }) => (
                <Link key={label} href={href} className={styles.mobileFooterLink}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.linkColumn}>
            <h3 className={styles.mobileColumnHeading}>Connect</h3>
            <div className={styles.columnLinks}>
              {connectLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={styles.mobileFooterLink}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p>© 2026 Mohamad Awada. All rights reserved.</p>
          <p className={styles.mobileOnly}>Designed and built by Mohamad Awada (Moe)</p>
        </div>
      </div>
    </footer>
  );
}
