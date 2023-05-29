import { roundNumber } from "./roundNumber";

describe("roundNumber", () => {
  test("rounding", () => {
    expect(roundNumber(1.1)).toBe(1);
    expect(roundNumber(1.1000005)).toBe(1);
    expect(roundNumber(1.5000005)).toBe(2);
    expect(roundNumber(1.555)).toBe(2);
  });
});
