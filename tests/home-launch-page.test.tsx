import { render, screen } from "@testing-library/react";

import HomePage from "@/app/page";
import GetStartedPage from "@/app/get-started/page";

describe("HomePage launch composition", () => {
  it("renders a single-focus launch hero with a button-like secondary CTA", () => {
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
    expect(screen.getByRole("link", { name: "What is an ADU?" })).toHaveAttribute(
      "href",
      "#what-is-adu",
    );
    expect(screen.getByRole("link", { name: "What is an ADU?" })).toHaveClass(
      "hero-secondary-cta",
    );

    // ADU definition section should be present (check for the section heading)
    expect(screen.getByRole("heading", { name: "What is an ADU?" })).toBeInTheDocument();
  });

  it("adds context and orientation on the get started page", () => {
    render(<GetStartedPage />);

    expect(screen.getByText("Get started")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "What brings you here?" })).toBeInTheDocument();
    expect(
      screen.getByText(/Pick the path that matches your goal/),
    ).toBeInTheDocument();
    expect(screen.getByText("Most popular")).toBeInTheDocument();
  });
});
