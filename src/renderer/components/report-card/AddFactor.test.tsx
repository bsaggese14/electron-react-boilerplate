import { AddFactor } from "./AddFactor";
import { fireEvent, render, screen } from "@testing-library/react";
import { TestProvider } from "../utils/TestProvider";
import { useAtom } from "jotai";
import { currentReportConfigAtom } from "../ReportConfigs";
import { SupportedFactors } from "../../SupportedFactors";

describe("AddFactor", () => {
  it("adds factor when factor is clicked", () => {
    const TestComp = () => {
      const [currReportConfig] = useAtom(currentReportConfigAtom);
      const textToRender = currReportConfig?.factors.length || 0 > 0 ? "yes" : "no";

      return (
        <>
          <div>{textToRender}</div> <AddFactor />
        </>
      );
    };
    const CONFIG_NAME = "config";
    render(
      <TestProvider initialValues={[[currentReportConfigAtom, { id: "2", name: CONFIG_NAME, factors: [] }]]}>
        <TestComp></TestComp>
      </TestProvider>
    );
    screen.getByText("no");
    fireEvent.click(screen.getByText(SupportedFactors.GWI));
    screen.getByText("yes");
  });
});
