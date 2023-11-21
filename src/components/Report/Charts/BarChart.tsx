import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = ["Double Fabric", "Straight", "Printed"];

export const data = {
  labels,
  datasets: [
    {
      label: "Fabric Color",
      data: [23, 34, 12],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
