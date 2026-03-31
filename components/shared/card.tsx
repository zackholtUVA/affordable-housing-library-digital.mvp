import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
  interactive?: boolean;
};

export function Card({
  children,
  className,
  as = "div",
  interactive = true,
}: CardProps) {
  const Component = as;
  return (
    <Component
      className={cn(
        "rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-[var(--space-card-pad)] shadow-[var(--shadow-card)]",
        interactive ? "interactive-card" : "",
        className,
      )}
    >
      {children}
    </Component>
  );
}
