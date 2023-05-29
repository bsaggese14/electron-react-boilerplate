import { Current } from "./Current";
import { DataUpload } from "./data-table/DataUpload";
// import { Future } from "./Future";
import { ReportConfigs } from "./ReportConfigs";
import { Results } from "./Results";

export const Main = () => {
  return (
    <div className="container-fluid row mt-3">
      <div className="col-lg-2">
        <ReportConfigs />
      </div>
      <div id="main" className="col-lg-10" data-testid="main">
        <DataUpload></DataUpload>
        <div className="row" data-testid="reportCards-current">
          <Current></Current>
        </div>
        {/* <div className="row" data-testid="reportCards-future"> */}
        {/* <Future></Future> */}
        {/* </div> */}
        <div className="row" data-testid="results">
          <Results />
        </div>
        <div id="results" className="row"></div>
        <div id="results2" className="row"></div>
        <div id="results3" className="row"></div>
      </div>
    </div>
  );
};
