import { render, screen } from "@testing-library/react";

import { CompareDrawer } from "@/components/compare/compare-drawer";
import { Providers } from "@/components/layout/providers";

describe("CompareDrawer", () => {
  it("shows a persistent empty tray cue when nothing is selected", () => {
    render(
      <Providers>
        <CompareDrawer />
      </Providers>,
    );

    expect(screen.getByText("Compare tray (0 of 3 selected)")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Browse ADUs" })).toHaveAttribute("href", "/explore");
    expect(screen.getByRole("link", { name: "Open compare page" })).toHaveAttribute(
      "href",
      "/compare",
    );
  });
});
