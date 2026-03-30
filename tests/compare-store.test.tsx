import { act, renderHook } from "@testing-library/react";
import type { ReactNode } from "react";

import { COMPARE_MAX } from "@/lib/constants";
import { CompareProvider, useCompareStore } from "@/lib/compare-store";

function wrapper({ children }: { children: ReactNode }) {
  return <CompareProvider>{children}</CompareProvider>;
}

describe("compare-store", () => {
  it("adds, toggles, and enforces max compare count", () => {
    const { result } = renderHook(() => useCompareStore(), { wrapper });

    act(() => {
      result.current.add("option-1");
      result.current.add("option-2");
      result.current.add("option-3");
      result.current.add("option-4");
    });

    expect(result.current.selectedIds).toEqual(["option-1", "option-2", "option-3"]);
    expect(result.current.selectedIds).toHaveLength(COMPARE_MAX);
    expect(result.current.isFull).toBe(true);

    act(() => {
      result.current.toggle("option-2");
    });
    expect(result.current.selectedIds).toEqual(["option-1", "option-3"]);

    act(() => {
      result.current.clear();
    });
    expect(result.current.selectedIds).toEqual([]);
  });
});

