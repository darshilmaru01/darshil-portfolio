import { NavLink } from "react-router-dom";
import CommandPalette from "./CommandPalette";

const links = [
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)]/60 bg-[var(--color-ink)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className="font-[var(--font-display)] text-lg text-[var(--color-paper)]"
        >
          Darshil<span className="text-[var(--color-glow)]">.</span>
        </NavLink>
        <nav className="hidden gap-6 text-sm text-[var(--color-muted)] sm:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `transition-colors hover:text-[var(--color-glow)] ${
                  isActive ? "text-[var(--color-glow)]" : ""
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <CommandPalette />
      </div>
    </header>
  );
}
