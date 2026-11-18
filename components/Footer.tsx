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
              {/* Logo temporarily hidden
              <img alt="Po'o Technologies Logo" className="h-6 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ALJJyrCMjpZNIX30dtnnhT7cw6pLQSN4o-BL66pXd8fVfvNGW5WuDd3alLLrAk7ktCDXdDCq75zl48YrbMb49O00g0CyZJYeCjJr6JSiJ3kFqeOSRW4bN9ne3n6cY7WBT8369Wohblh8mpjmgsPrdVaOPkqSqJai0oJRC648ZE-Xsp_WlXL-9Ti_hzN7rFMjlQbi9d8LkrYpsMjmFJLXLnn8-BIksXz3RvkDAfu_SWjV0cHz" />
              */}
              <span className="font-headline-sm text-headline-sm text-text-primary tracking-tight">Po&apos;o Technologies</span>
            </div>
            <p className="font-body-sm text-body-sm text-text-muted leading-relaxed">
              Engineering resilient digital infrastructure, enterprise cloud
              architecture, and high-velocity bespoke software solutions.
            </p>
          </div>
          <div>
            <h4 className="font-label-lg text-label-lg text-text-primary mb-space-md">
              Services
            </h4>
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
            <h4 className="font-label-lg text-label-lg text-text-primary mb-space-md">
              Company
            </h4>
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
            <h4 className="font-label-lg text-label-lg text-text-primary mb-space-md">
              Connect
            </h4>
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
