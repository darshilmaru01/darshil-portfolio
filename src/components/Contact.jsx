import { profile } from "../data/content";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="border-t border-[var(--color-line)]/60 px-6 py-16"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-6 font-mono text-xs text-[var(--color-glow)]">/contact</p>
        <h2 className="font-[var(--font-display)] text-3xl text-[var(--color-paper)] sm:text-4xl">
          Let's build something reliable.
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-sm bg-[var(--color-coral)] px-5 py-2.5 font-mono text-sm font-medium text-[var(--color-ink)] transition-transform hover:-translate-y-0.5"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="rounded-sm border border-[var(--color-line)] px-5 py-2.5 font-mono text-sm text-[var(--color-paper)] transition-colors hover:border-[var(--color-glow)] hover:text-[var(--color-glow)]"
          >
            {profile.phone}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-[var(--color-line)] px-5 py-2.5 font-mono text-sm text-[var(--color-paper)] transition-colors hover:border-[var(--color-glow)] hover:text-[var(--color-glow)]"
          >
            LinkedIn ↗
          </a>
          <a
            href={profile.resumeFile}
            download
            className="rounded-sm border border-[var(--color-line)] px-5 py-2.5 font-mono text-sm text-[var(--color-paper)] transition-colors hover:border-[var(--color-glow)] hover:text-[var(--color-glow)]"
          >
            Resume ↓
          </a>
        </div>
        <p className="mt-14 font-mono text-[11px] text-[var(--color-line)]">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
