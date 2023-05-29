export const calculateProductiveHoursThisYear = ({ vacationHoursThisYear, holidays, schedule }: { vacationHoursThisYear: number; holidays: Date[]; schedule: string }) => {
  const possibleHoursForYear = 2080; //can change this in future
  // total hours - holiday hours - vacation hours
  let hoursPerDay = 0;
  if (schedule === "5X40") {
    hoursPerDay = 8;
  } else if (schedule === "4X10") {
    hoursPerDay = 10;
  }
  const holidayHours = holidays.length * hoursPerDay;
  const productiveHours = possibleHoursForYear - vacationHoursThisYear - holidayHours;
  return productiveHours;
};
