export function About() {
  const cards = [
    {
      title: "Strengths",
      description:
        "Backend architecture, API design, distributed services, workflow automation, and performance optimization.",
    },
    {
      title: "Working Style",
      description:
        "Clear communication, pragmatic technical decisions, strong ownership, and a focus on maintainable production systems.",
    },
    {
      title: "What I Optimize",
      description:
        "API latency, service reliability, data workflows, observability, and backend delivery speed.",
    },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-2 max-w-2xl text-slate-700 dark:text-slate-200">
            I&apos;m senior software engineer focused on building scalable backend systems, distributed APIs, and event-driven services with Python, Node.js, AWS, Kafka, and React-supported dashboards.
          </p>
        </div>
        <div className="hidden items-center gap-2 rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-3 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/40 sm:flex">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            Backend systems
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Python + Node.js
          </span>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-3xl border border-slate-200/70 bg-white/60 p-5 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/40"
          >
            <p className="text-sm font-semibold">{card.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
