import { KeyMap } from "./employeeDataKeyMapAtom";

export const getUpdatedKeyMap = ({ selectedKey, previouslySelectedKey, tableDataKey, keyMap }: { selectedKey: string; previouslySelectedKey: string; tableDataKey: string; keyMap: KeyMap }) => {
  let updatedKeyMap = { ...keyMap };
  if (selectedKey) {
    updatedKeyMap = { ...updatedKeyMap, [selectedKey]: tableDataKey };
  }
  if (previouslySelectedKey) {
    updatedKeyMap = { ...updatedKeyMap, [previouslySelectedKey]: undefined };
  }
  return updatedKeyMap;
};
