import Link from "next/link";

import { GLOBAL_DISCLAIMER, UTILITY_LINKS } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="site-chrome-footer surface-3d mt-[var(--space-footer-top)] border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto flex w-full max-w-[92rem] flex-col gap-[max(1.2rem,var(--space-stack))] px-[var(--space-page-x)] py-[var(--space-footer-y)]">
        <p className="max-w-3xl text-sm text-[var(--muted)]">{GLOBAL_DISCLAIMER}</p>
        <nav className="flex flex-wrap items-center gap-[var(--space-stack-tight)] text-xs text-[var(--muted)]">
          {UTILITY_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-[var(--link-hover)]">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
