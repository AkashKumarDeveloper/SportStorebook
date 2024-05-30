import React from "react";
import { Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const RadarChart = ({ data, labels, aspectRatio }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Performance",
        data: data,
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: "green",
        borderWidth: 1,
        pointBackgroundColor: "green",
        pointBorderColor: "green",
      },
    ],
  };

  const options = {
    aspectRatio: aspectRatio,
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          beginAtZero: true,
          max: 100,
        },
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <Radar data={chartData} options={options} width="400" height="500" />
    </div>
  );
};

export default RadarChart;
