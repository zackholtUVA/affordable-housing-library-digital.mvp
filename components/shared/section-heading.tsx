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
    <header className="space-y-3">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-base text-[var(--muted)] md:text-lg">{description}</p>
      ) : null}
    </header>
  );
}

