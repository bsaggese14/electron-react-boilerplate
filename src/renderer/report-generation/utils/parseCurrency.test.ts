import { parseCurrency } from "./parseCurrency";

describe("parseCurrency", () => {
  test("rounding", () => {
    expect(parseCurrency("$34.10")).toBe(34.1);
  });
});
