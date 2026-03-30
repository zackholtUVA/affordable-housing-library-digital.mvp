import { render, screen } from "@testing-library/react";

import HalideLanding from "@/components/ui/demo";
import type { HalideHeroContent } from "@/lib/types";

const content: HalideHeroContent = {
  kicker: "Affordable Housing Library",
  title: "Compare Affordable Housing Paths with Confidence",
  subtitle:
    "Explore options, weigh tradeoffs, and move to clear next steps in one focused workflow.",
  archiveLabel: "MVP Decision Support Interface",
  telemetryLines: ["Session-only prototype", "No personal data stored"],
  ctaLabel: "Explore options",
  ctaHref: "/explore",
  bottomLeftLines: [
    "Compare up to three options side by side",
    "Use practical checklists before taking next steps",
  ],
};

describe("HalideLanding", () => {
  it("renders launch hero with accessible CTA", () => {
    const { container } = render(<HalideLanding content={content} />);

    expect(screen.getByLabelText("Launch hero")).toBeInTheDocument();
    expect(screen.getByText("Compare Affordable Housing Paths with Confidence")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Explore options" }),
    ).toHaveAttribute("href", "/explore");
    expect(container.innerHTML).not.toContain("images.unsplash.com");
  });
});
