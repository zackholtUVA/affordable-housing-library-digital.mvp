import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { OptionCard } from "@/components/explore/option-card";
import { CompareProvider } from "@/lib/compare-store";
import { housingOptions } from "@/data/housing-options";

function renderGrid() {
  return render(
    <CompareProvider>
      <div>
        {housingOptions.slice(0, 4).map((option) => (
          <OptionCard key={option.id} option={option} />
        ))}
      </div>
    </CompareProvider>,
  );
}

describe("OptionCard compare behavior", () => {
  it("enforces compare cap at 3 options", async () => {
    const user = userEvent.setup();
    renderGrid();

    const buttons = screen.getAllByRole("button", {
      name: /add \[PLACEHOLDER: option title \d\] from compare/i,
    });

    await user.click(buttons[0]);
    await user.click(buttons[1]);
    await user.click(buttons[2]);

    expect(
      screen.getByRole("button", {
        name: /remove \[PLACEHOLDER: option title 1\] from compare/i,
      }),
    ).toBeInTheDocument();
    expect(buttons[3]).toBeDisabled();
  });
});
