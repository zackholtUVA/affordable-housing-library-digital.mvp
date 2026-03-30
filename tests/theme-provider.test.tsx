import { act, renderHook, waitFor } from "@testing-library/react";
import type { ReactNode } from "react";

import { THEME_STORAGE_KEY } from "@/lib/constants";
import { ThemeProvider, useTheme } from "@/lib/theme";

function wrapper({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

describe("ThemeProvider", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.dataset.theme = "";
  });

  it("defaults to dark and toggles to light with persistence", async () => {
    const { result } = renderHook(() => useTheme(), { wrapper });

    await waitFor(() => {
      expect(result.current.theme).toBe("dark");
      expect(document.documentElement.dataset.theme).toBe("dark");
    });

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe("light");
    expect(document.documentElement.dataset.theme).toBe("light");
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe("light");
  });
});

