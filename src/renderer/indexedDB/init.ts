// import { openDB, DBSchema } from 'idb';
import { ReportConfig } from '../components/ReportConfigs';

import Dexie, { Table } from 'dexie';

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  configs!: Table<ReportConfig>;

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      configs: '++id', // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();

export const useInitMyDb = async () => {
  //   await initMyDb(configsTestData[0]);
  //   const test = await getAllConfigs();
  //   const id = await db.configs.add(configsTestData[0]);
  const data = await db.configs.toArray();

  console.log(data);
};

export const persistConfig = async (config: ReportConfig) => {
  await db.configs.add(config);
};

export const getConfigs = async () => {
  return await db.configs.toArray();
};

export const getConfig = async (id: string) => {
  return await db.configs.get(id);
};

export const updateConfig = async (
  id: string,
  changes: Partial<ReportConfig>
) => {
  await db.configs.update(id, changes);
};
