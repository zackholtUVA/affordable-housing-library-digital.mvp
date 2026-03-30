import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CompareProvider } from "@/lib/compare-store";
import { ThemeProvider } from "@/lib/theme";
import { UxProvider } from "@/lib/ux";

const routerPushMock = (globalThis as { __routerPushMock: (href: string) => void })
  .__routerPushMock;

function TestApp() {
  return (
    <ThemeProvider>
      <CompareProvider>
        <UxProvider>
          <div>Test Shell</div>
        </UxProvider>
      </CompareProvider>
    </ThemeProvider>
  );
}

describe("UX command palette", () => {
  it("opens via Ctrl+K and executes route command", async () => {
    const user = userEvent.setup();
    render(<TestApp />);

    fireEvent.keyDown(window, { key: "k", ctrlKey: true });
    expect(screen.getByRole("dialog", { name: /quick actions/i })).toBeInTheDocument();

    const input = screen.getByPlaceholderText(
      "[PLACEHOLDER: search actions, pages, and shortcuts]",
    );
    await user.type(input, "compare");
    await user.click(screen.getByRole("button", { name: /go to compare/i }));

    expect(routerPushMock).toHaveBeenCalledWith("/compare");
  });

  it("opens shortcut help with Shift+?", () => {
    render(<TestApp />);
    fireEvent.keyDown(window, { key: "?", shiftKey: true });
    expect(screen.getByRole("dialog", { name: /keyboard shortcuts/i })).toBeInTheDocument();
  });
});

