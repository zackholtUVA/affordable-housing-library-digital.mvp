"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Home, Menu } from "lucide-react";

import { APP_NAME, NAV_ITEMS, getActiveNavHref } from "@/lib/constants";
import { useUx } from "@/lib/ux";
import { cn } from "@/lib/utils";

const controlBaseClassName =
  "shape-angular-sm surface-3d surface-3d-interactive inline-flex min-h-[var(--control-min-h-sm)] min-w-0 items-center justify-center gap-2 border border-[var(--border)] px-3.5 py-2 text-sm font-medium tracking-[0.01em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { openShortcutHelp } = useUx();

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);
    window.addEventListener("ux:escape", closeMenu);
    return () => window.removeEventListener("ux:escape", closeMenu);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const menuElement = menuRef.current;
    if (!menuElement) {
      return;
    }

    const focusable = Array.from(
      menuElement.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])",
      ),
    );

    focusable[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="surface-3d sticky top-0 z-40 border-b border-[color-mix(in_oklab,var(--border)_84%,transparent)] bg-[color-mix(in_oklab,var(--background)_92%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[var(--header-height-mobile)] w-full max-w-[92rem] items-center justify-between gap-3 px-[var(--space-page-x)] py-3 md:min-h-[var(--header-height-desktop)]">
        <Link
          href="/"
          className="group inline-flex min-w-0 items-center gap-2 rounded-md px-1 py-1 text-sm font-semibold tracking-[0.015em] text-[var(--text)] underline decoration-transparent underline-offset-4 transition-colors hover:text-[var(--link-hover)] hover:decoration-[var(--link-hover)] md:text-base"
        >
          <span className="shape-square inline-flex h-8 w-8 shrink-0 items-center justify-center border border-[var(--border)] bg-[var(--surface-2)] text-[var(--link)] transition-colors group-hover:bg-[var(--surface-3)]">
            <Home aria-hidden="true" className="h-4 w-4" />
          </span>
          <span className="min-w-0 break-words">{APP_NAME}</span>
        </Link>

        <nav className="hidden min-w-0 items-center gap-2 xl:flex xl:gap-3" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const active = getActiveNavHref(pathname) === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  controlBaseClassName,
                  active
                    ? "border-[color-mix(in_oklab,var(--accent)_56%,var(--border))] bg-[var(--accent)] text-[var(--accent-foreground)] shadow-[var(--surface-depth-hover)]"
                    : "bg-[var(--surface)] text-[var(--muted)] hover:bg-[var(--surface-2)] hover:text-[var(--text)]",
                )}
                aria-current={active ? "page" : undefined}
              >
                <span className="block min-w-0 break-words">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <button
            type="button"
            onClick={openShortcutHelp}
            className={cn(controlBaseClassName, "bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--surface-2)] hover:text-[var(--link-hover)]")}
            aria-label="Open keyboard shortcuts help"
          >
            Help
          </button>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <button
            type="button"
            onClick={() => {
              setIsMenuOpen(false);
              openShortcutHelp();
            }}
            className={cn(controlBaseClassName, "bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--surface-2)] hover:text-[var(--link-hover)]")}
            aria-label="Open keyboard shortcuts help"
          >
            Help
          </button>
          <button
            ref={menuButtonRef}
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            className={cn(controlBaseClassName, "min-w-[4.75rem] bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--surface-2)] hover:text-[var(--link-hover)]")}
          >
            <Menu aria-hidden="true" className="h-4 w-4" />
            <span>Menu</span>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div
          id="mobile-nav"
          ref={menuRef}
          className="surface-3d overflow-hidden border-t border-[var(--border)] transition-[max-height,opacity] duration-300 ease-[var(--motion-easing-standard)] xl:hidden"
        >
          <nav className="mx-auto flex max-w-[92rem] flex-col gap-3 px-[var(--space-page-x)] py-5" aria-label="Mobile">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  controlBaseClassName,
                  "w-full justify-start px-4 py-2.5",
                  getActiveNavHref(pathname) === item.href
                    ? "border-[color-mix(in_oklab,var(--accent)_56%,var(--border))] bg-[var(--accent)] text-[var(--accent-foreground)] shadow-[var(--surface-depth-hover)]"
                    : "bg-[var(--surface)] text-[var(--muted)] hover:bg-[var(--surface-2)] hover:text-[var(--text)]",
                )}
                aria-current={getActiveNavHref(pathname) === item.href ? "page" : undefined}
              >
                <span className="block min-w-0 break-words">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
