import { hoursePerWeekFromSchedule } from "./parseSchedule";

describe("parseSchedule", () => {
  test("rounding", () => {
    expect(hoursePerWeekFromSchedule("4X10")).toBe(40);
  });
});
