import { experience } from "../data/content";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[var(--color-line)]/60 px-6 py-16"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-8 font-mono text-xs text-[var(--color-glow)]">/experience</p>
        <div className="space-y-12">
          {experience.map((job) => (
            <div
              key={job.role + job.period}
              className="grid grid-cols-1 gap-4 md:grid-cols-[200px_1fr]"
            >
              <div>
                <p className="font-mono text-xs text-[var(--color-muted)]">
                  {job.period}
                </p>
                <p className="mt-1 font-mono text-xs text-[var(--color-coral)]">
                  {job.org}
                </p>
              </div>
              <div>
                <h3 className="font-[var(--font-display)] text-xl font-medium text-[var(--color-paper)] sm:text-2xl">
                  {job.role}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {job.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base"
                    >
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--color-glow)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
