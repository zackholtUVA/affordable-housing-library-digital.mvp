"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { COMPARE_MAX } from "@/lib/constants";
import { MOTION_PRESET, type MotionPreset } from "@/lib/motion";
import { useCompareStore } from "@/lib/compare-store";
import { useTheme } from "@/lib/theme";
import type { CommandAction, ShortcutId, UxToast } from "@/lib/types";

type UxContextValue = {
  openCommandPalette: () => void;
  openShortcutHelp: () => void;
  closeOverlays: () => void;
  addToast: (toast: Omit<UxToast, "id">) => void;
  motion: MotionPreset;
};

const defaultUxContext: UxContextValue = {
  openCommandPalette: () => undefined,
  openShortcutHelp: () => undefined,
  closeOverlays: () => undefined,
  addToast: () => undefined,
  motion: MOTION_PRESET,
};

const UxContext = createContext<UxContextValue>(defaultUxContext);

const GO_SHORTCUT_MAP: Record<string, { href: string; id: ShortcutId; title: string }> = {
  h: { href: "/", id: "goHome", title: "Go to Home" },
  e: { href: "/explore", id: "goExplore", title: "Go to Explore" },
  c: { href: "/compare", id: "goCompare", title: "Go to Compare" },
  n: { href: "/next-steps", id: "goNextSteps", title: "Go to Next Steps" },
  b: { href: "/basics", id: "goBasics", title: "Go to Basics" },
};

function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) {
    return false;
  }
  const tag = target.tagName.toLowerCase();
  return (
    tag === "input" ||
    tag === "textarea" ||
    tag === "select" ||
    target.isContentEditable
  );
}

