import { fireEvent, render, screen } from "@testing-library/react";
import { useAtom, useSetAtom } from "jotai";
import { allReportConfigsAtom } from "../ReportConfigs";
import { TestProvider } from "../utils/TestProvider";
import { updateConfigNameAtom } from "./updateConfigNameAtom";

describe("updateConfigNameAtom", () => {
  const NEW_CONFIG = "newConfig";
  const OLD_CONFIG = "oldConfig";
  const TEST_BUTTON = "testButton";
  const ID = "1";

  const Comp = () => {
    const [allConfigs] = useAtom(allReportConfigsAtom);
    const setConfigNameAtom = useSetAtom(updateConfigNameAtom);
    const onClick = () => setConfigNameAtom({ id: ID, newName: NEW_CONFIG });
    return (
      <>
        {allConfigs[0].name}
        <button onClick={onClick} data-testid={TEST_BUTTON}></button>
      </>
    );
  };
  it("should update the name of the config with the specified ID", () => {
    render(
      <TestProvider initialValues={[[allReportConfigsAtom, [{ id: ID, name: OLD_CONFIG }]]]}>
        <Comp></Comp>
      </TestProvider>
    );
    screen.getByText(OLD_CONFIG);
    expect(screen.queryByText(NEW_CONFIG)).toBe(null);

    fireEvent.click(screen.getByTestId(TEST_BUTTON));
    screen.getByText(NEW_CONFIG);
    expect(screen.queryByText(OLD_CONFIG)).toBe(null);
  });

  it("should not update the name if id not found", () => {
    render(
      <TestProvider initialValues={[[allReportConfigsAtom, [{ id: "2", name: OLD_CONFIG }]]]}>
        <Comp></Comp>
      </TestProvider>
    );
    screen.getByText(OLD_CONFIG);
    expect(screen.queryByText(NEW_CONFIG)).toBe(null);

    fireEvent.click(screen.getByTestId(TEST_BUTTON));
    screen.getByText(OLD_CONFIG);
    expect(screen.queryByText(NEW_CONFIG)).toBe(null);
  });
});
