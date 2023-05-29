import $ from "jquery";
import { obj, nestedObject, EmployeeData, calculateVacationHoursPerYear, roundNumber, gwiInputTableToJson, calculateWagesPaidForYear, getGwiDateFromDom, calculateProductiveHoursThisYear, calculatePostGwiWagesForEmployee, GwiData, getVacationTableData } from "./utils";
import { KeyMap } from "../components/data-table/employeeDataKeyMapAtom";

export const generateReport = ({ type, employeeDataArray, keyMap }: { type: string; employeeDataArray: EmployeeData[]; keyMap: KeyMap }) => {
  let gwiTable: GwiData = { percent: {}, bonus: {} };
  const vacationTableData = getVacationTableData(type);

  if (type === "current") {
    gwiTable = gwiInputTableToJson($(".current .gwiTable"));
  }
  if (type === "future") {
    gwiTable = gwiInputTableToJson($(".future .gwiTable"));
  }
  const gwiYears = Object.keys(gwiTable.percent);
  const gwiBonuses = gwiTable.bonus;

  let employeeWageData: nestedObject = {};
  let totalLaborCostPerYear: obj = {};
  let totalVacationHoursGrantedPerYear: obj = {};
  let totalProductiveHoursPerYear: obj = {};
  for (var employee in employeeDataArray) {
    const employeeData = employeeDataArray[employee];
    const employeeId = employeeData[keyMap.employeeId];
    const schedule = employeeData.Schedule;
    const startDate = new Date(employeeData[keyMap.startDate]);

    employeeWageData[employeeId] = {};
    const hourlyRate = employeeData[keyMap.hourlyWage] ?? "";
    employeeWageData[employeeId]["postGwiDayRatePerYear"] = calculatePostGwiWagesForEmployee({ hourlyRate, gwiTable });

    // calc pay per year
    let wagesTotalPerYear: obj = {};
    let wagesAndBonusPaidPerYear: obj = {};
    let vacationHoursPerYear: obj = {};
    let productiveHoursPerYear: obj = {};
    for (var i = 0; i < gwiYears.length; i++) {
      // if (gwiYears[i] != 2026) {
      //   continue;
      // }
      const currYear = parseInt(gwiYears[i]);

      const vacationHoursThisYear = roundNumber(calculateVacationHoursPerYear({ startDate, schedule, currYear, vacationTableData }), 2);
      vacationHoursPerYear[currYear] = vacationHoursThisYear;

      const holidays: Date[] = [];
      const productiveHoursThisYear = roundNumber(calculateProductiveHoursThisYear({ vacationHoursThisYear, holidays, schedule }), 2);
      productiveHoursPerYear[currYear] = productiveHoursThisYear;

      const gwiDate = getGwiDateFromDom(currYear, type);
      const totalPayment = calculateWagesPaidForYear({ employeeData, gwiDate, employeeWageData, currYear, keyMap });
      const roundedTotal = roundNumber(totalPayment, 2);
      wagesTotalPerYear[currYear] = roundedTotal;

      const bonusThisYear = gwiBonuses[currYear];
      wagesAndBonusPaidPerYear[currYear] = roundedTotal + bonusThisYear;

      totalLaborCostPerYear[currYear] = totalLaborCostPerYear[currYear] ? roundNumber(totalLaborCostPerYear[currYear] + wagesTotalPerYear[currYear], 2) : wagesTotalPerYear[currYear];
      totalVacationHoursGrantedPerYear[currYear] = totalVacationHoursGrantedPerYear[currYear] ? roundNumber(totalVacationHoursGrantedPerYear[currYear] + vacationHoursThisYear, 2) : vacationHoursThisYear;
      totalProductiveHoursPerYear[currYear] = totalProductiveHoursPerYear[currYear] ? roundNumber(totalProductiveHoursPerYear[currYear] + productiveHoursThisYear, 2) : productiveHoursThisYear;
    }

    employeeWageData[employeeId]["totalHourlyWagesPaid"] = wagesTotalPerYear;
    employeeWageData[employeeId]["totalWagesAndBonus"] = wagesAndBonusPaidPerYear;
    employeeWageData[employeeId]["vacationHoursPerYear"] = vacationHoursPerYear;
    employeeWageData[employeeId]["productiveHoursPerYear"] = productiveHoursPerYear;
  }
  const results = { totalLaborCostPerYear: totalLaborCostPerYear, totalVacationHoursGrantedPerYear: totalVacationHoursGrantedPerYear, totalProductiveHoursPerYear: totalProductiveHoursPerYear };
  return results;
};
