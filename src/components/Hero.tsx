"use client";

import { useState } from "react";
import { focusAreas, profile, skills } from "@/data/profile";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-28 sm:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {profile.available && (
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/50 dark:text-slate-200">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Available for full-time and consulting
              </div>
            )}

            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-xl font-medium text-indigo-600 dark:text-indigo-400">
              {profile.title}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700 dark:text-slate-200 sm:text-lg">
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                Python
              </span>
              {' + '}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                Node.js
              </span>
              {' backend engineer with '}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                AWSs
              </span>
              {', '}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                Kafka
              </span>
              {', and '}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                React
              </span>
              {'.'}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(99,102,241,.25),0_12px_40px_rgba(99,102,241,.18)] transition hover:brightness-110 dark:bg-white dark:text-slate-900"
              >
                ✉️ Email me
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-white dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-100"
              >
                ↗ GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-white dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-100"
              >
                in LinkedIn
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-4 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/40">
                <p className="text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">
                  LOCATION
                </p>
                <p className="mt-1 text-sm font-medium">{profile.location}</p>
              </div>
              <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-4 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/40">
                <p className="text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">
                  CONTACT
                </p>
                <p className="mt-1 text-sm font-medium">{profile.phone}</p>
                <div className="mt-2 flex items-center gap-2">
                  <p className="mt-1 text-sm font-medium">{profile.email}</p>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900/30 dark:text-slate-100"
                  >
                    Copy Email
                  </button>
                  {copied && (
                    <span className="text-sm text-emerald-600 dark:text-emerald-400">
                      Copied!
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200/70 bg-white/60 p-5 shadow-sm backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/40">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">
                    FOCUS AREAS
                  </p>
                  <h2 className="mt-1 text-lg font-semibold">What I deliver</h2>
                </div>
                <span className="rounded-2xl bg-indigo-500/10 px-3 py-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  Senior
                </span>
              </div>

              <ul className="mt-4 space-y-3">
                {focusAreas.map((area) => (
                  <li key={area.title} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                      {area.icon}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{area.title}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {area.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-2xl border border-slate-200/70 bg-white/50 p-4 dark:border-slate-800/70 dark:bg-slate-950/40">
                <p className="text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">
                  TECH STACK
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
