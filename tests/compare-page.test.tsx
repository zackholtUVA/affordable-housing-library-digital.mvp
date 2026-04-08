import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, vi } from "vitest";

import ComparePage from "@/app/compare/page";
import { CompareEmptyState } from "@/components/compare/compare-empty-state";
import { Providers } from "@/components/layout/providers";

describe("Compare flow", () => {
  afterEach(() => {
    window.history.pushState({}, "", "/");
  });

  it("renders the empty state with sample comparison as the primary CTA", () => {
    render(<CompareEmptyState onLoadSample={() => undefined} />);

    expect(
      screen.getByRole("button", { name: /load sample comparison/i }),
    ).toHaveAttribute("data-variant", "primary");
    expect(
      screen.getByRole("button", { name: /explore options/i }),
    ).toHaveAttribute("data-variant", "secondary");
  });

  it("hydrates from the compare query, copies a share link, and exposes print and swap controls", async () => {
    const user = userEvent.setup();
    const clipboardWrite = vi.fn().mockResolvedValue(undefined);
    const printSpy = vi.fn();

    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: clipboardWrite },
      configurable: true,
    });
    Object.defineProperty(window, "print", {
      value: printSpy,
      configurable: true,
    });

    window.history.pushState(
      {},
      "",
      "/compare?compare=option-1,option-2,option-3,option-1,missing",
    );

    render(
      <Providers>
        <ComparePage />
      </Providers>,
    );

    await waitFor(() =>
      expect(screen.getByText("3 of 3 selected")).toBeInTheDocument(),
    );
    expect(
      screen.getByRole("link", { name: /swap an option/i }),
    ).toHaveAttribute("href", "/explore");
    expect(
      screen.getByRole("button", { name: /add more options/i }),
    ).toBeDisabled();

    await user.click(screen.getByRole("button", { name: /copy share link/i }));
    expect(clipboardWrite).toHaveBeenCalledWith(
      expect.stringContaining("/compare?compare=option-1,option-2,option-3"),
    );

    await user.click(screen.getByRole("button", { name: /^print$/i }));
    expect(printSpy).toHaveBeenCalledTimes(1);
  });
});
