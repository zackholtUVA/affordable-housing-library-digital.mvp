import { render, screen, within } from "@testing-library/react";

import { SiteHeader } from "@/components/layout/site-header";

describe("SiteHeader", () => {
  it("renders primary navigation and help controls in chrome", () => {
    render(<SiteHeader />);

    const primaryNav = screen.getByRole("navigation", { name: "Primary" });
    expect(primaryNav).toBeInTheDocument();
    expect(within(primaryNav).getByRole("link", { name: "Get started" })).toHaveAttribute(
      "href",
      "/get-started",
    );
    expect(within(primaryNav).getByRole("link", { name: "Browse ADUs" })).toHaveAttribute(
      "href",
      "/start",
    );
    expect(within(primaryNav).getByRole("link", { name: "Compare" })).toHaveAttribute(
      "href",
      "/compare",
    );
    expect(within(primaryNav).getByRole("link", { name: "Learn the basics" })).toHaveAttribute(
      "href",
      "/basics",
    );

    expect(screen.getAllByRole("button", { name: /open keyboard shortcuts help/i })).toHaveLength(2);
    expect(screen.queryByRole("button", { name: /switch to/i })).not.toBeInTheDocument();
  });
});
