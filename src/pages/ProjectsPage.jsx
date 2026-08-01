import Projects from "../components/Projects";

export default function ProjectsPage() {
  return (
    <>
      <div className="px-6 pt-16">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-[var(--font-display)] text-4xl text-[var(--color-paper)]">
            Projects
          </h1>
        </div>
      </div>
      <Projects />
    </>
  );
}
