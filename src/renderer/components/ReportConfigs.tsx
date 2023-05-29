import { atom, useAtom, useSetAtom } from 'jotai';
import { configsTestData } from '../report-generation/utils';
import { Factor } from '../SupportedFactors';
import { generateRandomString } from '../utils/generateRandomString';
import { editCurrentReportConfigAtom } from './report-card/ReportCard';
import { db, getConfigs, persistConfig } from '../indexedDB';
import { useEffect } from 'react';
import { useHydrateAtoms } from 'jotai/utils';
import { useLiveQuery } from 'dexie-react-hooks';

export type ReportConfig = {
  id: string;
  name: string;
  factors: Factor[];
  creationDate: string;
};

const getEmptyReportConfig = () => {
  return {
    id: generateRandomString(),
    name: '',
    factors: [],
    creationDate: 'just now',
  };
};

// export const allReportConfigsAtom = atom<ReportConfig[]>(configsTestData);

// export const currentReportConfigAtom = atom<ReportConfig>(configsTestData[0]);

// FIND: comment out when running tests
export const allReportConfigsAtom = atom<ReportConfig[]>([]);
export const currentReportConfigAtom = atom<ReportConfig | undefined>(
  undefined
);

export const ReportConfigs = () => {
  const configsFromDexie = useLiveQuery(() => db.configs.toArray());
  // db.configs.clear();

  const [currReportConfig, setCurrReportConfig] = useAtom(
    currentReportConfigAtom
  );
  const setEditMode = useSetAtom(editCurrentReportConfigAtom);

  const clickWithConfigId = ({ configId }: { configId: string }) => {
    const clickedConfig = configsFromDexie?.find(
      (config) => config.id === configId
    );
    if (clickedConfig) {
      setCurrReportConfig(clickedConfig);
      setEditMode(clickedConfig.name.length < 1);
    }
  };

  const configElements = configsFromDexie?.map(
    (config: ReportConfig, index: number) => {
      const isActive = currReportConfig?.id === config.id;
      const onClick = () => {
        clickWithConfigId({ configId: config.id });
      };
      return (
        <button
          key={index}
          data-config-id={config.id}
          onClick={onClick}
          className={`list-group-item list-group-item-action text-break ${
            isActive ? 'active' : ''
          }`}
          id="list-home-list"
          data-bs-toggle="list"
          role="tab"
          aria-controls="list-home"
        >
          {config.name} <br></br> created {config.creationDate}
        </button>
      );
    }
  );

  const addConfig = () => {
    const newConfig = getEmptyReportConfig();
    setCurrReportConfig(newConfig);
    setEditMode(true);
    persistConfig(newConfig);
  };

  return (
    <div className="text-center mb-3">
      <h4>Report Configs</h4>
      <button
        onClick={addConfig}
        className="btn btn-success col-lg-11 mb-2"
        type="button"
      >
        {'+ Add Config'}
      </button>
      <div
        className="list-group shadow"
        id="list-tab"
        role="tablist"
        data-testid="configListGroup"
      >
        {configElements}
      </div>
    </div>
  );
};
