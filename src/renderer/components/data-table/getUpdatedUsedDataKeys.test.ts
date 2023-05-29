import { getUpdatedUsedDataKeys } from "./getUpdatedUsedDataKeys";

describe("getUpdatedUsedDataKeys", () => {
  it("should return an array with only the selectedKey when previouslySelectedKey is empty", () => {
    const result = getUpdatedUsedDataKeys({
      selectedKey: "A",
      previouslySelectedKey: "",
      usedDataKeys: ["B", "C"],
    });

    expect(result).toEqual(["A", "B", "C"]);
  });

  it("should return an array with selectedKey appended and previouslySelectedKey removed from usedDataKeys", () => {
    const result = getUpdatedUsedDataKeys({
      selectedKey: "A",
      previouslySelectedKey: "B",
      usedDataKeys: ["B", "C"],
    });

    expect(result).toEqual(["A", "C"]);
  });

  it("should return an array with selectedKey appended when previouslySelectedKey is not in usedDataKeys", () => {
    const result = getUpdatedUsedDataKeys({
      selectedKey: "A",
      previouslySelectedKey: "D",
      usedDataKeys: ["B", "C"],
    });

    expect(result).toEqual(["A", "B", "C"]);
  });
});
