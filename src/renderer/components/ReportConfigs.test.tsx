import { fireEvent, render, screen } from "@testing-library/react";
import { ReportConfigs, allReportConfigsAtom, currentReportConfigAtom } from "./ReportConfigs";
import { configsTestData } from "../report-generation/utils";
import { TestProvider } from "./utils/TestProvider";

describe("ReportConfigs", () => {
  it("changes active config on click", () => {
    render(
      <TestProvider
        initialValues={[
          [allReportConfigsAtom, configsTestData],
          [currentReportConfigAtom, configsTestData[0]],
        ]}
      >
        <ReportConfigs />
      </TestProvider>
    );

    //   screen.getByText(configsTestData[1].name);
    expect(screen.getAllByRole("tab")[0]!).toHaveClass("active"); // weird way to get button since obvious ways were not working
    const seondConfigButton = screen.getAllByRole("tab")[1]!;
    fireEvent.click(seondConfigButton);
    expect(screen.getAllByRole("tab")[0]!).not.toHaveClass("active");
    expect(screen.getAllByRole("tab")[1]!).toHaveClass("active");
  });
});
