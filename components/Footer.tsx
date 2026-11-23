import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";

const serviceLinks = [
  "Cloud Architecture",
  "Enterprise Engineering",
  "System Modernization",
  "DevSecOps Automation",
];

const companyLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Industries", href: "/#industries" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const connectLinks = [
  { icon: "terminal", label: "Developer Portal" },
  { icon: "rss_feed", label: "Engineering Insights" },
  { icon: "share", label: "Global Network" },
];

const legalLinks = ["Privacy Policy", "Terms of Service", "Security Protocol"];

export default function Footer() {
  return (
    <footer className="w-full bg-surface-pure border-t border-border-subtle mt-space-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-space-xl">
          <div>
            <div className="flex items-center gap-space-sm mb-space-sm">
              <Image alt="Po'o Technologies Logo" className="h-[100px] w-auto object-contain dark:hidden" height={250} src="/assets/logo_dark.png" width={250} />
              <Image alt="Po'o Technologies Logo" className="hidden h-[100px] w-auto object-contain dark:block" height={250} src="/assets/logo_white.png" width={250} />
              <span className="font-headline-sm text-headline-sm text-text-primary tracking-tight">Po&apos;o Technologies</span>
            </div>
            <p className="font-body-sm text-body-sm text-text-muted leading-relaxed">
              Engineering resilient digital infrastructure, enterprise cloud
              architecture, and high-velocity bespoke software solutions.
            </p>
          </div>
          <div>
            <h3 className="font-label-lg text-label-lg text-text-primary mb-space-md">
              Services
            </h3>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-text-muted">
              {serviceLinks.map((link) => (
                <li
                  key={link}
                  className="hover:text-text-primary transition-colors"
                >
                  <Link href="/#services">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-label-lg text-label-lg text-text-primary mb-space-md">
              Company
            </h3>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-text-muted">
              {companyLinks.map((link) => (
                <li
                  key={link.label}
                  className="hover:text-text-primary transition-colors"
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-label-lg text-label-lg text-text-primary mb-space-md">
              Connect
            </h3>
            <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-text-muted">
              {connectLinks.map((link) => (
                <a
                  key={link.label}
                  className="hover:text-primary transition-colors flex items-center gap-space-xs"
                  href="#"
                >
                  <Icon name={link.icon} className="text-[16px]" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-space-md border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-md text-label-md text-text-muted">
          <div>
            © 2024 - 2026 Po&apos;o Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-space-md">
            {legalLinks.map((link) => (
              <a
                key={link}
                className="hover:text-text-primary transition-colors"
                href="#"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
