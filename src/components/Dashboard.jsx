import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { getCategoryReport } from "../services/api";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function Dashboard() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    getCategoryReport().then((res) => {
      const labels = res.data.map((x) => x.category);
      const counts = res.data.map((x) => x.count);

      setChartData({
        labels,
        datasets: [
          {
            label: "Items per Category",
            data: counts,
            backgroundColor: "rgba(5, 16, 132, 0.5)",
          },
        ],
      });
    });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      {chartData ? (
        <Bar data={chartData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}