import { useAtom } from 'jotai';
import { SupportedFactors } from '../../SupportedFactors';
import { ReportConfig, currentReportConfigAtom } from '../ReportConfigs';
import { getFactorObjForKey } from '../utils/getFactorObjForKey';
import { editCurrentReportConfigAtom } from './ReportCard';
import { ReactComponent as Pencil } from '../../resources/pencil-svgrepo-com.svg';
import { updateConfig } from '../../indexedDB/';

export const AddFactor = () => {
  const [currReportConfig, setCurrReportConfig] = useAtom(
    currentReportConfigAtom
  );
  const [editMode, setEditMode] = useAtom(editCurrentReportConfigAtom); //useState(currReportConfig?.name.length > 0);

  const onClickEdit = () => {
    if (currReportConfig?.name.length || 0 > 0) {
      setEditMode(!editMode);
    }
  };

  return (
    <div className="mb-2">
      <button onClick={onClickEdit} className="btn btn-white col-lg-2 me-1">
        <Pencil style={{ height: 25, width: 25 }} />
      </button>
      <button
        className="btn btn-success col-lg-9"
        type="button"
        id="dropdownMenu2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {'+ Add Factor'}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
        {Object.values(SupportedFactors).map((value: string) => {
          const onClick = () => {
            const newFactor = getFactorObjForKey(value as SupportedFactors);
            if (currReportConfig) {
              const currentFactors = currReportConfig.factors;
              const updatedConfig = {
                ...currReportConfig,
                factors: [newFactor, ...currentFactors],
              } as ReportConfig;
              setCurrReportConfig(updatedConfig);
              updateConfig(currReportConfig.id, {
                factors: [newFactor, ...currReportConfig.factors],
              });
            }
          };
          return (
            <div key={value}>
              <li>
                <button
                  onClick={onClick}
                  className="dropdown-item text-capitalize"
                  type="button"
                >
                  {value}
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
