"use client";

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
      className="shape-angular-md surface-3d surface-3d-interactive fixed bottom-6 left-6 z-[75] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)] hover:bg-[var(--surface-2)]"
      aria-label="Jump to top"
    >
      Top
    </button>
  );
}
