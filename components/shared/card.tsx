import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
};

export function Card({ children, className, as = "div" }: CardProps) {
  const Component = as;
  return (
    <Component
      className={cn(
        "rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-card)]",
        className,
      )}
    >
      {children}
    </Component>
  );
}

