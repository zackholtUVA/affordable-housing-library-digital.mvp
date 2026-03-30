import { getHousingOptionBySlug, housingOptions } from "@/data/housing-options";

describe("housing option data", () => {
  it("provides 10 placeholder options", () => {
    expect(housingOptions).toHaveLength(10);
  });

  it("finds an option by slug and returns undefined for invalid slug", () => {
    expect(getHousingOptionBySlug("option-1")).toBeDefined();
    expect(getHousingOptionBySlug("missing-option")).toBeUndefined();
  });
});

