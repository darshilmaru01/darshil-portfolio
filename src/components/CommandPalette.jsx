import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useNavigate } from "react-router-dom";
import { profile } from "../data/content";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    function onKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function go(path) {
    navigate(path);
    setOpen(false);
  }

  function openExternal(url) {
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-sm border border-[var(--color-line)] px-3 py-1.5 font-mono text-xs text-[var(--color-muted)] transition-colors hover:border-[var(--color-glow)] hover:text-[var(--color-glow)]"
      >
        Search
        <kbd className="rounded-sm bg-[var(--color-ink-3)] px-1.5 py-0.5 text-[10px]">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div className="cmdk-overlay" onClick={() => setOpen(false)}>
          <div
            className="mx-auto mt-24 max-w-lg px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Command
              label="Command palette"
              className="overflow-hidden rounded-md border border-[var(--color-line)] bg-[var(--color-ink-2)] shadow-2xl"
            >
              <Command.Input
                autoFocus
                placeholder="Jump to a page or action…"
                className="w-full border-b border-[var(--color-line)] bg-transparent px-4 py-3 font-mono text-sm text-[var(--color-paper)] outline-none placeholder:text-[var(--color-muted)]"
              />
              <Command.List className="max-h-72 overflow-y-auto p-2">
                <Command.Empty className="px-3 py-6 text-center text-sm text-[var(--color-muted)]">
                  No results.
                </Command.Empty>

                <Command.Group
                  heading="Navigate"
                  className="px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)] [&_[cmdk-group-heading]]:px-1 [&_[cmdk-group-heading]]:py-1"
                >
                  <Command.Item
                    onSelect={() => go("/")}
                    className="cursor-pointer rounded-sm px-3 py-2 text-sm text-[var(--color-paper)] aria-selected:bg-[var(--color-ink-3)] aria-selected:text-[var(--color-glow)]"
                  >
                    Home
                  </Command.Item>
                  <Command.Item
                    onSelect={() => go("/experience")}
                    className="cursor-pointer rounded-sm px-3 py-2 text-sm text-[var(--color-paper)] aria-selected:bg-[var(--color-ink-3)] aria-selected:text-[var(--color-glow)]"
                  >
                    Experience
                  </Command.Item>
                  <Command.Item
                    onSelect={() => go("/projects")}
                    className="cursor-pointer rounded-sm px-3 py-2 text-sm text-[var(--color-paper)] aria-selected:bg-[var(--color-ink-3)] aria-selected:text-[var(--color-glow)]"
                  >
                    Projects
                  </Command.Item>
                </Command.Group>

                <Command.Group
                  heading="Actions"
                  className="px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)] [&_[cmdk-group-heading]]:px-1 [&_[cmdk-group-heading]]:py-1"
                >
                  <Command.Item
                    onSelect={() => openExternal(profile.resumeFile)}
                    className="cursor-pointer rounded-sm px-3 py-2 text-sm text-[var(--color-paper)] aria-selected:bg-[var(--color-ink-3)] aria-selected:text-[var(--color-glow)]"
                  >
                    Download résumé
                  </Command.Item>
                  <Command.Item
                    onSelect={() => openExternal(profile.linkedin)}
                    className="cursor-pointer rounded-sm px-3 py-2 text-sm text-[var(--color-paper)] aria-selected:bg-[var(--color-ink-3)] aria-selected:text-[var(--color-glow)]"
                  >
                    Open LinkedIn
                  </Command.Item>
                  <Command.Item
                    onSelect={() => openExternal(`mailto:${profile.email}`)}
                    className="cursor-pointer rounded-sm px-3 py-2 text-sm text-[var(--color-paper)] aria-selected:bg-[var(--color-ink-3)] aria-selected:text-[var(--color-glow)]"
                  >
                    Send an email
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}
