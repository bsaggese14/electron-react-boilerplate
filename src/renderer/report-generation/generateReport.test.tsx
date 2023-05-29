import { render } from "@testing-library/react";
import { generateReport } from "./generateReport";
import { configsTestData, testData, testKeyMap } from "./utils";
import { ReportCard } from "../components/report-card/ReportCard";

describe("reportGen", () => {
  it("generates correct data", () => {
    render(<ReportCard reportConfig={configsTestData[0]} reportType="current"></ReportCard>);
    expect(generateReport({ type: "current", employeeDataArray: testData, keyMap: testKeyMap })).toEqual({ totalLaborCostPerYear: { "2018": 124126.7, "2019": 128324.36, "2020": 132773.78, "2021": 135387.72, "2022": 138186.24 }, totalProductiveHoursPerYear: { "2018": 3828.59, "2019": 3827.87, "2020": 3826.46, "2021": 3828.59, "2022": 3826.39 }, totalVacationHoursGrantedPerYear: { "2018": 331.41, "2019": 332.13, "2020": 333.54, "2021": 331.41, "2022": 333.61 } });
    // expect(generateReport({ type: "future", employeeDataArray: testData, keyMap: testKeyMap })).toEqual({ totalLaborCostPerYear: { "2023": 137426.16, "2024": 144869.08, "2025": 150057.08, "2026": 154772.28, "2027": 159054.18 }, totalProductiveHoursPerYear: { "2023": 3720, "2024": 3716.23, "2025": 3717.16, "2026": 3711.96, "2027": 3677.93 }, totalVacationHoursGrantedPerYear: { "2023": 440, "2024": 443.77, "2025": 442.84, "2026": 448.04, "2027": 482.07 } });
  });
});
