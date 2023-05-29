import { VacationData, calculateWagesForGwiWeek, calculateWagesForWeekAtRate, getFirstSundayOfYear, getNextSunday, getVacationJumpDates, newDateWithAddedDays } from "..";

export const calculateVacationHoursPerYear = ({ startDate, schedule, currYear, vacationTableData }: { startDate: Date; schedule: string; currYear: number; vacationTableData: VacationData[] }) => {
  const vacationChangeDays = getVacationJumpDates({ startDate, vacationTableData });
  const vacationRates = vacationChangeDays.map((dateString: any, index: number) => {
    return parseInt(vacationTableData[index]["Hours"]) / 2080;
  });
  // console.log("vacationRates", vacationRates);
  // workdaysTotal = 0; // temp
  // daysWorkedThisWeekTotal = 0; // temp
  const holidays: Date[] = []; //[new Date("1/2/2022").getTime()] // TO DO: sync holidays across the board
  let total = 0;

  const yearStartBoundaryDate = new Date(`1/1/${currYear}`);
  const yearEndBoundaryDate = new Date(`12/31/${currYear}`);
  let hoursPerDay = 8;
  let daysToWorkPerWeek = 5;
  if (schedule === "5X40") {
    hoursPerDay = 8;
    daysToWorkPerWeek = 5;
  } else if (schedule === "4X10") {
    hoursPerDay = 10;
    daysToWorkPerWeek = 4;
  }

  const firstSundayOfYear = getFirstSundayOfYear(currYear);

  let currStart = yearStartBoundaryDate;
  let currEnd = newDateWithAddedDays(firstSundayOfYear, -1);
  if (yearStartBoundaryDate < startDate) {
    currStart = startDate;
    currEnd = getNextSunday(startDate);
  }

  // current vacation accrual rate is first rate where current date is before rate boundary (when rate changes). assumes rates are sorted in order of years of service.
  const indexOfCurrRate = vacationChangeDays.indexOf(
    vacationChangeDays.find((dateString: string) => {
      const jumpDate = new Date(dateString);
      return currStart < jumpDate;
    }) ?? "notFound"
  );
  let currRate = vacationRates[indexOfCurrRate > -1 ? indexOfCurrRate : vacationRates.length - 1];
  let isLastWeek = false;
  while (currEnd <= yearEndBoundaryDate) {
    const jumpDateThisWeek = vacationChangeDays.find((day: string) => {
      const datAsDate = new Date(day);
      return datAsDate >= currStart && datAsDate <= currEnd;
    });
    let vacationHoursForWeek = 0;
    if (jumpDateThisWeek) {
      const indexOfCurrRate = vacationRates.indexOf(currRate);
      const ratePreGwi = currRate;
      const ratePostGwi = indexOfCurrRate < vacationRates.length - 1 ? vacationRates[indexOfCurrRate + 1] : currRate;
      const gwiDayOfWeek = new Date(jumpDateThisWeek).getDay();
      // may want to rename from wages and change rate names but should work for vacation accrual
      currRate = ratePostGwi;
      // console.log("currRate", currRate);
      if (gwiDayOfWeek === 6 || gwiDayOfWeek === 0) {
        vacationHoursForWeek = calculateWagesForWeekAtRate({ currStart, currEnd, daysToWorkPerWeek, currRate, hoursPerDay });
      } else {
        const hoursForJumpWeek = calculateWagesForGwiWeek({ currStart, currEnd, ratePreGwi, ratePostGwi, gwiDayOfWeek, daysToWorkPerWeek, holidays, hoursPerDay });
        vacationHoursForWeek = hoursForJumpWeek;
      }
    } else {
      // may want to rename from wages but should work for vacation accrual
      vacationHoursForWeek = calculateWagesForWeekAtRate({ currStart, currEnd, daysToWorkPerWeek, currRate, hoursPerDay });
    }
    total += vacationHoursForWeek;

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
