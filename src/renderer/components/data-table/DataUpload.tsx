import { DataTable } from "./DataTable";
import Papa from "papaparse";
import { EmployeeData, testData } from "../../report-generation/utils";
import { atom, useAtom } from "jotai";

// FIND: comment out when running tests
export const employeeArrayAtom = atom(testData);
// export const employeeArrayAtom = atom<EmployeeData[]>([]);

export const DataUpload = () => {
  const [employeeArray, setSetEmployeeArray] = useAtom(employeeArrayAtom);
  const loadData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      Papa.parse(file, {
        complete: function (results: { data: EmployeeData[] }) {
          setSetEmployeeArray(results.data);
        },
        header: true,
      });
    }
  };
  const dataTableOrPlaceholder = Object.keys(employeeArray).length > 0 ? <DataTable tableData={employeeArray}></DataTable> : <div className="d-flex justify-content-center text-center h2">No data to display</div>;
  return (
    <div className="row">
      <div id="data" className="shadow p-3 mb-4 rounded overflow-scroll bg-white">
        <div className="input-group mb-3">
          <label className="input-group-text">Upload</label>
          <input type="file" className="form-control" id="csvFile" onChange={loadData} data-testid="fileUpload" />
        </div>
        {dataTableOrPlaceholder}
      </div>
    </div>
  );
};
