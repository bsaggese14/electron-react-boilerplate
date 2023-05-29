import { render, screen } from "@testing-library/react";
import { Main } from "./Main";

describe("Main", () => {
  it("renders", () => {
    render(<Main></Main>);
    screen.getByTestId("main");
    screen.getByTestId("reportCards-current");
    // screen.getByTestId("reportCards-future");
  });
});
