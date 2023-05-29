import { testKeyMap } from "../../report-generation/utils";
import { getUpdatedKeyMap } from "./getUpdatedKeyMap";

describe("getUpdatedKeyMap", () => {
  const keyMap = testKeyMap;
  const keyMapKeys = Object.keys(testKeyMap);

  it("should update selectedKey with the new tableDataKey and remove the previouslySelectedKey", () => {
    const tableDataKey = "test";
    const result = getUpdatedKeyMap({
      selectedKey: keyMapKeys[0],
      previouslySelectedKey: keyMapKeys[1],
      tableDataKey,
      keyMap,
    });

    expect(result).toEqual({ ...testKeyMap, [keyMapKeys[1]]: undefined, [keyMapKeys[0]]: tableDataKey });
  });

  it("should remove the previouslySelectedKey without adding selectedKey if it is empty", () => {
    const result = getUpdatedKeyMap({
      selectedKey: "",
      previouslySelectedKey: keyMapKeys[0],
      tableDataKey: "",
      keyMap,
    });

    expect(result).toEqual({ ...keyMap, [keyMapKeys[0]]: undefined });
  });

  it("should return the same keyMap when selectedKey and previouslySelectedKey are empty", () => {
    const result = getUpdatedKeyMap({
      selectedKey: "",
      previouslySelectedKey: "",
      tableDataKey: "",
      keyMap,
    });

    expect(result).toEqual(keyMap);
  });
});
