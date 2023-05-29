import { fireEvent, render, screen } from "@testing-library/react";
import { TestProvider } from "../utils/TestProvider";
import { LoadConfig } from "./LoadConfig";
import { useAtom } from "jotai";
import { allReportConfigsAtom, currentReportConfigAtom } from "../ReportConfigs";

describe("LoadConfig", () => {
  it("loads factors from all report configs into current config", () => {
    const TestComp = () => {
      const [currReportConfig] = useAtom(currentReportConfigAtom);
      const textToRender = currReportConfig?.factors.length || 0 > 0 ? "yes" : "no";

      return (
        <>
          <div>{textToRender}</div> <LoadConfig />
        </>
      );
    };
    const CONFIG_NAME = "config";
    render(
      <TestProvider
        initialValues={[
          [currentReportConfigAtom, { id: "2", name: CONFIG_NAME, factors: [] }],
          [allReportConfigsAtom, [{ id: "1", name: CONFIG_NAME, factors: [{ name: "", vacationObjects: {} }] }]],
        ]}
      >
        <TestComp></TestComp>
      </TestProvider>
    );
    screen.getByText("no");
    fireEvent.click(screen.getByText(CONFIG_NAME));
    screen.getByText("yes");
  });
});
