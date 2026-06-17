import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
      <div className="rounded-3xl border border-slate-200/70 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/40">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-2 max-w-2xl text-slate-700 dark:text-slate-200">
              Want to work together? Send a message and I&apos;ll respond
              promptly.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(99,102,241,.25),0_12px_40px_rgba(99,102,241,.18)] transition hover:brightness-110"
            >
              ✉️ Email
            </a>
            <a
              href={`tel:${profile.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900/30 dark:text-slate-100"
            >
              ☎ Call
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900/30 dark:text-slate-100"
            >
              in LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { label: "PHONE", value: profile.phone },
            { label: "EMAIL", value: profile.email },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white/50 p-4 ring-1 ring-slate-200/60 dark:bg-slate-950/30 dark:ring-slate-800/60"
            >
              <p className="text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
