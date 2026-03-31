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
    <header className="space-y-[var(--space-stack)]">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance break-words text-3xl font-semibold leading-[1.08] tracking-tight md:text-[2.9rem]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-5xl break-words text-base leading-relaxed text-[var(--muted)] md:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
