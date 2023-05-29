export const getUpdatedUsedDataKeys = ({ selectedKey, previouslySelectedKey, usedDataKeys }: { selectedKey: string; previouslySelectedKey: string; usedDataKeys: string[] }) => {
  let updatedUsedDataKeys = [selectedKey];
  if (previouslySelectedKey) {
    updatedUsedDataKeys = [...updatedUsedDataKeys, ...usedDataKeys.filter((key: string) => key !== previouslySelectedKey)];
  } else {
    updatedUsedDataKeys = [...updatedUsedDataKeys, ...usedDataKeys];
  }
  return updatedUsedDataKeys;
};
