import { SupportedFactors } from "../../SupportedFactors";
import { GwiFactor } from "../factors/gwi/Gwi";
import { VacationFactor } from "../factors/vacation/Vacation";

const getEmptyVacationObject = () => {
  return { name: SupportedFactors.VACATION, vacationObjects: [] } as VacationFactor;
};

const getEmptyGwiObject = () => {
  return { name: SupportedFactors.GWI, effectiveDate: new Date(), gwiObjects: [] } as GwiFactor;
};

export const getFactorObjForKey = (value: SupportedFactors) => {
  switch (value) {
    case SupportedFactors.GWI: {
      return getEmptyGwiObject();
    }
    case SupportedFactors.VACATION: {
      return getEmptyVacationObject();
    }
    default: {
      return getEmptyGwiObject();
    }
  }
};
