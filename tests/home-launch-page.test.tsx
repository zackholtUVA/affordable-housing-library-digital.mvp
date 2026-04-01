import { render, screen } from "@testing-library/react";

import HomePage from "@/app/page";

describe("HomePage launch composition", () => {
  it("renders a single-focus launch hero with start-page actions", () => {
    const { container } = render(<HomePage />);

    expect(screen.getByLabelText("Launch hero")).toBeInTheDocument();
    expect(
      screen.getByText("Compare Affordable Housing Paths with Confidence"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Explore realistic options, understand tradeoffs, and prepare better conversations with local experts.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Explore options" }),
    ).toHaveAttribute("href", "/start");
    expect(
      screen.getByRole("link", { name: "Learn how this works" }),
    ).toHaveAttribute("href", "/start#how-it-works");

    expect(
      screen.queryByText("Choose the scenario that best matches your current goal"),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Popular starting pathways to compare first")).not.toBeInTheDocument();
    expect(screen.queryByText("A three-step workflow for clearer housing decisions")).not.toBeInTheDocument();

    const sections = container.querySelectorAll(".page-reveal-flow > *");
    expect(sections.length).toBe(1);
    expect(sections[0]?.getAttribute("aria-label")).toBe("Launch hero");
  });
});
