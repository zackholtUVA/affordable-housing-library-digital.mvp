"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { APP_NAME, NAV_ITEMS } from "@/lib/constants";
import { Button } from "@/components/shared/button";
import { useUx } from "@/lib/ux";
import { cn } from "@/lib/utils";

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
      <div className="mx-auto flex h-[var(--header-height-mobile)] w-full max-w-[92rem] items-center justify-between px-[var(--space-page-x)] md:h-[var(--header-height-desktop)]">
        <Link href="/" className="text-sm font-semibold tracking-[0.015em] md:text-base">
          {APP_NAME}
        </Link>

        <nav className="hidden items-center gap-3 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "shape-angular-sm surface-3d relative px-4 py-2.5 text-sm transition-colors",
                  active
                    ? "bg-[var(--surface-2)] text-[var(--text)]"
                    : "text-[var(--muted)] hover:bg-[var(--surface-2)] hover:text-[var(--text)]",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-2 -bottom-[1px] h-[2px] bg-[var(--accent)] transition-transform duration-200",
                    active ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="ghost"
            size="sm"
            onClick={openShortcutHelp}
            className="h-9 px-3 text-xs"
            aria-label="Open keyboard shortcuts help"
          >
            Help
          </Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setIsMenuOpen(false);
              openShortcutHelp();
            }}
            className="h-9 px-3 text-xs"
            aria-label="Open keyboard shortcuts help"
          >
            Help
          </Button>
          <Button
            ref={menuButtonRef}
            variant="secondary"
            size="sm"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            Menu
          </Button>
        </div>
      </div>

      {isMenuOpen ? (
        <div
          id="mobile-nav"
          ref={menuRef}
          className="surface-3d overflow-hidden border-t border-[var(--border)] transition-[max-height,opacity] duration-300 ease-[var(--motion-easing-standard)] md:hidden"
        >
          <nav className="mx-auto flex max-w-[92rem] flex-col gap-3 px-[var(--space-page-x)] py-5" aria-label="Mobile">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "shape-angular-sm surface-3d px-4 py-2.5 text-sm transition-colors",
                  pathname === item.href
                    ? "bg-[var(--surface-2)] text-[var(--text)]"
                    : "text-[var(--muted)] hover:bg-[var(--surface-2)]",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
