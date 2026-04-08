"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function JumpToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="shape-angular-md surface-3d surface-3d-interactive fixed bottom-[calc(var(--floating-ui-clearance)+1rem)] right-4 z-[75] inline-flex min-h-[var(--control-min-h-md)] items-center gap-2 border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold text-[var(--text)] hover:bg-[var(--surface-2)] hover:text-[var(--link-hover)] sm:right-5"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp size={16} aria-hidden="true" />
      <span>Back to top</span>
    </button>
  );
}
