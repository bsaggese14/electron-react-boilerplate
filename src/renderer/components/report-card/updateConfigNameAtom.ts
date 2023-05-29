import { atom } from 'jotai';
import { allReportConfigsAtom } from '../ReportConfigs';
import { updateConfig } from 'renderer/indexedDB';

export const updateConfigNameAtom = atom(
  null,
  async (get, set, { id, newName }: { id: string; newName: string }) => {
    const originalArray = get(allReportConfigsAtom);
    const newArray = originalArray.map((obj) => {
      if (obj.id === id) {
        return { ...obj, name: newName };
      }
      return obj;
    });
    set(allReportConfigsAtom, newArray);
    await updateConfig(id, { name: newName });
  }
);
