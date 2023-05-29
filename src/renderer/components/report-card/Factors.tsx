import { Factor, SupportedFactors } from "../../SupportedFactors";
import { Gwi, GwiFactor } from "../factors/gwi/Gwi";
import { Vacation, VacationFactor } from "../factors/vacation/Vacation";

export const Factors = ({ factors }: { factors: Factor[] }) => {
  return (
    <>
      {factors.map((factor: Factor, index: number) => {
        switch (factor.name) {
          case SupportedFactors.GWI: {
            const gwiFactor = factor as GwiFactor;
            return (
              <div className="gwi mt-4" key={index}>
                <Gwi config={gwiFactor} />
              </div>
            );
          }
          case SupportedFactors.VACATION: {
            const vacationFactor = factor as VacationFactor;
            return (
              <div className="vacation mt-4" key={index}>
                <Vacation config={vacationFactor} />
              </div>
            );
          }
          default: {
            return <></>;
          }
        }
      })}
    </>
  );
};
