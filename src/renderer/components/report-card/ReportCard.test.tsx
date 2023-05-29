import { render, screen } from "@testing-library/react";
import { ReportCard } from "./ReportCard";
import { configsTestData } from "../../report-generation/utils";

describe("ReportCard", () => {
  it("renders", () => {
    render(<ReportCard reportConfig={configsTestData[0]} reportType="current"></ReportCard>);
    screen.getByTestId("reportTitle");
    screen.getByText("General Wage Increase (GWI)");
    screen.getByText("Vacation");
    screen.getByText("Generate Report");
  });
});
