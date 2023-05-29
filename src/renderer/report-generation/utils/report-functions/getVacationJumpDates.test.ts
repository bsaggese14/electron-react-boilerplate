import { getVacationJumpDates } from "./getVacationJumpDates";

describe("getVacationJumpDates", () => {
  test("works", () => {
    const startDate = new Date("1/1/2023");
    const vacationTableData = [
      { Hours: "120", "Years of Service": "0-5", rangeEnd: "5", rangeStart: "0" },
      { Hours: "150", "Years of Service": "6-10", rangeEnd: "10", rangeStart: "6" },
      { Hours: "180", "Years of Service": "11-19", rangeEnd: "19", rangeStart: "11" },
      { Hours: "200", "Years of Service": "20-20", rangeEnd: "20", rangeStart: "20" },
    ];
    expect(getVacationJumpDates({ startDate, vacationTableData })).toEqual(["1/1/2028", "1/1/2033", "1/1/2042", "1/1/2043"]);
  });
});
