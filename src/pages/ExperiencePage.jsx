import Experience from "../components/Experience";
import Credentials from "../components/Credentials";

export default function ExperiencePage() {
  return (
    <>
      <div className="px-6 pt-16">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-[var(--font-display)] text-4xl text-[var(--color-paper)]">
            Experience
          </h1>
        </div>
      </div>
      <Experience />
      <Credentials />
    </>
  );
}
