import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="space-y-[max(0.9rem,var(--space-stack))]">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold leading-[1.12] tracking-tight md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-4xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
