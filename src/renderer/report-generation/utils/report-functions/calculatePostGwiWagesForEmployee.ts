import { GwiData, parseCurrency, roundNumber } from "..";

export const calculatePostGwiWagesForEmployee = ({ hourlyRate, gwiTable }: { hourlyRate: string; gwiTable: GwiData }) => {
  const gwiYears = Object.keys(gwiTable.percent);
  const gwiPercents = gwiTable.percent;
  const hourlyRateThisYear = parseCurrency(hourlyRate); // use currency library in the future
  const thisYear = new Date().getFullYear();

  let employeeWagesPostGwi = { [thisYear]: hourlyRateThisYear };
  const numYearsOnContract = gwiYears.length;
  const lastYearOnContract = parseInt(gwiYears[numYearsOnContract - 1]);
  const firstYearOnContract = parseInt(gwiYears[0]);

  let previousYear = thisYear - 1;
  let nextYear = thisYear + 1;
  let currYear = thisYear;
  let currWage = hourlyRateThisYear;
  let currPercent = parseFloat(gwiPercents[currYear]);

  while (previousYear >= firstYearOnContract - 1) {
    currPercent = parseFloat(gwiPercents[currYear]) / 100 ?? 0;
    const previousYearWage = currPercent > 0 ? currWage / (1 + currPercent) : currWage;
    const roundedWage = roundNumber(previousYearWage, 2);
    employeeWagesPostGwi[previousYear] = roundedWage;
    currYear = previousYear;
    currWage = roundedWage;
    previousYear--;
  }
  currYear = thisYear;
  currWage = employeeWagesPostGwi[currYear];
  while (nextYear <= lastYearOnContract) {
    currPercent = parseFloat(gwiPercents[currYear]) / 100 ?? 0;
    const roundedWage = currPercent > 0 ? roundNumber(currWage * (1 + currPercent), 2) : currWage;
    employeeWagesPostGwi[nextYear] = roundedWage;
    currYear = nextYear;
    currWage = roundedWage;
    nextYear++;
  }

  return employeeWagesPostGwi;
};
