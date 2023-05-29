import $ from "jquery";

// Month and day of week (starting on Sunday) are zero-indexed
// https://codegolf.stackexchange.com/questions/178227/get-the-date-of-the-nth-day-of-week-in-a-given-year-and-month
export const getDateFromData = ({ year, month, dayOfWeek, nthDayOfMonth }: { year: number; month: number; dayOfWeek: number; nthDayOfMonth: number }) => {
  return ((dayOfWeek + 6 - new Date(year, month, 7).getDay()) % 7) + nthDayOfMonth * 7 - 6;
};

const getFirstSundayOfYearDayOfMonth = (year: number) => {
  return getDateFromData({ year, month: 0, dayOfWeek: 0, nthDayOfMonth: 1 });
};

export const getFirstSundayOfYear = (year: number) => {
  return new Date(`01/${getFirstSundayOfYearDayOfMonth(year)}/${year}`);
};

export const workingDaysBetweenDates = ({ startDate, endDate, checkForHolidays = true }: { startDate: Date; endDate: Date; checkForHolidays?: boolean }) => {
  const holidays: Date[] = []; // [new Date("12/25/2023")] // TO DO: sync holidays across the board

  let count = 0;
  const curDate = new Date(startDate.getTime());
  while (curDate <= endDate) {
    const dayOfWeek = curDate.getUTCDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) count++;
    curDate.setDate(curDate.getDate() + 1);
  }
  if (checkForHolidays) {
    holidays.forEach((day: Date) => {
      if (day >= startDate && day <= endDate) {
        /* If it is not saturday (6) or sunday (0), substract it */
        if (day.getDay() % 6 != 0) {
          count--;
        }
      }
    });
  }
  return count;
};

export const newDateWithAddedDays = (date: Date, daysToAdd: number) => {
  var newDate = new Date(date);
  newDate.setDate(date.getDate() + daysToAdd);
  return newDate;
};

export const getNextSunday = (startDate: Date) => {
  const weekdayOfStartDate = startDate.getDay();
  const daysToAdd = 7 - weekdayOfStartDate;
  const firstSundayAfterStart = newDateWithAddedDays(startDate, daysToAdd);
  return firstSundayAfterStart;
};

// TO DO: support future
export const getGwiDateFromDom = (currYear: number, reportType: any) => {
  const gwiNth = $(`.${reportType} .gwiNth`).val() as number;
  const gwiDayOfWeek = $(`.${reportType} .gwiDayOfWeek`).val() as number;
  const gwiMonth = $(`.${reportType} .gwiMonth`).val() as number;

  const gwiDateNumber = getDateFromData({ year: currYear, month: gwiMonth - 1, dayOfWeek: gwiDayOfWeek - 1, nthDayOfMonth: gwiNth });
  return `${gwiMonth}/${gwiDateNumber}/${currYear}`;
};

// unsused
const workingDaysBetweenDatesForSchedule = (startDate: any, endDate: any, workdaysPerWeek: number, checkForHolidays = true) => {
  return workingDaysBetweenDates({ startDate, endDate, checkForHolidays }) - 52 * (5 - workdaysPerWeek);
};
