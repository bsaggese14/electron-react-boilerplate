import { calculatePostGwiWagesForEmployee } from "./calculatePostGwiWagesForEmployee";

describe("calculatePostGwiWagesForEmployee", () => {
  test("works", () => {
    const gwiTable = {
      percent: {
        "2023": "4.5",
        "2024": "3.5",
        "2025": "3",
        "2026": "3",
        "2027": "2.5",
      },
      bonus: {
        "2023": "5000",
        "2024": "0",
        "2025": "0",
        "2026": "0",
        "2027": "0",
      },
    };

    const hourlyRate = "$20";
    expect(calculatePostGwiWagesForEmployee({ hourlyRate, gwiTable })).toEqual({ "2022": 19.14, "2023": 20, "2024": 20.9, "2025": 21.63, "2026": 22.28, "2027": 22.95 });
  });
});
