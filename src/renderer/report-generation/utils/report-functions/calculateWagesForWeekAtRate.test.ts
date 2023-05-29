import { calculateWagesForWeekAtRate } from "./calculateWagesForWeekAtRate";

describe("calculateWagesForWeekAtRate", () => {
  test("a full work week", () => {
    const currStart = new Date("5/8/2023");
    const currEnd = new Date("5/12/2023");
    const daysToWorkPerWeek = 5;
    const currRate = 20;
    const hoursPerDay = 10;
    expect(calculateWagesForWeekAtRate({ currStart, currEnd, daysToWorkPerWeek, currRate, hoursPerDay })).toEqual(1000);
  });

  test("a 4 day work week", () => {
    const currStart = new Date("5/8/2023");
    const currEnd = new Date("5/11/2023");
    const daysToWorkPerWeek = 5;
    const currRate = 20;
    const hoursPerDay = 10;
    expect(calculateWagesForWeekAtRate({ currStart, currEnd, daysToWorkPerWeek, currRate, hoursPerDay })).toEqual(800);
  });
});
