import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { OptionCard } from "@/components/explore/option-card";
import { CompareProvider } from "@/lib/compare-store";
import { SessionContextProvider } from "@/lib/session-context";
import { housingOptions } from "@/data/housing-options";

function renderGrid() {
  return render(
    <CompareProvider>
      <SessionContextProvider>
        <div>
          {housingOptions.slice(0, 4).map((option) => (
            <OptionCard key={option.id} option={option} />
          ))}
        </div>
      </SessionContextProvider>
    </CompareProvider>,
  );
}

describe("OptionCard compare behavior", () => {
  it("enforces compare cap at 3 options", async () => {
    const user = userEvent.setup();
    renderGrid();

    const buttons = screen.getAllByRole("button", {
      name: /add .* from compare/i,
    });

    await user.click(buttons[0]);
    await user.click(buttons[1]);
    await user.click(buttons[2]);
    await user.click(buttons[3]);

    expect(
      screen.getByRole("button", {
        name: new RegExp(`remove ${housingOptions[0].title} from compare`, "i"),
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "You already selected 3 options. Remove one to add this option.",
      ),
    ).toBeInTheDocument();
  });
});
