import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/shared/button";
import { Card } from "@/components/shared/card";

const recoveryLinks = [
  { href: "/", label: "Home" },
  { href: "/get-started", label: "Get started" },
  { href: "/explore", label: "Browse ADUs" },
  { href: "/compare", label: "Compare" },
  { href: "/basics", label: "Learn the basics" },
  { href: "/next-steps", label: "Next steps" },
] as const;

export default function NotFound() {
  return (
    <PageShell>
      <Card className="mx-auto max-w-2xl space-y-[var(--space-stack)] text-center">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
            404
          </p>
          <h1 className="text-2xl font-semibold">Page not found</h1>
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            The page you requested could not be found. Start over from the home page or jump
            directly to a key step in the flow.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/explore">
            <Button>Explore options</Button>
          </Link>
          <Link href="/">
            <Button variant="secondary">Go home</Button>
          </Link>
        </div>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          {recoveryLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant="ghost"
                className="w-full justify-center bg-[var(--surface)]"
                size="sm"
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
      </Card>
    </PageShell>
  );
}
