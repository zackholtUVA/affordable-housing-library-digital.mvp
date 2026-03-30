import Link from "next/link";

import { GLOBAL_DISCLAIMER, UTILITY_LINKS } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 md:px-6">
        <p className="max-w-3xl text-sm text-[var(--muted)]">{GLOBAL_DISCLAIMER}</p>
        <nav className="flex flex-wrap items-center gap-4 text-xs text-[var(--muted)]">
          {UTILITY_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-[var(--text)]">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

