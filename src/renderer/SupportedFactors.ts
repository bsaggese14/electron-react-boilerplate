import { GwiFactor } from "./components/factors/gwi/Gwi";
import { VacationFactor } from "./components/factors/vacation/Vacation";

export enum SupportedFactors {
  GWI = "gwi",
  VACATION = "vacation",
}

export type FactorName = {
  name: SupportedFactors;
};

export type Factor = GwiFactor | VacationFactor;
