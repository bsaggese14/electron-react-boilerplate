import { Provider } from "jotai";
import { useHydrateAtoms } from "jotai/utils";

const HydrateAtoms = ({ initialValues, children }: { initialValues: any; children: any }) => {
  useHydrateAtoms(initialValues);
  return children;
};

export const TestProvider = ({ initialValues, children }: { initialValues: any; children: any }) => {
  return (
    <Provider>
      <HydrateAtoms initialValues={initialValues}>{children}</HydrateAtoms>
    </Provider>
  );
};
