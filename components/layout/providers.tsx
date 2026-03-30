"use client";

import type { ReactNode } from "react";

import { CompareProvider } from "@/lib/compare-store";
import { ThemeProvider } from "@/lib/theme";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <CompareProvider>{children}</CompareProvider>
    </ThemeProvider>
  );
}

