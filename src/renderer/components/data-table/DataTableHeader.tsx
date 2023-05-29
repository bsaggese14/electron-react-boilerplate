import { atom, useAtom, useAtomValue } from "jotai";
import { TableData } from "./DataTable";
import { globalDataKeysAtom } from "../../globalDataKeysAtom";
import { employeeDataKeyMapAtom } from "./employeeDataKeyMapAtom";
import { getUpdatedKeyMap } from "./getUpdatedKeyMap";
import { getUpdatedUsedDataKeys } from "./getUpdatedUsedDataKeys";

export const KEY_SELECT = "keySelect";

export const usedDataKeysAtom = atom<string[]>([]);

export const DataTableHeader = ({ tableData }: { tableData: TableData }) => {
  const [keyMap, setKeyMap] = useAtom(employeeDataKeyMapAtom);
  const [usedDataKeys, setUsedDataKeys] = useAtom(usedDataKeysAtom);
  const globalKeys = useAtomValue(globalDataKeysAtom);

  const updateOnKeySelect = ({ event, tableDataKey }: { event: React.FormEvent<HTMLSelectElement>; tableDataKey: string }) => {
    const element = event.target as HTMLSelectElement;
    const selectedKey = element.value;
    const previouslySelectedKey = element.getAttribute("data-previous-value") as string;

    setKeyMap(getUpdatedKeyMap({ selectedKey, previouslySelectedKey, tableDataKey, keyMap }));
    setUsedDataKeys(getUpdatedUsedDataKeys({ selectedKey, previouslySelectedKey, usedDataKeys }));

    element.setAttribute("data-previous-value", selectedKey);
  };

  return (
    <thead>
      <tr>
        {Object.keys(tableData[0]).map((tableDataKey) => {
          const onChange = (event: React.FormEvent<HTMLSelectElement>) => {
            updateOnKeySelect({ event, tableDataKey });
          };
          return (
            <th key={tableDataKey}>
              {tableDataKey}
              <br />
              <select onChange={onChange} data-previous-value="" data-testid={KEY_SELECT}>
                <option value="">------------</option>
                {globalKeys.map((value, index) => {
                  const currentFactorIsMappedToThisSelect = keyMap?.[value] === tableDataKey; // kept optional check on keyMap and usedFactors due to testing
                  if (!usedDataKeys?.includes(value) || currentFactorIsMappedToThisSelect) {
                    return (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    );
                  }
                  return null;
                })}
              </select>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
