import { calculateWagesForGwiWeek } from "./calculateWagesForGwiWeek";

describe("calculateWagesForGwiWeek", () => {
  xtest("a full work week", () => {
    const currStart = new Date("5/8/2023");
    const currEnd = new Date("5/12/2023");
    const daysToWorkPerWeek = 5;
    const ratePreGwi = 20;
    const ratePostGwi = 30;
    const hoursPerDay = 10;
    const gwiDayOfWeek = 0; // sunday
    const holidays: Date[] = [];
    expect(calculateWagesForGwiWeek({ currStart, currEnd, ratePreGwi, ratePostGwi, gwiDayOfWeek, daysToWorkPerWeek, holidays, hoursPerDay })).toEqual(1500);
  });

  test("a 4 day work week", () => {
    const currStart = new Date("5/8/2023");
    const currEnd = new Date("5/11/2023");
    const daysToWorkPerWeek = 5;
    const ratePreGwi = 20;
    const ratePostGwi = 30;
    const hoursPerDay = 10;
    const gwiDayOfWeek = 2; // sunday
    const holidays: Date[] = [];
    expect(calculateWagesForGwiWeek({ currStart, currEnd, ratePreGwi, ratePostGwi, gwiDayOfWeek, daysToWorkPerWeek, holidays, hoursPerDay })).toEqual(1200);
  });
});
