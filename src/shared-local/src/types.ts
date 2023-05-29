export enum Channels {
  SAVE_CONFIG = 'SAVE_CONFIG',
}

export type ReportConfig = {
  id: string;
  name: string;
  factors: Factor[];
  creationDate: string;
};

export enum SupportedFactors {
  GWI = 'gwi',
  VACATION = 'vacation',
}

export type FactorName = {
  name: SupportedFactors;
};

export type Factor = GwiFactor | VacationFactor;

export type GwiFactor = GwiTableProps &
  FactorName & {
    effectiveDate: Date;
  };

export type VacationFactor = VacationTableProps & FactorName;

type VacationObject = {
  rangeStart: number;
  rangeEnd: number;
  hours: number;
};

export type VacationTableProps = {
  vacationObjects: VacationObject[];
};

type GwiObject = {
  year: string;
  percent: number;
  bonus: number;
};

export type GwiTableProps = {
  gwiObjects: GwiObject[];
};
