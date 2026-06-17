import { education } from "@/data/profile";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-12">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
        <p className="mt-2 text-slate-700 dark:text-slate-200">
          Academic background.
        </p>
      </div>

      <div className="mt-8 rounded-3xl border border-slate-200/70 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/40">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
              {education.school}
            </p>
            <h3 className="mt-1 text-lg font-semibold">{education.degree}</h3>
          </div>
          <div className="rounded-2xl bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            {education.period}
          </div>
        </div>
      </div>
    </section>
  );
}
