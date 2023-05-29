import { useAtom } from "jotai";
import { globalDataKeysAtom } from "./globalDataKeysAtom";
import { renderHook } from "@testing-library/react";
import { globalDataKeys } from "./globalDataKeysAtom";

describe("globalDataKeysAtom", () => {
  test("should have the global data keys as an array", () => {
    const { result } = renderHook(() => useAtom(globalDataKeysAtom));

    expect(result.current[0]).toEqual(globalDataKeys);
  });
});
