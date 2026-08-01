import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <section className="border-t border-[var(--color-line)]/60 px-6 py-16">
        <div className="mx-auto flex max-w-5xl flex-wrap gap-4">
          <Link
            to="/experience"
            className="group flex flex-1 min-w-[220px] items-center justify-between rounded-md border border-[var(--color-line)] bg-[var(--color-ink-2)] px-6 py-5 transition-colors hover:border-[var(--color-glow)]"
          >
            <span>
              <span className="block font-[var(--font-display)] text-lg text-[var(--color-paper)]">
                Experience
              </span>
              <span className="mt-1 block font-mono text-xs text-[var(--color-muted)]">
                Deloitte — timeline & credentials
              </span>
            </span>
            <span className="font-mono text-[var(--color-glow)] transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            to="/projects"
            className="group flex flex-1 min-w-[220px] items-center justify-between rounded-md border border-[var(--color-line)] bg-[var(--color-ink-2)] px-6 py-5 transition-colors hover:border-[var(--color-glow)]"
          >
            <span>
              <span className="block font-[var(--font-display)] text-lg text-[var(--color-paper)]">
                Projects
              </span>
              <span className="mt-1 block font-mono text-xs text-[var(--color-muted)]">
                Agentic AI & audit automation work
              </span>
            </span>
            <span className="font-mono text-[var(--color-glow)] transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
