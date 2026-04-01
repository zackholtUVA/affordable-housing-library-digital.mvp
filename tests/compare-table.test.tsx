import { render, screen } from "@testing-library/react";

import { CompareTable } from "@/components/compare/compare-table";
import { housingOptions } from "@/data/housing-options";

describe("CompareTable", () => {
  it("renders comparison rows and selected option columns", () => {
    render(<CompareTable options={housingOptions.slice(0, 2)} />);

    expect(screen.getByText("Complexity")).toBeInTheDocument();
    expect(screen.getByText("Typical timeline")).toBeInTheDocument();
    expect(screen.getByText(housingOptions[0].title)).toBeInTheDocument();
    expect(screen.getByText(housingOptions[1].title)).toBeInTheDocument();
  });
});
