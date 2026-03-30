import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TerminologyDrawer } from "@/components/basics/terminology-drawer";
import { glossaryTerms } from "@/data/glossary";

describe("TerminologyDrawer", () => {
  it("expands and collapses definition content", async () => {
    const term = glossaryTerms[0];
    const user = userEvent.setup();

    render(<TerminologyDrawer term={term} />);

    const toggle = screen.getByRole("button", {
      name: new RegExp(term.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"),
    });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByText(term.plainLanguageDefinition)).toBeInTheDocument();

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});
