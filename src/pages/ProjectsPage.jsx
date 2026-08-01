import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <>
      <div className="px-6 pt-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              aria-label="Go back"
              className="rounded-sm border border-[var(--color-line)] bg-[var(--color-ink-2)] px-3 py-1 text-sm text-[var(--color-paper)] hover:border-[var(--color-glow)]"
            >
              ← Back
            </button>
            <h1 className="font-[var(--font-display)] text-4xl text-[var(--color-paper)]">
              Projects
            </h1>
          </div>
        </div>
      </div>
      <Projects />
    </>
  );
}
