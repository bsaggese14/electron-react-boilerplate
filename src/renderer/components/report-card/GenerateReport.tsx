import { useAtom, useSetAtom } from "jotai";
import { employeeArrayAtom } from "../data-table/DataUpload";
import { generateReport } from "../../report-generation/utils";
import { employeeDataKeyMapAtom } from "../data-table/employeeDataKeyMapAtom";
import { resultsAtom } from "../Results";

export const GenerateReport = ({ reportType }: { reportType: string }) => {
  const [employeeArray] = useAtom(employeeArrayAtom);
  const [keyMap] = useAtom(employeeDataKeyMapAtom);
  const setResults = useSetAtom(resultsAtom);

  const onClick = () => {
    setResults(generateReport({ type: reportType, employeeDataArray: employeeArray, keyMap }));
  };

  return (
    <button onClick={onClick} id={`${reportType}GenerateReport`} data-report-type={reportType} type="button" className="btn btn-primary generateReport">
      Generate Report
    </button>
  );
};
