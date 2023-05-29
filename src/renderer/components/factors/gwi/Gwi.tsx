import type { FactorName } from "../../../SupportedFactors";
import type { Props as GwiTableProps } from "../../../components/factors/gwi/GwiTable";

import { DateSelector } from "../../factors/gwi/DateSelector";
import { GwiTable } from "../../factors/gwi/GwiTable";

export type GwiFactor = GwiTableProps &
  FactorName & {
    effectiveDate: Date;
  };

// TO DO use effective date instead of hard coded date
export const Gwi = ({ config }: { config: GwiFactor }) => (
  <>
    <h4>General Wage Increase (GWI)</h4>
    <DateSelector defaultMonth={4} defaultDayOfWeek={6}></DateSelector>
    <GwiTable gwiObjects={config.gwiObjects}></GwiTable>
  </>
);
