import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const workLinks = [
  { href: "/work", label: "Projects" },
  { href: "/process", label: "My Process" },
  { href: "/resume", label: "Resume" },
];

const connectLinks = [
  { href: "#", label: "LinkedIn" },
  { href: "mailto:hello@mohamadawada.ca", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-primary bg-footer px-6 py-8 lg:flex lg:justify-center lg:p-16">
      <div className="flex flex-col gap-4 lg:max-w-[1312px] lg:flex-1 lg:gap-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-6 lg:pr-32">
          <div className="flex flex-col gap-4 lg:gap-6">
            <div className="flex flex-col gap-2 lg:gap-4">
              <div className="flex items-center gap-4">
                <Logo />
                <span className="font-heading text-h6 font-medium text-white">
                  Mohamad Awada
                </span>
              </div>
              <p className="text-base text-primary-light lg:text-xl">
                Made by Moe, designed with care.
              </p>
            </div>

            <div className="hidden lg:flex lg:flex-col lg:gap-4">
              <p className="font-heading text-h6 font-medium text-contrast">
                Let&rsquo;s build something together.
              </p>
              <Button href="/contact" icon>
                Get in touch
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex lg:gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="font-heading text-h5 font-medium text-white">Work</h3>
              <div className="flex flex-col gap-4">
                {workLinks.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-xl font-medium text-contrast transition-colors hover:text-link"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="self-stretch border-l border-primary/30" />

            <div className="flex flex-col gap-6">
              <h3 className="font-heading text-h5 font-medium text-white">Connect</h3>
              <div className="flex flex-col gap-4">
                {connectLinks.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-xl font-medium text-contrast transition-colors hover:text-link"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/30 py-2 lg:hidden" />

        <div className="flex flex-col gap-4 lg:hidden">
          <p className="font-heading text-h6 font-medium text-contrast">
            Let&rsquo;s build something together.
          </p>
          <Button href="/contact" icon className="w-full">
            Get in touch
          </Button>
        </div>

        <div className="border-t border-primary/30 py-2 lg:hidden" />

        <div className="flex items-start justify-between px-2 lg:hidden">
          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-h6 font-medium text-white">Work</h3>
            <div className="flex flex-col gap-4">
              {workLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-base text-contrast transition-colors hover:text-link"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-h6 font-medium text-white">Connect</h3>
            <div className="flex flex-col gap-4">
              {connectLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-base text-contrast transition-colors hover:text-link"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 pt-6 text-tiny text-primary lg:text-sm">
          <p>© 2026 Mohamad Awada. All rights reserved.</p>
          <p className="lg:hidden">Designed and built by Mohamad Awada (Moe)</p>
        </div>
      </div>
    </footer>
  );
}
