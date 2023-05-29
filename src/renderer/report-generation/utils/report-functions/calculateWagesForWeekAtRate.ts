import { workingDaysBetweenDates } from "..";

// let workdaysTotal = 0; // temp
// let daysWorkedThisWeekTotal = 0; // temp
export const calculateWagesForWeekAtRate = ({ currStart, currEnd, daysToWorkPerWeek, currRate, hoursPerDay }: { currStart: Date; currEnd: Date; daysToWorkPerWeek: number; currRate: number; hoursPerDay: number }) => {
  const workdaysInWindow = workingDaysBetweenDates({ startDate: currStart, endDate: currEnd });
  // workdaysTotal += workdaysInWindow;

  const daysWorkedThisWeek = workdaysInWindow < daysToWorkPerWeek ? workdaysInWindow : daysToWorkPerWeek;
  // daysWorkedThisWeekTotal += daysWorkedThisWeek;
  const wagesForWeek = daysWorkedThisWeek * currRate * hoursPerDay;
  return wagesForWeek;
};
