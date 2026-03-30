import Link from "next/link";

import { Button } from "@/components/shared/button";
import { Card } from "@/components/shared/card";

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  secondaryActionLabel?: string;
  secondaryActionHref?: string;
  onAction?: () => void;
};

export function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
  secondaryActionLabel,
  secondaryActionHref,
  onAction,
}: EmptyStateProps) {
  return (
    <Card className="text-center">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mx-auto mt-2 max-w-xl text-sm text-[var(--muted)]">{description}</p>
      {actionLabel || secondaryActionLabel ? (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {actionHref ? (
            <Link href={actionHref}>
              <Button>{actionLabel}</Button>
            </Link>
          ) : (
            <Button onClick={onAction}>{actionLabel}</Button>
          )}

          {secondaryActionLabel && secondaryActionHref ? (
            <Link href={secondaryActionHref}>
              <Button variant="secondary">{secondaryActionLabel}</Button>
            </Link>
          ) : null}
        </div>
      ) : null}
    </Card>
  );
}
