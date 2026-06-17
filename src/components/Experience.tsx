import { experience } from "@/data/profile";

const dotColors: Record<string, string> = {
  brand: "bg-indigo-600 ring-indigo-600/20",
  cyan: "bg-cyan-500 ring-cyan-500/20",
  indigo: "bg-indigo-500 ring-indigo-500/20",
  emerald: "bg-emerald-500 ring-emerald-500/20",
};

const labelColors: Record<string, string> = {
  brand: "text-indigo-600 dark:text-indigo-400",
  cyan: "text-cyan-500 dark:text-cyan-300",
  indigo: "text-indigo-500 dark:text-indigo-300",
  emerald: "text-emerald-500 dark:text-emerald-300",
};

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-12">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <p className="mt-2 text-slate-700 dark:text-slate-200">
          Timeline of recent roles.
        </p>
      </div>

      <div className="mt-8 rounded-3xl border border-slate-200/70 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/40">
        <div className="relative pl-4 md:pl-10">
          <div className="absolute bottom-0 left-1 top-0 w-px bg-slate-200 dark:bg-slate-800 md:left-3" />

          <ol className="space-y-8">
            {experience.map((job) => (
              <li key={job.company} className="relative">
                <div
                  className={`absolute left-[-16px] top-1 h-4 w-4 rounded-full ring-4 md:left-[-12px] ${dotColors[job.color]}`}
                />
                <div className="md:ml-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <div>
                      <p
                        className={`text-sm font-semibold ${labelColors[job.color]}`}
                      >
                        {job.company} • {job.location}
                      </p>
                      <p className="mt-1 text-lg font-semibold">{job.role}</p>
                    </div>
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                      {job.period}
                    </p>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {job.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
