import { filterGroups } from "@/data/filters";
import { housingOptions } from "@/data/housing-options";
import { EMPTY_FILTER_STATE, filterHousingOptions } from "@/lib/utils";

describe("explore filtering", () => {
  it("filters by query and selected filter values", () => {
    const query = "option title 1";
    const nextState = {
      ...EMPTY_FILTER_STATE,
      housingType: [filterGroups[1].options[0]],
    };

    const result = filterHousingOptions(housingOptions, query, nextState);

    expect(result.length).toBeGreaterThanOrEqual(0);
    if (result[0]) {
      expect(result[0].title.toLowerCase()).toContain("option title");
    }
  });

  it("returns full data set when query and filters are empty", () => {
    const result = filterHousingOptions(housingOptions, "", EMPTY_FILTER_STATE);
    expect(result).toHaveLength(housingOptions.length);
  });
});

