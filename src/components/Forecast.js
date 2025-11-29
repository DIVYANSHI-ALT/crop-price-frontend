import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

function Forecast() {

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Crop Price Forecast (₹/Quintal)",
        data: [1200, 1350, 1500, 1600, 1700, 1850],
        borderWidth: 3,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: { beginAtZero: false }
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-3">📈 Crop Price Forecast</h2>
      <p className="text-muted">Predicted prices based on real-time market data & machine learning.</p>

      <div className="p-4 shadow rounded bg-white">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default Forecast;
