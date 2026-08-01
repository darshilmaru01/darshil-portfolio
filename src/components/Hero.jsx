import { profile, pipeline } from "../data/content";
import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-16 sm:pt-28">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_0.9fr]">
          <div>
            <p className="mb-5 font-[var(--font-display)] text-lg italic text-[var(--color-muted)]">
              Hi, I'm
            </p>

            <h1 className="font-[var(--font-display)] text-6xl leading-[0.95] tracking-tight text-[var(--color-paper)] sm:text-7xl">
              {profile.name}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-paper)]/90 sm:text-xl">
              I'm a <span className="font-medium text-[var(--color-glow)]">Data & Backend Engineer</span> building Agentic AI systems — currently at <span className="rounded-sm border border-[var(--color-line)] bg-[var(--color-ink-2)] px-2 py-0.5 font-mono text-base text-[var(--color-coral)]">Deloitte</span>, where I take document-heavy, ambiguous problems and turn them into production-grade RAG pipelines and multi-agent workflows.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
              {profile.summary.split(". ").slice(1).join(". ")}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={profile.resumeFile}
                download
                className="rounded-sm bg-[var(--color-glow)] px-5 py-2.5 font-mono text-sm font-medium text-[var(--color-ink)] transition-transform hover:-translate-y-0.5"
              >
                Resume
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
                className="inline-flex items-center rounded-sm bg-[#0A66C2] px-5 py-2.5 font-mono text-sm font-medium text-white transition-colors hover:bg-[#074a9b]"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center rounded-sm bg-[#8B5CF6] px-5 py-2.5 font-mono text-sm font-medium text-white transition-colors hover:bg-[#7C3AED]"
              >
                Email
              </a>
            </div>

            <div
              className="mt-16 flex flex-wrap items-center gap-x-2 gap-y-4 font-mono text-xs sm:text-sm"
              aria-label="Data pipeline: PDF to Extract to Validate to RAG to Audit-Ready"
            >
              {pipeline.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span
                    className="rounded-sm border px-3 py-1.5"
                    style={{
                      borderColor:
                        i === pipeline.length - 1
                          ? "var(--color-coral)"
                          : "var(--color-line)",
                      color:
                        i === pipeline.length - 1
                          ? "var(--color-coral)"
                          : "var(--color-glow)",
                    }}
                  >
                    {step}
                  </span>
                  {i < pipeline.length - 1 && (
                    <span className="text-[var(--color-line)]">→</span>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-14 flex items-center gap-3 font-mono text-base text-[var(--color-muted)] sm:text-lg">
              <span className="inline-flex h-6 w-10 overflow-hidden rounded-sm border border-[var(--color-line)] bg-[var(--color-ink)]">
                <svg viewBox="0 0 21 14" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                  <rect width="21" height="14" fill="#FF9933" />
                  <rect y="4.666" width="21" height="4.666" fill="#FFFFFF" />
                  <rect y="9.333" width="21" height="4.666" fill="#138808" />
                  <circle cx="10.5" cy="7" r="1.75" fill="#054187" />
                  <circle cx="10.5" cy="7" r="2.8" fill="none" stroke="#054187" strokeWidth="0.3" />
                  <g stroke="#054187" strokeWidth="0.25">
                    <line x1="10.5" y1="4.2" x2="10.5" y2="9.8" />
                    <line x1="7.7" y1="5.2" x2="13.3" y2="8.8" />
                    <line x1="7.7" y1="8.8" x2="13.3" y2="5.2" />
                    <line x1="6.15" y1="6.75" x2="14.85" y2="7.25" />
                    <line x1="6.15" y1="7.25" x2="14.85" y2="6.75" />
                  </g>
                </svg>
              </span>
              Based in India
            </p>
          </div>

          <div className="order-first lg:order-none">
            <div className="mx-auto max-w-sm overflow-hidden rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-ink-2)] p-1 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] sm:max-w-md">
              <div className="overflow-hidden rounded-[1.25rem] bg-[var(--color-ink)]">
                <img
                  src={heroImage}
                  alt={`${profile.name} portrait`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-[0.10] blur-3xl"
        style={{ background: "var(--color-glow)" }}
      />
    </section>
  );
}
