import Card from "../components/Dashboard/Card";
import { LineChart } from "../components/Dashboard/Chart/LineChart";
import Banner from "../components/Dashboard/Banner";
import { DoughnutChart } from "../components/Dashboard/Chart/DoughnutChart";

export default function Dashboard() {
  return (
    <div>
      <div className="page-title">Dashboard</div>

      <div className="flex gap-6">
        <div className="w-2/3">
          <div className=" flex   flex-wrap ">
            <Card title="Total Rolls (Till Date)" className="bg-red-50 mr-6 hover:bg-red-100" />
            <Card title="Total Rolls (Today)" className="bg-blue-50 mr-6 hover:bg-blue-100" />
            <Card title="Card3 " className="bg-green-50 hover:bg-green-100" />
          </div>
          <div className="mt-6 rounded border bg-white px-6 py-3">
            <LineChart />
          </div>
        </div>
        <div className="w-1/3">
          <Banner title="Card" />

          <div className="mt-6 rounded border bg-white">
            <DoughnutChart />
          </div>
        </div>
      </div>
    </div>
  );
}
