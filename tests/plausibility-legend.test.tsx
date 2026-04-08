import { render, screen } from "@testing-library/react";

import { PlausibilityLegend } from "@/components/shared/plausibility-legend";

describe("PlausibilityLegend", () => {
  it("renders a collapsed toggle for badge guidance", () => {
    render(<PlausibilityLegend collapsible compact />);

    expect(screen.getByText("What do badges mean?")).toBeInTheDocument();
    expect(screen.getByText("often plausible")).toBeInTheDocument();
  });
});
