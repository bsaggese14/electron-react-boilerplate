import { render, screen } from "@testing-library/react";
import { DataUpload } from "./DataUpload";

describe("DataTable", () => {
  it("renders without a data table", () => {
    render(<DataUpload></DataUpload>);
    screen.getByTestId("fileUpload");
    expect(screen.queryAllByTestId("dataTable").length).toEqual(0);
  });
});
