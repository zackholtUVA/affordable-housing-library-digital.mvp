import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Providers } from "@/components/layout/providers";
import { OptionCard } from "@/components/explore/option-card";
import { housingOptions } from "@/data/housing-options";

function renderGrid() {
  return render(
    <Providers>
      <div>
        {housingOptions.slice(0, 4).map((option) => (
          <OptionCard key={option.id} option={option} />
        ))}
      </div>
    </Providers>,
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

  it("shows an undo action when removing a selected option", async () => {
    const user = userEvent.setup();
    renderGrid();

    const addButton = screen.getByRole("button", {
      name: new RegExp(`add ${housingOptions[0].title} from compare`, "i"),
    });

    await user.click(addButton);

    const removeButton = screen.getByRole("button", {
      name: new RegExp(`remove ${housingOptions[0].title} from compare`, "i"),
    });
    await user.click(removeButton);

    const undoButton = await screen.findByRole("button", { name: /undo/i });
    expect(screen.getByText(/removed from comparison/i)).toBeInTheDocument();

    await user.click(undoButton);

    expect(
      screen.getByRole("button", {
        name: new RegExp(`remove ${housingOptions[0].title} from compare`, "i"),
      }),
    ).toBeInTheDocument();
  });
});
