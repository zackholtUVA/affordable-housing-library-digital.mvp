import { render, screen } from "@testing-library/react";

import BasicsPage from "@/app/basics/page";
import NextStepsPage from "@/app/next-steps/page";
import { CompareProvider } from "@/lib/compare-store";
import { SessionContextProvider } from "@/lib/session-context";

describe("Basics and Next Steps UX", () => {
  beforeEach(() => {
    window.sessionStorage.clear();
  });

  it("renders a glossary search label and alphabet jump navigation", () => {
    render(<BasicsPage />);

    expect(screen.getByRole("heading", { name: "Search glossary" })).toBeInTheDocument();
    expect(screen.getByLabelText("Glossary search")).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: /jump to glossary letter/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "A" })).toHaveAttribute("href", "#glossary-a");
    expect(screen.getByRole("link", { name: "Z" })).toHaveAttribute("href", "#glossary-z");
  });

  it("disables checklist export actions until at least one option is selected", () => {
    render(
      <CompareProvider>
        <SessionContextProvider>
          <NextStepsPage />
        </SessionContextProvider>
      </CompareProvider>,
    );

    expect(screen.getByRole("button", { name: "Print checklist" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Copy checklist" })).toBeDisabled();
    expect(
      screen.getByText(/add at least one option to comparison to enable print and copy actions/i),
    ).toBeInTheDocument();
  });

});
