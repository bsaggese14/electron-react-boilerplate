import { calculateProductiveHoursThisYear } from "./calculateProductiveHoursThisYear";

describe("calculateProductiveHoursThisYear", () => {
  it("takes vacation hours into account", () => {
    expect(calculateProductiveHoursThisYear({ vacationHoursThisYear: 100, holidays: [], schedule: "4X10" })).toEqual(1980);
  });

  it("takes holiday hours into account", () => {
    const date = new Date("1/1/2023");
    expect(calculateProductiveHoursThisYear({ vacationHoursThisYear: 100, holidays: [date], schedule: "4X10" })).toEqual(1970);
  });

  it("takes schedule into account", () => {
    const date = new Date("1/1/2023");
    expect(calculateProductiveHoursThisYear({ vacationHoursThisYear: 100, holidays: [date], schedule: "5X40" })).toEqual(1972);
  });
});
