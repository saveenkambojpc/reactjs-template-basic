import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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

    title: {
      display: true,
      text: "",
    },
  },
};

const labels = [1, 2, 3, 4, 5, 6, 7];

export const data = {
  labels,
  datasets: [
    {
      label: "LShrinkage",
      data: [0.1, 1.2, 0.3, 1.4, 0.5, 0.6, 1.7, 0.8],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "WShrinkage",
      data: [0.2, 0.3, 1.2, 0, 0.9, 0.7, 0.8, 0.9],
      borderColor: "rgb(188, 99, 255)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export function LineChart() {
  // return <></>;
  return <Line options={options} data={data} />;
}
