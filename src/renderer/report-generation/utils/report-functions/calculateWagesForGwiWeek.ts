import { newDateWithAddedDays, workingDaysBetweenDates } from "..";

export const calculateWagesForGwiWeek = ({ currStart, currEnd, ratePreGwi, ratePostGwi, gwiDayOfWeek, daysToWorkPerWeek, holidays, hoursPerDay }: { currStart: Date; currEnd: Date; ratePreGwi: number; ratePostGwi: number; gwiDayOfWeek: number; daysToWorkPerWeek: number; holidays: Date[]; hoursPerDay: number }) => {
  const weekDaysIncludingHolidays = workingDaysBetweenDates({ startDate: currStart, endDate: currEnd }); // 3
  let ratesForWeek: { [key: string]: number } = {};
  for (let i = 0; i < weekDaysIncludingHolidays; i++) {
    ratesForWeek[newDateWithAddedDays(currStart, i + 1).getTime()] = ratePreGwi;
  }
  const iterations = 5 - (gwiDayOfWeek - 1); // 1
  for (var i = 0; i < iterations; i++) {
    // might be able to combine with loop above
    ratesForWeek[newDateWithAddedDays(currStart, i + gwiDayOfWeek - (5 - weekDaysIncludingHolidays)).getTime()] = ratePostGwi;
  }
  let daysWorkedThisWeek = 0;
  let wagesForGwiWeek = 0;
  for (var i = 0; i < Object.keys(ratesForWeek).length; i++) {
    if (daysWorkedThisWeek >= daysToWorkPerWeek) {
      break;
    }
    if (holidays.includes(newDateWithAddedDays(currStart, i + 1))) {
      continue;
    }
    wagesForGwiWeek += ratesForWeek[newDateWithAddedDays(currStart, i + 1).getTime()] * hoursPerDay;
    daysWorkedThisWeek++;
    // daysWorkedThisWeekTotal++; // temp
  }
  return wagesForGwiWeek;
};
