import { atom } from "jotai";
import { globalDataKeys } from "../../globalDataKeysAtom";
import { EmployeeData } from "../../report-generation/utils";

export type KeyMap = {
  [K in (typeof globalDataKeys)[number]]: keyof EmployeeData; // keyof EmployeeData is just string but officially linking the two types here
};

//// FIND: comment out when running tests
export const employeeDataKeyMapAtom = atom<KeyMap>({ hourlyWage: "Hourly Rate", employeeId: "Employee ID", schedule: "Schedule", startDate: "Seniority Date" } as KeyMap);
// export const employeeDataKeyMapAtom = atom<KeyMap>(
//   globalDataKeys.reduce((obj: any, key: string) => {
//     obj[key] = undefined; // how is ts okay with this if KeyMap doesnt accept undefined?
//     return obj;
//   }, {}) as KeyMap
//   // example.  { hourlyWage: undefined, startDate: undefined, schedule: undefined, employeeId: undefined }
// );
