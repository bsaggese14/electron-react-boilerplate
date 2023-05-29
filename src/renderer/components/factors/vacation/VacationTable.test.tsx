import { render, screen } from "@testing-library/react";
import { VacationTable } from "./VacationTable";
import { testVacationObjects } from "../../../report-generation/utils";

describe("ReportCard", () => {
  it("renders", () => {
    render(<VacationTable vacationObjects={testVacationObjects}></VacationTable>);
    testVacationObjects.forEach((vacation) => {
      expect(screen.getAllByDisplayValue(vacation.rangeStart).length).toBeGreaterThan(0); // getAllByDisplayValue.length solves issue if multiple matching elements found.
      expect(screen.getAllByDisplayValue(vacation.rangeEnd).length).toBeGreaterThan(0);
      expect(screen.getAllByDisplayValue(vacation.hours).length).toBeGreaterThan(0);
    });
  });
});