export function UxProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { toggleTheme, theme } = useTheme();
  const { selectedIds, clear } = useCompareStore();

  const [paletteOpen, setPaletteOpen] = useState(false);
  const [shortcutHelpOpen, setShortcutHelpOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [toasts, setToasts] = useState<UxToast[]>([]);
  const [goPrefixArmed, setGoPrefixArmed] = useState(false);
  const [progressVisible, setProgressVisible] = useState(false);
  const [progressValue, setProgressValue] = useState(0);

  const goPrefixTimerRef = useRef<number | null>(null);
  const progressTimersRef = useRef<number[]>([]);
  const isInitialPathRef = useRef(true);

  const addToast = useCallback((toast: Omit<UxToast, "id">) => {
    const nextToast: UxToast = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      durationMs: 2600,
      ...toast,
    };
    setToasts((current) => [...current, nextToast]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((item) => item.id !== nextToast.id));
    }, nextToast.durationMs);
  }, []);

  const closeOverlays = useCallback(() => {
    setPaletteOpen(false);
    setShortcutHelpOpen(false);
    setQuery("");
    setActiveIndex(0);
    window.dispatchEvent(new Event("ux:escape"));
  }, []);

  const commands = useMemo<CommandAction[]>(() => {
    const routeCommands: CommandAction[] = [
      { id: "go-home", title: "Go to Home", section: "Navigate", shortcut: "g h", run: () => router.push("/") },
      {
        id: "go-explore",
        title: "Go to Explore",
        section: "Navigate",
        shortcut: "g e",
        run: () => router.push("/explore"),
      },
      {
        id: "go-compare",
        title: "Go to Compare",
        section: "Navigate",
        shortcut: "g c",
        run: () => router.push("/compare"),
      },
      {
        id: "go-next-steps",
        title: "Go to Next Steps",
        section: "Navigate",
        shortcut: "g n",
        run: () => router.push("/next-steps"),
      },
      {
        id: "go-basics",
        title: "Go to Basics",
        section: "Navigate",
        shortcut: "g b",
        run: () => router.push("/basics"),
      },
    ];

    const actionCommands: CommandAction[] = [
      {
        id: "toggle-theme",
        title: `Switch to ${theme === "dark" ? "Light" : "Dark"} mode`,
        section: "Preferences",
        run: () => toggleTheme(),
      },
      {
        id: "clear-compare",
        title: "Clear compared options",
        section: "Actions",
        run: () => {
          clear();
          addToast({
            tone: "info",
            message: "[PLACEHOLDER: compare list cleared]",
          });
        },
      },
      {
        id: "focus-explore-search",
        title: "Focus explore search",
        section: "Actions",
        shortcut: "/",
        run: () => {
          router.push("/explore");
          window.dispatchEvent(new Event("ux:focus-explore-search"));
        },
      },
    ];

    return [...routeCommands, ...actionCommands];
  }, [addToast, clear, router, theme, toggleTheme]);

  const filteredCommands = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return commands;
    }
    return commands.filter((command) =>
      `${command.title} ${command.section} ${command.shortcut ?? ""}`
        .toLowerCase()
        .includes(normalized),
    );
  }, [commands, query]);
  const safeActiveIndex = Math.min(
    activeIndex,
    Math.max(filteredCommands.length - 1, 0),
  );

  useEffect(() => {
    if (isInitialPathRef.current) {
      isInitialPathRef.current = false;
      return;
    }

    progressTimersRef.current.forEach((timer) => window.clearTimeout(timer));
    progressTimersRef.current = [];

    const startTimer = window.setTimeout(() => {
      setProgressVisible(true);
      setProgressValue(12);

      const timerA = window.setTimeout(() => setProgressValue(62), MOTION_PRESET.fastMs);
      const timerB = window.setTimeout(() => setProgressValue(92), MOTION_PRESET.mediumMs);
      const timerC = window.setTimeout(() => {
        setProgressValue(100);
        const timerD = window.setTimeout(() => {
          setProgressVisible(false);
          setProgressValue(0);
        }, MOTION_PRESET.fastMs + 80);
        progressTimersRef.current.push(timerD);
      }, MOTION_PRESET.slowMs + 120);

      progressTimersRef.current.push(timerA, timerB, timerC);
    }, 0);

    progressTimersRef.current.push(startTimer);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const editable = isEditableTarget(event.target);

      if ((event.metaKey || event.ctrlKey) && key === "k") {
        event.preventDefault();
        setShortcutHelpOpen(false);
        setPaletteOpen(true);
        return;
      }

      if (event.shiftKey && event.key === "?") {
        event.preventDefault();
        setPaletteOpen(false);
        setShortcutHelpOpen(true);
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        closeOverlays();
        return;
      }

      if (editable && !goPrefixArmed) {
        return;
      }

      if (goPrefixArmed) {
        const routeShortcut = GO_SHORTCUT_MAP[key];
        setGoPrefixArmed(false);
        if (goPrefixTimerRef.current) {
          window.clearTimeout(goPrefixTimerRef.current);
          goPrefixTimerRef.current = null;
        }
        if (routeShortcut) {
          event.preventDefault();
          router.push(routeShortcut.href);
          addToast({
            tone: "info",
            message: `[PLACEHOLDER: shortcut used] ${routeShortcut.title}`,
            durationMs: 1800,
          });
        }
        return;
      }

      if (key === "g" && !event.metaKey && !event.ctrlKey && !event.altKey) {
        setGoPrefixArmed(true);
        goPrefixTimerRef.current = window.setTimeout(() => {
          setGoPrefixArmed(false);
        }, 1250);
        return;
      }

      if (key === "/" && pathname === "/explore") {
        event.preventDefault();
        window.dispatchEvent(new Event("ux:focus-explore-search"));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (goPrefixTimerRef.current) {
        window.clearTimeout(goPrefixTimerRef.current);
      }
      progressTimersRef.current.forEach((timer) => window.clearTimeout(timer));
    };
  }, [addToast, closeOverlays, goPrefixArmed, pathname, router]);

  const contextValue = useMemo<UxContextValue>(
    () => ({
      openCommandPalette: () => {
        setShortcutHelpOpen(false);
        setPaletteOpen(true);
      },
      openShortcutHelp: () => {
        setPaletteOpen(false);
        setShortcutHelpOpen(true);
      },
      closeOverlays,
      addToast,
      motion: MOTION_PRESET,
    }),
    [addToast, closeOverlays],
  );

  const runCommand = (command: CommandAction) => {
    command.run();
    setPaletteOpen(false);
    setQuery("");
    setActiveIndex(0);
  };

  return (
    <UxContext.Provider value={contextValue}>
      {progressVisible ? (
        <div className="pointer-events-none fixed left-0 right-0 top-0 z-[80] h-0.5 overflow-hidden">
          <div
            className="h-full bg-[var(--accent)] transition-[width] ease-[var(--motion-easing-standard)]"
            style={{ width: `${progressValue}%`, transitionDuration: `${MOTION_PRESET.mediumMs}ms` }}
          />
        </div>
      ) : null}

      {children}

      {paletteOpen ? (
        <div
          className="fixed inset-0 z-[90] flex items-start justify-center bg-black/55 p-4 pt-24 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Quick actions"
          onClick={closeOverlays}
        >
          <div
            className="shape-angular-lg surface-3d w-full max-w-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="border-b border-[var(--border)] p-4">
              <input
                autoFocus
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setActiveIndex(0);
                }}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    setActiveIndex((current) =>
                      Math.min(filteredCommands.length - 1, current + 1),
                    );
                  }
                  if (event.key === "ArrowUp") {
                    event.preventDefault();
                    setActiveIndex((current) => Math.max(0, current - 1));
                  }
                  if (event.key === "Enter") {
                    event.preventDefault();
                    const selected = filteredCommands[safeActiveIndex];
                    if (selected) {
                      runCommand(selected);
                    }
                  }
                }}
                placeholder="[PLACEHOLDER: search actions, pages, and shortcuts]"
                className="shape-angular-md surface-3d h-11 w-full border border-[var(--border)] bg-[var(--surface-2)] px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
              />
            </div>
            <div className="max-h-96 overflow-y-auto p-3">
              {filteredCommands.map((command, index) => (
                <button
                  key={command.id}
                  type="button"
                  onClick={() => runCommand(command)}
                  className={`shape-angular-sm surface-3d mb-2 flex w-full items-center justify-between px-3 py-2 text-left text-sm transition-colors ${
                    index === safeActiveIndex
                      ? "bg-[var(--surface-3)] text-[var(--text)]"
                      : "text-[var(--muted)] hover:bg-[var(--surface-2)]"
                  }`}
                >
                  <span>
                    {command.title}
                    <span className="ml-2 text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                      {command.section}
                    </span>
                  </span>
                  {command.shortcut ? (
                    <span className="text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                      {command.shortcut}
                    </span>
                  ) : null}
                </button>
              ))}
              {filteredCommands.length === 0 ? (
                <p className="px-3 py-4 text-sm text-[var(--muted)]">
                  [PLACEHOLDER: no matching command]
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      {shortcutHelpOpen ? (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Keyboard shortcuts"
          onClick={closeOverlays}
        >
          <div
            className="shape-angular-lg surface-3d w-full max-w-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 className="text-xl font-semibold">Keyboard shortcuts</h2>
            <ul className="mt-5 space-y-3 text-sm text-[var(--muted)]">
              <li>
                <strong className="text-[var(--text)]">Cmd/Ctrl + K</strong> open command palette
              </li>
              <li>
                <strong className="text-[var(--text)]">Shift + ?</strong> open shortcut help
              </li>
              <li>
                <strong className="text-[var(--text)]">g h / g e / g c / g n / g b</strong> quick navigation
              </li>
              <li>
                <strong className="text-[var(--text)]">Esc</strong> close overlays
              </li>
              <li>
                <strong className="text-[var(--text)]">/</strong> focus explore search on Explore page
              </li>
            </ul>
          </div>
        </div>
      ) : null}

      <div className="pointer-events-none fixed bottom-6 right-4 z-[85] flex w-[min(92vw,360px)] flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`shape-angular-md surface-3d pointer-events-auto min-w-0 break-words border px-4 py-3 text-sm shadow-lg transition-all ${
              toast.tone === "warning"
                ? "border-[color-mix(in_oklab,var(--danger)_50%,var(--border))] bg-[color-mix(in_oklab,var(--danger)_20%,var(--surface))]"
                : toast.tone === "success"
                  ? "border-[color-mix(in_oklab,var(--accent)_42%,var(--border))] bg-[var(--surface)]"
                  : "border-[var(--border)] bg-[var(--surface)]"
            }`}
          >
            {toast.message}
          </div>
        ))}
      </div>

      {goPrefixArmed ? (
        <div className="shape-angular-sm surface-3d pointer-events-none fixed bottom-6 left-4 z-[85] border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
          g ...
        </div>
      ) : null}

      {selectedIds.length >= COMPARE_MAX ? (
        <div className="shape-angular-sm surface-3d pointer-events-none fixed bottom-24 left-1/2 z-[84] -translate-x-1/2 border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--muted)]">
          [PLACEHOLDER: compare limit reached]
        </div>
      ) : null}
    </UxContext.Provider>
  );
}

export function useUx(): UxContextValue {
  return useContext(UxContext);
}
