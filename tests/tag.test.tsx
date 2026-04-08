import { render, screen } from "@testing-library/react";

import { Tag } from "@/components/shared/tag";

describe("Tag", () => {
  it("uses resilient spacing and wrapping defaults", () => {
    render(<Tag active>Long content label for wrapping checks</Tag>);

    const tag = screen
      .getByText("Long content label for wrapping checks")
      .closest("span")
      ?.parentElement;
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass("py-2");
  });

  it("renders a remove control with accessible label", () => {
    render(
      <Tag onRemove={() => undefined}>
        Remove me
      </Tag>,
    );

    expect(screen.getByRole("button", { name: "Remove Remove me" })).toBeInTheDocument();
    expect(screen.getByText("x")).toBeInTheDocument();
  });
});
