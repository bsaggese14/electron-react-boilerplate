import { atom, useAtom } from "jotai";
import { JSONValue } from "../report-generation/utils";

export const resultsAtom = atom<{ [key: string]: JSONValue } | undefined>(undefined);

export const Results = () => {
  const [results] = useAtom(resultsAtom);
  return (
    <div className="shadow p-3 mb-4 rounded bg-white">
      <h2>Results</h2>
      {results &&
        Object.keys(results).map((resultKey: string) => {
          const value = JSON.stringify(results[resultKey]);
          return <div>{`${resultKey}: ${value}`}:</div>;
        })}
    </div>
  );
};
