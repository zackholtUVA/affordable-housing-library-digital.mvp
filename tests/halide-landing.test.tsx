import { render, screen } from "@testing-library/react";

import HalideLanding from "@/components/ui/demo";
import type { HalideHeroContent } from "@/lib/types";

const content: HalideHeroContent = {
  kicker: "Affordable Housing Library MVP",
  title: "[PLACEHOLDER: site headline]",
  subtitle: "[PLACEHOLDER: site subheadline]",
  archiveLabel: "[PLACEHOLDER: archive label]",
  telemetryLines: ["[PLACEHOLDER: telemetry 1]", "[PLACEHOLDER: telemetry 2]"],
  ctaLabel: "Explore options",
  ctaHref: "/explore",
  bottomLeftLines: ["[PLACEHOLDER: line 1]", "[PLACEHOLDER: line 2]"],
};

describe("HalideLanding", () => {
  it("renders launch hero with accessible CTA", () => {
    render(<HalideLanding content={content} />);

    expect(screen.getByLabelText("Launch hero")).toBeInTheDocument();
    expect(screen.getByText("[PLACEHOLDER: site headline]")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Explore options" }),
    ).toHaveAttribute("href", "/explore");
  });
});

