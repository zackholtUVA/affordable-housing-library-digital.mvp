import { render, screen } from "@testing-library/react";

import StartPage from "@/app/start/page";

describe("StartPage", () => {
  it("renders streamlined sections with a clear progression CTA", () => {
    const { container } = render(<StartPage />);

    // Check for main sections (intro removed for UX simplification)
    expect(screen.getByText("Start with your situation")).toBeInTheDocument();
    expect(screen.getByText("Featured options")).toBeInTheDocument();
    expect(screen.getByText("How it works")).toBeInTheDocument();

    // Simplified CTA text
    expect(screen.getByRole("link", { name: "Browse all" })).toHaveAttribute("href", "/explore");
    expect(screen.getByRole("link", { name: "Compare" })).toHaveAttribute("href", "/compare");

    expect(container.querySelector("#how-it-works")).toBeInTheDocument();
  });
});
