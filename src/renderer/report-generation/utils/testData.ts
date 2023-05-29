// import { KeyMap } from "../../components/DataTable/employeeDataKeyMapAtom";

import { SupportedFactors } from '../../SupportedFactors';

// employee data can be anything. these attributes were from the first example i worked with.
export type EmployeeData = {
  [key: string]: string;
  // Schedule: string;
  // "Employee ID": string;
  // ["Seniority Date"]: string;
  // ["Hourly Rate"]: string;
  // ["Badge Number"]?: string;
  // "First Name"?: string;
  // "Last Name"?: string;
  // Lead?: string;
  // "Job Code"?: string;
  // Job?: string;
  // Department?: string;
  // Manager?: string;
  // "Full/Part"?: string;
  // Shift?: string;
  // Location?: string;
  // "Dual Machine Certified?"?: string;
};
// export type EmployeeData<T extends Record<string, string | undefined>> = {
//   [K in NonNullable<T[keyof T]>]: string;
// }& {
//   [key: string]: string;
// };

export type VacationData = {
  [key: string]: string;
  rangeEnd: string;
  rangeStart: string;
};

export type GwiData = {
  percent: { [key: string]: string };
  bonus: { [key: string]: string };
};

export type obj = {
  [key: string]: any;
};

export type nestedObject = { [key: string]: { [key: string]: any } };
export type JSONValue =
  | string
  | number
  | boolean
  | { [x: string]: JSONValue }
  | Array<JSONValue>;

const EMPLOYEE_ID = 'Employee ID';
const SCHEDULE = 'Schedule';
const SENIORITY_DATE = 'Seniority Date';
const HOURLY_RATE = 'Hourly Rate';

export const testData: EmployeeData[] = [
  {
    [EMPLOYEE_ID]: '559493',
    'Badge Number': '934258',
    'First Name': 'Sebastian',
    'Last Name': 'Sampler',
    [HOURLY_RATE]: '$34.12',
    Lead: 'No',
    [SENIORITY_DATE]: '4/16/2006',
    'Job Code': 'BD2328',
    Job: 'Fabricator Sr',
    Department: 'Assembly Line A',
    Manager: 'Rippetoe, Mark',
    'Full/Part': 'Full Time',
    Shift: '1 (Day)',
    [SCHEDULE]: '5X40',
    Location: 'Birmingham',
    'Dual Machine Certified?': 'No',
  },
  {
    [EMPLOYEE_ID]: '937587',
    'Badge Number': '670559',
    'First Name': 'Todd',
    'Last Name': 'Chrisley',
    [HOURLY_RATE]: '$32.72',
    Lead: 'No',
    [SENIORITY_DATE]: '11/17/2012',
    'Job Code': 'BD2328',
    Job: 'Fabricator Sr',
    Department: 'Assembly Line A',
    Manager: 'Johnson, Dwayne',
    'Full/Part': 'Full Time',
    Shift: '3 (Grave)',
    [SCHEDULE]: '4X10',
    Location: 'Dothan',
    'Dual Machine Certified?': 'No',
  },
];

export const testKeyMap = {
  hourlyWage: HOURLY_RATE,
  startDate: SENIORITY_DATE,
  employeeId: EMPLOYEE_ID,
  schedule: SCHEDULE,
};

export const testGwiObjectsFuture = [
  { year: '2023', percent: 4.5, bonus: 5000 },
  { year: '2024', percent: 3.5, bonus: 0 },
  { year: '2025', percent: 3.0, bonus: 0 },
  { year: '2026', percent: 3.0, bonus: 0 },
  { year: '2027', percent: 2.5, bonus: 0 },
];

export const testVacationObjectsFuture = [
  { rangeStart: 0, rangeEnd: 5, hours: 120 },
  { rangeStart: 6, rangeEnd: 10, hours: 150 },
  { rangeStart: 11, rangeEnd: 19, hours: 180 },
  { rangeStart: 20, rangeEnd: 20, hours: 200 },
];
export const testGwiObjects = [
  { year: '2018', percent: 3.5, bonus: 3500 },
  { year: '2019', percent: 3.0, bonus: 0 },
  { year: '2020', percent: 3.0, bonus: 0 },
  { year: '2021', percent: 2.5, bonus: 0 },
  { year: '2022', percent: 2.5, bonus: 0 },
];
export const testVacationObjects = [
  { rangeStart: 0, rangeEnd: 5, hours: 120 },
  { rangeStart: 6, rangeEnd: 10, hours: 150 },
  { rangeStart: 11, rangeEnd: 19, hours: 180 },
  { rangeStart: 20, rangeEnd: 20, hours: 200 },
];

export const configsTestData = [
  {
    id: '1',
    name: 'myFirstReportConfig',
    factors: [
      {
        name: SupportedFactors.GWI,
        effectiveDate: new Date(),
        gwiObjects: testGwiObjects,
      },
      { name: SupportedFactors.VACATION, vacationObjects: testVacationObjects },
    ],
    creationDate: 'yesterday',
  },
  {
    id: '2',
    name: 'secondReportConfig',
    factors: [
      { name: SupportedFactors.VACATION, vacationObjects: testVacationObjects },
    ],
    creationDate: '5 days ago',
  },
];
