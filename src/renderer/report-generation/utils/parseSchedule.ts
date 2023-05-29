// unused
export const hoursePerWeekFromSchedule = (schedule: string) => {
  const splitSchedule = schedule.split("X");
  const daysPerWeek = parseInt(splitSchedule[0]);
  const hoursPerDay = parseInt(splitSchedule[1]);
  const hoursPerWeek = daysPerWeek * hoursPerDay;
  return hoursPerWeek;
};
