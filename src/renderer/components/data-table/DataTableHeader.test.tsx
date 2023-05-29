import { render, screen, fireEvent } from "@testing-library/react";
import { getUpdatedKeyMap } from "./getUpdatedKeyMap";
import { getUpdatedUsedDataKeys } from "./getUpdatedUsedDataKeys";

import { DataTableHeader, KEY_SELECT } from "./DataTableHeader";
import { globalDataKeys } from "../../globalDataKeysAtom";

jest.mock("./getUpdatedKeyMap", () => ({
  __esModule: true,
  getUpdatedKeyMap: jest.fn(),
}));

jest.mock("./getUpdatedUsedDataKeys", () => ({
  __esModule: true,
  getUpdatedUsedDataKeys: jest.fn(),
}));

describe("DataTableHeader", () => {
  const tableData = [{ A: "DataA1" }];

  test("should set the data-previous-value attribute and call approriate functions on select change", () => {
    render(<DataTableHeader tableData={tableData} />);

    const selectElement = screen.getByTestId(KEY_SELECT);

    fireEvent.change(selectElement, { target: { value: globalDataKeys[0] } });

    expect(selectElement.getAttribute("data-previous-value")).toEqual(globalDataKeys[0]);
    expect(getUpdatedKeyMap).toBeCalledWith({ keyMap: { hourlyWage: undefined, schedule: undefined, seniority: undefined }, previouslySelectedKey: "", selectedKey: globalDataKeys[0], tableDataKey: "A" });
    expect(getUpdatedUsedDataKeys).toBeCalledWith({ previouslySelectedKey: "", selectedKey: "hourlyWage", usedDataKeys: [] });
  });
});
