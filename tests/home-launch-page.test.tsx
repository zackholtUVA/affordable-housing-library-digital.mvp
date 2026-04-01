import { render, screen } from "@testing-library/react";

import HomePage from "@/app/page";

describe("HomePage launch composition", () => {
  it("renders launch hero first and preserves existing content sections", () => {
    const { container } = render(<HomePage />);

    expect(screen.getByLabelText("Launch hero")).toBeInTheDocument();
    expect(
      screen.getByText("Compare Affordable Housing Paths with Confidence"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("A practical starting point before you commit to one housing path"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Choose the scenario that best matches your current goal"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Popular starting pathways to compare first"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("A three-step workflow for clearer housing decisions"),
    ).toBeInTheDocument();

    const sections = container.querySelectorAll(".page-reveal-flow > *");
    expect(sections.length).toBeGreaterThan(1);
    expect(sections[0]?.getAttribute("aria-label")).toBe("Launch hero");
  });
});
