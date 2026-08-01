import { skills } from "../data/content";

export default function Skills() {
  return (
    <section className="border-t border-[var(--color-line)]/60 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-8 font-mono text-xs text-[var(--color-glow)]">/skills</p>
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.label}>
              <h3 className="mb-3 font-[var(--font-display)] text-sm font-semibold text-[var(--color-coral)]">
                {group.label}
              </h3>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-[var(--color-muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
