export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-10 pt-4">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-3 border-t border-slate-200/70 pt-6 text-sm text-slate-600 dark:border-slate-800/70 dark:text-slate-300 md:flex-row md:items-center">
          <p>© {year} Jonathan Trick. Built with Next.js & Tailwind CSS.</p>
          <p className="text-slate-500 dark:text-slate-400">
            Light / Dark mode included.
          </p>
        </div>
      </div>
    </footer>
  );
}
