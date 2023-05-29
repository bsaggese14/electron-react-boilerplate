import { configsTestData } from "../report-generation/utils";
import { ReportCard } from "./report-card/ReportCard";

// deprecated
export const Future = () => {
  return <ReportCard reportConfig={configsTestData[1]} reportType="future" />;
};
