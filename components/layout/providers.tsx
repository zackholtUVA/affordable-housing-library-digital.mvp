"use client";

import type { ReactNode } from "react";

import { CompareProvider } from "@/lib/compare-store";
import { SessionContextProvider } from "@/lib/session-context";
import { ThemeProvider } from "@/lib/theme";
import { UxProvider } from "@/lib/ux";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <CompareProvider>
        <SessionContextProvider>
          <UxProvider>{children}</UxProvider>
        </SessionContextProvider>
      </CompareProvider>
    </ThemeProvider>
  );
}
