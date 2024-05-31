import React from "react";
import { PolarArea } from "react-chartjs-2";
import Chart from "chart.js/auto";

const PolarAreaChart = ({ data }) => {
  return (
    <PolarArea
      data={{
        labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
        datasets: [
          {
            label: "My Dataset",
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      }}
    />
  );
};

export default PolarAreaChart;
