import { useAtom } from "jotai";
import { currentReportConfigAtom } from "./ReportConfigs";
import { ReportCard } from "./report-card/ReportCard";

export const Current = () => {
  const [currReportConfig] = useAtom(currentReportConfigAtom);

  return <ReportCard reportConfig={currReportConfig} reportType="current" />;
};
