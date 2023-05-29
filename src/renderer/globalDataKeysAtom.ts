import { atom } from "jotai";

export const globalDataKeys = ["hourlyWage", "startDate", "schedule", "employeeId"] as const;

export const globalDataKeysAtom = atom(globalDataKeys);
