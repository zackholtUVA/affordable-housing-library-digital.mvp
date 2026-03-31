import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className }: PageShellProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[86rem] px-[var(--space-page-x)] pb-[calc(var(--space-page-y)*1.4)] pt-[var(--space-page-y)]",
        className,
      )}
    >
      <div className="page-reveal-flow">{children}</div>
    </div>
  );
}
