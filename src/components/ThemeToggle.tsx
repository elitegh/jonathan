"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 shadow-sm transition hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200 dark:hover:bg-slate-900"
      aria-label="Toggle light and dark mode"
    >
      <span className="text-lg" aria-hidden="true">
        {theme === "dark" ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
