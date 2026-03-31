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
        "shape-angular-lg surface-3d min-w-0 break-words border bg-[var(--surface)] p-[var(--space-card-pad)]",
        interactive ? "surface-3d-interactive interactive-card" : "",
        className,
      )}
    >
      {children}
    </Component>
  );
}
