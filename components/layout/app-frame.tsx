"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { CompareDrawer } from "@/components/compare/compare-drawer";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JumpToTop } from "@/components/ux/jump-to-top";
import { APP_NAME, JOURNEY_STEPS, getJourneyStepIndex, getRouteTitle } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function AppFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const journeyIndex = getJourneyStepIndex(pathname);
  const isJourneyRoute = journeyIndex >= 0;

  useEffect(() => {
    const routeTitle = getRouteTitle(pathname);
    document.title = routeTitle === APP_NAME ? APP_NAME : `${routeTitle} | ${APP_NAME}`;
  }, [pathname]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-[var(--border)] focus:bg-[var(--accent)] focus:px-3 focus:py-2 focus:text-[var(--accent-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-strong)]"
      >
        Skip to content
      </a>
      <SiteHeader />
      {isJourneyRoute ? (
        <nav
          aria-label="Journey progress"
          className="border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--surface)_88%,transparent)]"
        >
          <div className="mx-auto flex w-full max-w-[92rem] flex-col gap-2 px-[var(--space-page-x)] py-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
              <span>Journey</span>
              <span className="text-[var(--text)]">
                {journeyIndex + 1} of {JOURNEY_STEPS.length}
              </span>
              <span aria-hidden="true">•</span>
              <span className="normal-case tracking-normal text-[var(--text)]">
                {JOURNEY_STEPS[journeyIndex]?.label ?? "In progress"}
              </span>
            </div>
            <ol className="flex min-w-0 gap-2 overflow-x-auto pb-1">
              {JOURNEY_STEPS.map((step, index) => {
                const state =
                  index < journeyIndex ? "complete" : index === journeyIndex ? "current" : "upcoming";

                return (
                  <li key={step.href} className="shrink-0">
                    <span
                      className={cn(
                        "shape-angular-sm inline-flex min-h-8 items-center whitespace-nowrap border px-3 py-1.5 text-xs font-semibold transition-colors",
                        state === "complete"
                          ? "border-[color-mix(in_oklab,var(--accent)_32%,var(--border))] bg-[color-mix(in_oklab,var(--accent)_14%,var(--surface))] text-[var(--text)]"
                          : state === "current"
                            ? "border-[color-mix(in_oklab,var(--accent)_56%,var(--border))] bg-[var(--accent)] text-[var(--accent-foreground)]"
                            : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]",
                      )}
                    >
                      <span className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded-full border border-current text-[10px] leading-none">
                        {index + 1}
                      </span>
                      {step.label}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </nav>
      ) : null}
      <main id="main-content" className="flex-1">
        <div key={pathname} className="route-content-enter">
          {children}
        </div>
      </main>
      <SiteFooter />
      <CompareDrawer />
      <JumpToTop />
    </>
  );
}
