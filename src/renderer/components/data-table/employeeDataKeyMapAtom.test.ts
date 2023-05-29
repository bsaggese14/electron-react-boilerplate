import { useAtom } from "jotai";
import { employeeDataKeyMapAtom } from "./employeeDataKeyMapAtom";
import { renderHook } from "@testing-library/react";
import { globalDataKeys } from "../../globalDataKeysAtom";

describe("employeeDataKeyMapAtom", () => {
  test("should have the global data keys as keys", () => {
    const { result } = renderHook(() => useAtom(employeeDataKeyMapAtom));

    expect(Object.keys(result.current[0])).toEqual(globalDataKeys);
  });
});
