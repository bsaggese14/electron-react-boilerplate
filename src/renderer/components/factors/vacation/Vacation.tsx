import { FactorName } from "../../../SupportedFactors";
import { VacationTable } from "./VacationTable";
import { Props as VacationTableProps } from "./VacationTable";

export type VacationFactor = VacationTableProps & FactorName;

export const Vacation = ({ config }: { config: VacationFactor }) => (
  <>
    <h4>Vacation</h4>
    <VacationTable vacationObjects={config.vacationObjects}></VacationTable>
  </>
);
