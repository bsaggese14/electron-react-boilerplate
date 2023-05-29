import { ReportConfig } from 'shared-local';

// unsused at the moment. not meant to be a DB
const Store = require('electron-store');

// const schema = {
//   foo: {
//     type: 'number',
//     maximum: 100,
//     minimum: 1,
//     default: 50,
//   },
//   bar: {
//     type: 'string',
//     format: 'url',
//   },
// };

// const store = new Store({ schema });
const store = new Store();

export const saveConfig = (config: ReportConfig) => {
  console.log('TEST', config.id);
};

export const testSend = () => {
  const testBefore = store.get('configs');
  console.log('before: ', !!testBefore, (testBefore as number) ?? 0 + 1);
  let numToAdd = testBefore ? testBefore : 0;
  store.set('test141', numToAdd + 3); // putting boolean logic in the second param of the set doesnt work for some reason but is fine when pulled out like numToAdd
  const testAfter = store.get('test141');
  console.log('after: ', testAfter, '');
};

export const nothingHEre = '';
