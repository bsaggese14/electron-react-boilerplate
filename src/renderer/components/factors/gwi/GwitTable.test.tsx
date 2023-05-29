import { render, screen } from "@testing-library/react";
import { GwiTable } from "./GwiTable";
import { testGwiObjects } from "../../../report-generation/utils";

describe("GwiTable", () => {
  it("renders", () => {
    render(<GwiTable gwiObjects={testGwiObjects}></GwiTable>);
    testGwiObjects.forEach((gwi) => {
      screen.getByText(gwi.year);
      expect(screen.getAllByDisplayValue(gwi.percent).length).toBeGreaterThan(0); // getAllByDisplayValue.length solves issue if multiple matching elements found.
      expect(screen.getAllByDisplayValue(gwi.bonus).length).toBeGreaterThan(0);
    });
  });
});
