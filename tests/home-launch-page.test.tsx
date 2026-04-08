import { render, screen } from "@testing-library/react";

import HomePage from "@/app/page";

describe("HomePage launch composition", () => {
  it("renders a single-focus launch hero with start-page actions", () => {
    render(<HomePage />);

    expect(screen.getByLabelText("Launch hero")).toBeInTheDocument();
    expect(
      screen.getByText("Build an ADU and Unlock Your Property's Potential"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Accessory Dwelling Units \(ADUs\) are small secondary homes/),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Get started" }),
    ).toHaveAttribute("href", "/get-started");
    expect(
      screen.getByRole("link", { name: "What is an ADU?" }),
    ).toHaveAttribute("href", "#what-is-adu");

    // ADU definition section should be present (check for the section heading)
    expect(screen.getByRole("heading", { name: "What is an ADU?" })).toBeInTheDocument();
  });
});
