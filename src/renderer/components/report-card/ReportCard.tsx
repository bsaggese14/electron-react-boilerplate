import { ReportConfig, currentReportConfigAtom } from "../ReportConfigs";
import { GenerateReport } from "./GenerateReport";
import { Factors } from "./Factors";
import { AddFactor } from "./AddFactor";
import { atom, useAtom, useSetAtom } from "jotai";
import { LoadConfig } from "./LoadConfig";
import { updateConfigNameAtom } from "./updateConfigNameAtom";

type Props = {
  reportType: string;
  reportConfig?: ReportConfig;
};

export const editCurrentReportConfigAtom = atom(false);

export const ReportCard = ({ reportConfig, reportType }: Props) => {
  const [currReportConfig, setCurrReportConfig] = useAtom(currentReportConfigAtom);

  const updateConfigName = useSetAtom(updateConfigNameAtom);
  const [editMode] = useAtom(editCurrentReportConfigAtom);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setCurrReportConfig({ ...currReportConfig!, name: newName });
    updateConfigName({ id: currReportConfig!.id, newName: newName });
  };

  return (
    <div className={`${reportType} table-responsive shadow p-3 mb-4 rounded bg-white`} data-testid="reportTitle">
      <div className="row">
        <div className="col-lg-9">{!editMode ? <h2 className="text-capitalize">{reportConfig?.name}</h2> : <input onChange={onNameChange} type="text" className="form-control mb-2" placeholder="Config Name" value={reportConfig?.name}></input>}</div>
        <div className="col-lg-3 text-end">
          <AddFactor />
        </div>
      </div>
      {reportConfig?.factors.length! < 1 ? (
        <div className="row">
          <div className="col-9-lg"></div>
          <div className="col-3-lg text-end">
            <LoadConfig />
          </div>
        </div>
      ) : (
        <>
          <Factors factors={reportConfig?.factors || []} />
          <GenerateReport reportType={reportType}></GenerateReport>
        </>
      )}
    </div>
  );
};
