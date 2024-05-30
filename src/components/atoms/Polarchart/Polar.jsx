import React from "react";
import { PolarArea } from "react-chartjs-2";
import Chart from "chart.js/auto";

const PolarAreaChart = ({ data }) => {
  return <PolarArea data={data} />;
};

export default PolarAreaChart;
