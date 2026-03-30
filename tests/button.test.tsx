import { render, screen } from "@testing-library/react";

import { Button } from "@/components/shared/button";

describe("Button", () => {
  it("renders children and supports disabled state", () => {
    render(
      <Button disabled data-testid="button">
        [PLACEHOLDER: action label]
      </Button>,
    );

    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent("[PLACEHOLDER: action label]");
  });
});

