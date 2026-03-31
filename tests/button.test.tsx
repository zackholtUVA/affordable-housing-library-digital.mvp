import { render, screen } from "@testing-library/react";

import { Button } from "@/components/shared/button";

describe("Button", () => {
  it("renders children, defaults to 3d, and supports disabled state", () => {
    render(
      <Button disabled data-testid="button">
        [PLACEHOLDER: action label]
      </Button>,
    );

    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent("[PLACEHOLDER: action label]");
    expect(button).toHaveAttribute("data-elevation", "3d");
    expect(button).toHaveClass("btn-3d");
  });

  it("supports flat elevation override", () => {
    render(
      <Button elevation="flat" variant="secondary" data-testid="flat-button">
        [PLACEHOLDER: secondary action]
      </Button>,
    );

    const button = screen.getByTestId("flat-button");
    expect(button).toHaveAttribute("data-elevation", "flat");
    expect(button).toHaveClass("btn-flat");
    expect(button).not.toHaveClass("btn-3d");
  });
});
