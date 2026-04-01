import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/shared/button";
import { Card } from "@/components/shared/card";

export default function NotFound() {
  return (
    <PageShell>
      <Card className="mx-auto max-w-2xl text-center">
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <p className="mt-3 text-sm text-[var(--muted)]">
          The page you requested could not be found. You can continue browsing options from the explore page.
        </p>
        <div className="mt-6">
          <Link href="/explore">
            <Button>Explore options</Button>
          </Link>
        </div>
      </Card>
    </PageShell>
  );
}
