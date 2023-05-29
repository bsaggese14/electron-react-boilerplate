import { render } from "@testing-library/react";
import { testVacationObjects } from "../../../report-generation/utils";
import { Vacation } from "./Vacation";
import { SupportedFactors } from "../../../SupportedFactors";

const testConfig = { name: SupportedFactors.VACATION, vacationObjects: testVacationObjects };
describe("Vacation", () => {
  it("renders", () => {
    const { container } = render(<Vacation config={testConfig} />);
    expect(container).toMatchSnapshot();
  });
});
