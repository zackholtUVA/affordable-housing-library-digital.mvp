import Link from "next/link";

type BreadcrumbItem = {
  href?: string;
  label: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-10 text-sm">
      <ol className="flex min-w-0 flex-wrap items-center gap-3.5 text-[var(--muted)]">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="inline-flex min-w-0 items-center gap-3">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {item.href ? (
              <Link href={item.href} className="hover:text-[var(--text)]">
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--text)]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
