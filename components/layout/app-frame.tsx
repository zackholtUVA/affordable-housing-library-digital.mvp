"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { CompareDrawer } from "@/components/compare/compare-drawer";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JumpToTop } from "@/components/ux/jump-to-top";
import { OnboardingHints } from "@/components/ux/onboarding-hints";

export function AppFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-[var(--border)] focus:bg-[var(--accent)] focus:px-3 focus:py-2 focus:text-[var(--accent-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--focus)]"
      >
        Skip to content
      </a>
      <SiteHeader />
      <OnboardingHints />
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
