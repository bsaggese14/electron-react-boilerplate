import { testData, testKeyMap } from "../testData";
import { calculateWagesPaidForYear } from "./calculateWagesPaidForYear";

describe("calculateWagesPaidForYear", () => {
  test("works", () => {
    const employeeWageData = {
      [testData[0]["Employee ID"]]: {
        postGwiDayRatePerYear: {
          "2022": 31.31,
          "2023": 32.72,
          "2024": 34.19,
          "2025": 35.39,
          "2026": 36.45,
          "2027": 37.54,
        },
      },
    };
    expect(calculateWagesPaidForYear({ employeeData: testData[0], gwiDate: "4/2/2027", employeeWageData, currYear: 2027, keyMap: testKeyMap })).toEqual(77816.72);
  });
});
