import { projects } from "@/data/profile";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        <p className="mt-2 text-slate-700 dark:text-slate-200">
          Selected Python, Node.js, AWS, Kafka, and React work across healthcare, enterprise operations, consulting, and backend automation.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className={[
              "group rounded-3xl border border-slate-200/70 bg-white/60 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(99,102,241,.25),0_12px_40px_rgba(99,102,241,.18)] dark:border-slate-800/70 dark:bg-slate-950/40",
              project.featured ? "md:col-span-2" : "",
            ].join(" ")}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-lg font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
              </div>
              <span className="shrink-0 rounded-2xl bg-indigo-500/10 px-3 py-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                {project.badge}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/5 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900/30 dark:text-slate-100"
                >
                  View Demo ↗
                </a>
              )}
              <a
                href={project.source}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Source →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
