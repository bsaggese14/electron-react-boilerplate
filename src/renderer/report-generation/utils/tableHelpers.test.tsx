import { render } from "@testing-library/react";
import { getVacationTableData, gwiInputTableToJson } from "./tableHelpers";
import $ from "jquery";
import { ReportCard } from "../../components/report-card/ReportCard";
import { configsTestData } from "./testData";

describe("tableHelpers", () => {
  test("getVacationTableData", () => {
    render(<ReportCard reportConfig={configsTestData[0]} reportType="current"></ReportCard>);
    expect(getVacationTableData("current")).toEqual([
      { Hours: "120", "Years of Service": "0-5", rangeEnd: "5", rangeStart: "0" },
      { Hours: "150", "Years of Service": "6-10", rangeEnd: "10", rangeStart: "6" },
      { Hours: "180", "Years of Service": "11-19", rangeEnd: "19", rangeStart: "11" },
      { Hours: "200", "Years of Service": "20-20", rangeEnd: "20", rangeStart: "20" },
    ]);
  });

  test("gwiInputTableToJson", () => {
    render(<ReportCard reportConfig={configsTestData[0]} reportType="current"></ReportCard>);
    expect(gwiInputTableToJson($(".current .gwiTable"))).toEqual({ bonus: { "2018": "3500", "2019": "0", "2020": "0", "2021": "0", "2022": "0" }, percent: { "2018": "3.5", "2019": "3", "2020": "3", "2021": "2.5", "2022": "2.5" } });
  });
});
