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
          color: "white",
          font: {
            weight: "bold",
          },
        },
      },
      y: {
        ticks: {
          color: "#ffc788",
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
    <div className="graph-section section__margin">
      <div className="graph-hero">
        <h1 className="gradient__text">
          The future is Now and you Just need to Realize it. Step into Future
          today & Make it happen.
        </h1>
        <p>Request Early Access To Get Started.</p>
      </div>
      <div className="graph-container  ">
        <Line className="lineGraph" options={options} data={lineChartData} />
      </div>
    </div>
  );
};

export default Graphlinear;
