import { render, screen } from "@testing-library/react";

import StartPage from "@/app/start/page";

describe("StartPage", () => {
  it("renders moved guided sections with a clear progression CTA", () => {
    const { container } = render(<StartPage />);

    expect(screen.getByText("What this tool is for")).toBeInTheDocument();
    expect(screen.getByText("Start with your situation")).toBeInTheDocument();
    expect(screen.getByText("Featured options")).toBeInTheDocument();
    expect(screen.getByText("How it works")).toBeInTheDocument();
    expect(screen.getByText("Trust and limitations")).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Open advanced explore" })).toHaveAttribute("href", "/explore");
    expect(screen.getByRole("link", { name: "Go directly to Compare" })).toHaveAttribute("href", "/compare");

    expect(container.querySelector("#how-it-works")).toBeInTheDocument();
  });
});
