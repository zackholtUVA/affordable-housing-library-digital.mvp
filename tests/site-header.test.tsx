import { render, screen } from "@testing-library/react";

import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/lib/theme";

describe("SiteHeader", () => {
  it("renders primary navigation and theme toggle", () => {
    render(
      <ThemeProvider>
        <SiteHeader />
      </ThemeProvider>,
    );

    expect(screen.getByRole("navigation", { name: "Primary" })).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /switch to/i })).toHaveLength(2);
  });
});
