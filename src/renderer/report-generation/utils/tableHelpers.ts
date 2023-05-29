import $ from "jquery";
import { GwiData, VacationData } from "./testData";

type nestedObject = { [key: string]: { [key: string]: any } };

// unused
const tableToJson = (table: JQuery<Element>) => {
  let tableData: nestedObject = {};
  const columnHeaders = table.find("th[scope='col']");
  const rowHeaders = table.find("th[scope='row']");
  const tableRows = table.find("tbody tr");

  tableRows.each((index: number) => {
    const cells = $(tableRows[index]).find("td");
    const rowHeader: string = rowHeaders[index + 1].innerHTML;
    tableData[rowHeader] = {};
    cells.each((cellIndex: number) => {
      tableData[rowHeader][$(columnHeaders[cellIndex]).html()] = $(cells[cellIndex]).html();
    });
  });
  return tableData;
};

// HTMLElement
const vacationInputTableToJson = (table: JQuery<Element>) => {
  let tableData: VacationData[] = [];
  const columnHeaders = table.find("th[scope='col']");
  const tableRows = table.find("tbody tr");

  tableRows.each((rowIndex: number) => {
    const inputs = $(tableRows[rowIndex]).find("input");

    const inputValues = inputs.map((inputIndex: any, input: { value: any }) => {
      return input.value;
    });
    const colHeaderYears = columnHeaders[0].innerHTML;
    const colHeaderHours = columnHeaders[1].innerHTML;
    const rangeStart = inputValues[0];
    const rangeEnd = inputValues[1];
    const serviceRange = `${inputValues[0]}-${inputValues[1]}`;
    const hours = inputValues[2];
    const vacationObj = { [colHeaderYears]: serviceRange, [colHeaderHours]: hours, rangeStart: rangeStart, rangeEnd: rangeEnd };
    tableData.push(vacationObj);
  });
  // console.log("tableData: ", tableData);
  return tableData;
};

// HTMLElement
export const gwiInputTableToJson = (table: JQuery<HTMLElement>) => {
  let tableData: GwiData = { percent: {}, bonus: {} };
  const columnHeaders = table.find("th[scope='col']");
  const rowHeaders = table.find("th[scope='row']");
  const tableRows = table.find("tbody tr");

  tableRows.each((rowIndex: number) => {
    const inputs = $(tableRows[rowIndex]).find("input");
    const rowHeader = rowHeaders[rowIndex + 1].innerHTML.toLocaleLowerCase() === "bonus" ? "bonus" : "percent";

    tableData[rowHeader] = {};
    inputs.each((inputIndex: number) => {
      const value = inputs[inputIndex].value;
      tableData[rowHeader][$(columnHeaders[inputIndex]).html()] = value;
    });
  });
  return tableData;
};

export const getVacationTableData = (type: string) => {
  //let vacationTable = document.getElementsByClassName("vacationTable");
  const selector = `.${type} .vacationTable`;
  const vacationTable = $(selector);
  return vacationInputTableToJson(vacationTable);
};
