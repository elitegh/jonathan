"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-110px 0px -60% 0px", threshold: [0.1, 0.2, 0.35] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const linkClass = (href: string) => {
    const id = href.slice(1);
    const active = activeSection === id;
    return [
      "rounded-xl px-3 py-2 text-sm font-medium transition",
      active
        ? "bg-indigo-500/10 font-semibold text-indigo-600 dark:text-indigo-400"
        : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800",
    ].join(" ");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/65">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="group inline-flex items-center gap-2">
          <img
            src="/bird.svg"
            alt={`${profile.name} logo`}
            className="h-10 w-10 rounded-xl bg-indigo-500/10 p-1 shadow-[0_0_0_1px_rgba(99,102,241,.25),0_12px_40px_rgba(99,102,241,.18)]"
          />
          <span className="hidden text-sm font-semibold sm:inline">
            JT
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 shadow-sm hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200 dark:hover:bg-slate-900 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span className="text-lg">{mobileOpen ? "✕" : "☰"}</span>
          </button>

          <ThemeToggle />

          <a
            href="#contact"
            className="hidden rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(99,102,241,.25),0_12px_40px_rgba(99,102,241,.18)] transition hover:brightness-110 md:inline-flex"
          >
            Hire Me
          </a>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/70 md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={linkClass(link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
