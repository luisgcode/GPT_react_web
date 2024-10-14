import React from "react";
import "./Graphlinear.css";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
  Ticks,
} from "chart.js";

import { lineChartData } from "./GRAPH_DATA";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graphlinear = () => {
  const options = {
    scales: {
      x: {
        ticks: {
          color: "#39ddf3",
          font: {
            weight: "bold",
          },
        },
      },
      y: {
        ticks: {
          color: "#ff4820",
          font: {
            weight: "bold",
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
  };
  const data = {};
  return (
    <div className="graph-center">
      <div className="graph-container section__margin">
        <Line className="lineGraph" options={options} data={lineChartData} />
      </div>
    </div>
  );
};

export default Graphlinear;
