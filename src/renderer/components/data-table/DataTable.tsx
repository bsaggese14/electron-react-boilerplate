import { DataTableHeader } from "./DataTableHeader";

export interface TableData {
  [key: string]: any;
}

export const DataTable = ({ tableData }: { tableData: TableData }) => {
  return (
    <table className="table table-striped" data-testid="dataTable">
      <DataTableHeader tableData={tableData} />
      <tbody>
        {tableData.map((data: { [key: string]: string }, index: number) => (
          <tr key={index}>
            {Object.values(data).map((value, index2) => (
              <td key={index2}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
