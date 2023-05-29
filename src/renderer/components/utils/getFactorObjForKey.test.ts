import { SupportedFactors } from "../../SupportedFactors";
import { getFactorObjForKey } from "./getFactorObjForKey";

describe("getFactorObjForKey", () => {
  test("gwi factor", () => {
    expect(Object.keys(getFactorObjForKey(SupportedFactors.GWI))).toEqual(["name", "effectiveDate", "gwiObjects"]);
  });
  test("vacation factor", () => {
    expect(Object.keys(getFactorObjForKey(SupportedFactors.VACATION))).toEqual(["name", "vacationObjects"]);
  });
});
