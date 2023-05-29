import { DateTime as luxonDT } from "luxon";
import { VacationData } from "..";

export const getVacationJumpDates = ({ startDate, vacationTableData }: { startDate: Date; vacationTableData: VacationData[] }) => {
  const luxonStartDate = luxonDT.fromJSDate(startDate);

  const endDatesJumpBracket = vacationTableData.map((vacayObj: { rangeEnd: any }) => {
    return luxonStartDate.plus({ years: vacayObj.rangeEnd }).toLocaleString();
  });

  return endDatesJumpBracket;
};
