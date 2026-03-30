import { render, screen } from "@testing-library/react";

import HomePage from "@/app/page";

describe("HomePage launch composition", () => {
  it("renders launch hero first and preserves existing content sections", () => {
    const { container } = render(<HomePage />);

    expect(screen.getByLabelText("Launch hero")).toBeInTheDocument();
    expect(
      screen.getByText("[PLACEHOLDER: product explanation section title]"),
    ).toBeInTheDocument();
    expect(screen.getByText("[PLACEHOLDER: pathway section heading]")).toBeInTheDocument();
    expect(screen.getByText("[PLACEHOLDER: featured option labels section title]")).toBeInTheDocument();
    expect(screen.getByText("[PLACEHOLDER: how-it-works heading]")).toBeInTheDocument();

    const sections = container.querySelectorAll(".page-reveal-flow > *");
    expect(sections.length).toBeGreaterThan(1);
    expect(sections[0]?.getAttribute("aria-label")).toBe("Launch hero");
  });
});

