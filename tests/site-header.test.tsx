import { render, screen, within } from "@testing-library/react";

import { SiteHeader } from "@/components/layout/site-header";

describe("SiteHeader", () => {
  it("renders only primary navigation destinations in chrome", () => {
    render(<SiteHeader />);

    const primaryNav = screen.getByRole("navigation", { name: "Primary" });
    expect(primaryNav).toBeInTheDocument();
    expect(within(primaryNav).getByRole("link", { name: "Explore options" })).toHaveAttribute(
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
    expect(within(primaryNav).getByRole("link", { name: "Next steps" })).toHaveAttribute(
      "href",
      "/next-steps",
    );

    expect(screen.queryByRole("button", { name: /switch to/i })).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /open keyboard shortcuts help/i }),
    ).not.toBeInTheDocument();
  });
});
