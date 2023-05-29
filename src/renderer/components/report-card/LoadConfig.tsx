import { ReportConfig, allReportConfigsAtom, currentReportConfigAtom } from "../ReportConfigs";

import { useAtom } from "jotai";

export const LOAD_FROM_CONFIG = "Load from Config";

export const LoadConfig = () => {
  const [currReportConfig, setCurrReportConfig] = useAtom(currentReportConfigAtom);
  const [allReportConfigs] = useAtom(allReportConfigsAtom);

  return (
    <>
      <button className="offset-lg-9 btn btn-warning dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
        {LOAD_FROM_CONFIG}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
        {Object.values(allReportConfigs).map((config: ReportConfig) => {
          if (config.id === currReportConfig?.id) {
            return null;
          }
          const onClick = () => {
            if (currReportConfig) {
              setCurrReportConfig({ ...config, id: currReportConfig.id, name: currReportConfig.name });
            }
          };
          return (
            <div key={config.id}>
              <li>
                <button onClick={onClick} className="dropdown-item text-capitalize" type="button">
                  {config.name}
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};
