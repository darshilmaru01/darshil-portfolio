import { certifications, awards, education } from "../data/content";

export default function Credentials() {
  return (
    <section className="border-t border-[var(--color-line)]/60 px-6 py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-3">
        <div>
          <p className="mb-4 font-mono text-xs text-[var(--color-glow)]">
            /certifications
          </p>
          {certifications.map((c) => (
            <div key={c.title} className="mb-3">
              <p className="text-sm text-[var(--color-paper)]">{c.title}</p>
              <p className="font-mono text-xs text-[var(--color-muted)]">
                {c.org}
              </p>
              {c.url && (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[var(--color-glow)] hover:text-[var(--color-paper)]"
                >
                  View certification
                </a>
              )}
            </div>
          ))}
        </div>
        <div>
          <p className="mb-4 font-mono text-xs text-[var(--color-glow)]">/awards</p>
          {awards.map((a) => (
            <div key={a.title} className="mb-3">
              <p className="text-sm text-[var(--color-paper)]">{a.title}</p>
              <p className="font-mono text-xs text-[var(--color-muted)]">{a.org}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="mb-4 font-mono text-xs text-[var(--color-glow)]">/education</p>
          {education.map((item) => (
            <div key={`${item.school}-${item.period}`} className="mb-4">
              <p className="text-sm text-[var(--color-paper)]">{item.degree}</p>
              <p className="font-mono text-xs text-[var(--color-muted)]">
                {item.school}
              </p>
              <p className="font-mono text-xs text-[var(--color-muted)]">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
