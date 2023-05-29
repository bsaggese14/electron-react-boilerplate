import { calculateVacationHoursPerYear } from "./calculateVacationHoursPerYear";

describe("calculateVacationHoursPerYear", () => {
  it("takes vacation hours into account", () => {
    const startDate = new Date("1/1/2023");
    const schedule = "4X10";
    const currYear = 2023;
    const vacationTableData = [
      {
        "Years of Service": "0-3",
        Hours: "120",
        rangeStart: "0",
        rangeEnd: "3",
      },
      {
        "Years of Service": "4-8",
        Hours: "160",
        rangeStart: "4",
        rangeEnd: "8",
      },
      {
        "Years of Service": "9-14",
        Hours: "200",
        rangeStart: "9",
        rangeEnd: "14",
      },
      {
        "Years of Service": "15-15",
        Hours: "240",
        rangeStart: "15",
        rangeEnd: "15",
      },
    ];
    expect(calculateVacationHoursPerYear({ startDate, schedule, currYear, vacationTableData })).toEqual(119.99999999999996);
  });
});
