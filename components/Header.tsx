"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";

const navLinks = [
  { label: "Services", href: "/#services", section: "services" },
  { label: "Industries", href: "/#industries", section: "industries" },
  { label: "About Us", href: "/#about", section: "about" },
  { label: "FAQ", href: "/#faq", section: "faq" },
  { label: "Contact", href: "/#contact", section: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("poo-theme");
    const shouldUseDark = savedTheme === "dark";
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    document.documentElement.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem("poo-theme", nextIsDark ? "dark" : "light");
  };

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const sections = navLinks
      .map(({ section }) => document.getElementById(section))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              first.boundingClientRect.top - second.boundingClientRect.top,
          );

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const linkClass = (section: string) =>
    section === activeSection
      ? "font-label-lg text-label-lg text-primary font-semibold transition-colors"
      : "font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-pure/90 backdrop-blur-xl border-b border-border-subtle">
      <div className="relative h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-gutter">
        <div className="flex items-center gap-space-md">
          {/* Logo temporarily hidden
          <img alt="Po'o Technologies Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ALJJyrCMjpZNIX30dtnnhT7cw6pLQSN4o-BL66pXd8fVfvNGW5WuDd3alLLrAk7ktCDXdDCq75zl48YrbMb49O00g0CyZJYeCjJr6JSiJ3kFqeOSRW4bN9ne3n6cY7WBT8369Wohblh8mpjmgsPrdVaOPkqSqJai0oJRC648ZE-Xsp_WlXL-9Ti_hzN7rFMjlQbi9d8LkrYpsMjmFJLXLnn8-BIksXz3RvkDAfu_SWjV0cHz" />
          */}
          <Link className="font-headline-sm text-headline-sm text-text-primary tracking-tight" href="/">Po&apos;o Technologies</Link>
        </div>
        <nav className="hidden md:flex items-center gap-space-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              aria-current={link.section === activeSection ? "location" : undefined}
              className={linkClass(link.section)}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center w-11 h-11 rounded-lg text-text-primary hover:bg-surface-container-low focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
          title={isDark ? "Switch to light theme" : "Switch to dark theme"}
          onClick={toggleTheme}
        >
          <Icon
            name={isDark ? "light_mode" : "dark_mode"}
            className="text-[22px]"
          />
        </button>
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-text-primary hover:bg-surface-container-low focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? "close" : "menu"} className="text-[24px]" />
        </button>
      </div>
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="md:hidden absolute top-full left-0 right-0 bg-surface-pure border-b border-border-subtle shadow-lg px-6 py-3"
          aria-label="Mobile navigation"
        >
          <div className="max-w-7xl mx-auto flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                aria-current={link.section === activeSection ? "location" : undefined}
                className={`py-3 border-b border-border-subtle last:border-0 transition-colors ${linkClass(link.section)}`}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
