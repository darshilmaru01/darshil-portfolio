import { projects } from "../data/content";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-[var(--color-line)]/60 px-6 py-16"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-8 font-mono text-xs text-[var(--color-glow)]">/projects</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.name}
              className="rounded-md border border-[var(--color-line)] bg-[var(--color-ink-2)] p-6 transition-colors hover:border-[var(--color-coral)]/60"
            >
              <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--color-paper)]">
                {p.name}
              </h3>
              <p className="mt-1 font-mono text-xs text-[var(--color-coral)]">
                {p.tag}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-sm border border-[var(--color-line)] px-2 py-1 font-mono text-[11px] text-[var(--color-glow)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
