import { getDateFromData, getFirstSundayOfYear, workingDaysBetweenDates, newDateWithAddedDays, getNextSunday } from "./dateHelpers";

describe("dateHelpers", () => {
  test("getDateFromData", () => {
    expect(getDateFromData({ year: 2023, month: 0, dayOfWeek: 2, nthDayOfMonth: 1 })).toEqual(3);
  });

  test("getFirstSundayOfYear", () => {
    expect(getFirstSundayOfYear(2023).getTime()).toEqual(1672560000000);
  });

  test("workingDaysBetweenDates", () => {
    const startDate = new Date("1/1/2023");
    const endDate = new Date("12/31/2023");
    expect(workingDaysBetweenDates({ startDate, endDate })).toEqual(260);
  });
  test("newDateWithAddedDays", () => {
    const startDate = new Date("1/1/2023");
    const endDate = new Date("1/2/2023");

    expect(newDateWithAddedDays(startDate, 1)).toEqual(endDate);
  });

  test("getNextSunday", () => {
    const startDate = new Date("5/1/2023");
    const endDate = new Date("5/7/2023");

    expect(getNextSunday(startDate)).toEqual(endDate);
  });
});
