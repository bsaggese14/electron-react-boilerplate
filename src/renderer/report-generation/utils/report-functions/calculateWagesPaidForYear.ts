import { EmployeeData, calculateWagesForGwiWeek, calculateWagesForWeekAtRate, getFirstSundayOfYear, getNextSunday, nestedObject, newDateWithAddedDays } from "..";
import { KeyMap } from "../../../components/data-table/employeeDataKeyMapAtom";

export const calculateWagesPaidForYear = ({ employeeData, gwiDate, employeeWageData, currYear, keyMap }: { employeeData: EmployeeData; gwiDate: string; employeeWageData: nestedObject; currYear: number; keyMap: KeyMap }) => {
  // workdaysTotal = 0; // temp
  // daysWorkedThisWeekTotal = 0; // temp
  const holidays: Date[] = []; //[new Date("1/2/2022").getTime()] // TO DO: sync holidays across the board
  let total = 0;
  const schedule = employeeData[keyMap.schedule];
  const employeeId = employeeData[keyMap.employeeId];
  const startDate = new Date(employeeData[keyMap.startDate]);
  const gwiDateParsed = new Date(gwiDate);

  const thisEmployeeDayRates = employeeWageData[employeeId]["postGwiDayRatePerYear"];
  const ratePostGwi = thisEmployeeDayRates[currYear];
  const ratePreGwi = thisEmployeeDayRates[currYear - 1];

  const yearStartBoundaryDate = new Date(`1/1/${currYear}`);
  const yearEndBoundaryDate = new Date(`12/31/${currYear}`);
  let hoursPerDay = 8;
  let daysToWorkPerWeek = 5;
  if (schedule == "5X40") {
    hoursPerDay = 8;
    daysToWorkPerWeek = 5;
  } else if (schedule == "4X10") {
    hoursPerDay = 10;
    daysToWorkPerWeek = 4;
  }
  let currRate = ratePreGwi;
  const firstSundayOfYear = getFirstSundayOfYear(currYear);

  let currStart = yearStartBoundaryDate;
  let currEnd = newDateWithAddedDays(firstSundayOfYear, -1);
  if (yearStartBoundaryDate < startDate) {
    currStart = startDate;
    currEnd = getNextSunday(startDate);
  }
  let isLastWeek = false;
  while (currEnd <= yearEndBoundaryDate) {
    // calc here
    const isGwiThisWeek = gwiDateParsed >= currStart && gwiDateParsed <= currEnd;
    let wagesForWeek = 0;
    if (isGwiThisWeek) {
      currRate = ratePostGwi;
      const gwiDayOfWeek = gwiDateParsed.getDay();
      if (gwiDayOfWeek == 6 || gwiDayOfWeek == 0) {
        wagesForWeek = calculateWagesForWeekAtRate({ currStart, currEnd, daysToWorkPerWeek, currRate, hoursPerDay });
      } else {
        const wagesForGwiWeek = calculateWagesForGwiWeek({ currStart, currEnd, ratePreGwi, ratePostGwi, gwiDayOfWeek, daysToWorkPerWeek, holidays, hoursPerDay });
        wagesForWeek = wagesForGwiWeek;
      }
    } else {
      wagesForWeek = calculateWagesForWeekAtRate({ currStart, currEnd, daysToWorkPerWeek, currRate, hoursPerDay });
    }
    total += wagesForWeek;

    if (isLastWeek) {
      break;
    }
    // move window
    const nextStart = newDateWithAddedDays(currEnd, 1);
    currStart = nextStart;
    currEnd = newDateWithAddedDays(currStart, 6);
    if (currEnd >= yearEndBoundaryDate) {
      currEnd = yearEndBoundaryDate;
      isLastWeek = true;
    }
  } // go to the next week

  return total;
};
