// import { Typography } from "@mui/material";
// import ReportCard from "../components/Report/ReportCard";
// import DateField from "../core-ui/DateField";

import { Typography } from "@mui/material";
import { BarChart } from "../components/Report/Charts/BarChart";
import { LineChart } from "../components/Report/Charts/LineChart";
import WShrinkageDoughnutChart from "../components/Report/Charts/WShrinkageDoughnutChart";
import DateField from "../core-ui/DateField";

export default function Report() {
  return (
    <div>
      <div className="page-title">Report</div>

      <div className="flex gap-8 mx-6">
        <div className="flex gap-3 items-center">
          <Typography>From</Typography>
          <DateField />
        </div>
        <div className="flex gap-3 items-center">
          <Typography>To</Typography>
          <DateField />
        </div>
      </div>
      {/* <div className="flex gap-3 mt-3">
        <ReportCard title="Report 1" />
        <ReportCard title="Report 2" />
        <ReportCard title="Report 3" />
      </div> */}

      <div className="flex flex-wrap">
        <div className="w-full md:w-2/3 p-3">
          <div className="bg-white p-3 rounded   border-2 h-80 flex justify-center">
            <LineChart />
          </div>
        </div>
        <div className="w-full md:w-1/3 p-3">
          <div className="bg-white p-3 rounded border-2 h-80 flex justify-center">
            <WShrinkageDoughnutChart title="WShrinkage" />
          </div>
        </div>
        <div className="w-full md:w-2/3 p-3">
          <div className="bg-white p-3 rounded  border-2 h-80 flex justify-center">
            <BarChart />
          </div>
        </div>
        <div className="w-full md:w-1/3 p-3">
          <div className="bg-white p-3 rounded border-2 h-80 flex justify-center">
            <WShrinkageDoughnutChart title="RShrinkage" />
          </div>
        </div>
      </div>
    </div>
  );
}
