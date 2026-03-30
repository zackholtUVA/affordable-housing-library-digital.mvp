"use client";

import type { ReactNode } from "react";

import { CompareProvider } from "@/lib/compare-store";
import { ThemeProvider } from "@/lib/theme";
import { UxProvider } from "@/lib/ux";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <CompareProvider>
        <UxProvider>{children}</UxProvider>
      </CompareProvider>
    </ThemeProvider>
  );
}
