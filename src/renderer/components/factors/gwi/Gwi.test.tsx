import { render } from "@testing-library/react";
import { Gwi } from "./Gwi";
import { testGwiObjects } from "../../../report-generation/utils";
import { SupportedFactors } from "../../../SupportedFactors";

const testConfig = { name: SupportedFactors.GWI, effectiveDate: new Date(), gwiObjects: testGwiObjects };
describe("GwiTable", () => {
  it("renders", () => {
    const { container } = render(<Gwi config={testConfig}></Gwi>);
    expect(container).toMatchSnapshot();
  });
});
