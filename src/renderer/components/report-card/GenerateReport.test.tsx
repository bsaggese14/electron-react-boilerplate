import { render, screen, fireEvent } from "@testing-library/react";
import { GenerateReport } from "./GenerateReport";
import { generateReport, testData, testKeyMap } from "../../report-generation/utils";
import { employeeArrayAtom } from "../data-table/DataUpload";
import { employeeDataKeyMapAtom } from "../data-table/employeeDataKeyMapAtom";
import { TestProvider } from "../utils/TestProvider";

jest.mock("../../report-generation/utils", () => ({
  __esModule: true,
  ...jest.requireActual("../../report-generation/utils"),
  generateReport: jest.fn(),
}));

const GenerateReportProvider = () => {
  return (
    <TestProvider
      initialValues={[
        [employeeArrayAtom, testData],
        [employeeDataKeyMapAtom, testKeyMap],
      ]}
    >
      <GenerateReport reportType="current" />
    </TestProvider>
  );
};

describe("GenerateReport", () => {
  it("renders a button with the given report type", () => {
    render(<GenerateReportProvider></GenerateReportProvider>);
    const button = screen.getByRole("button", { name: /generate report/i });
    expect(button).toHaveAttribute("data-report-type", "current");
    fireEvent.click(button);
    expect(generateReport).toHaveBeenCalledWith({ employeeDataArray: testData, type: "current", keyMap: testKeyMap });
  });
});
