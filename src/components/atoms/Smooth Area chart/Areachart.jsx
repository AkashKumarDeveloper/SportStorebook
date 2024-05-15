import * as React from "react";
import { AreaChart, areaElementClasses } from "@mui/x-charts/LineChart";

const pData = [
  [0, 65],
  [1, 45],
  [2, 15],
  [3, 18],
];
const prData = [
  [0, 25],
  [1, 12],
  [2, 5],
  [3, 35],
];
const hData = [
  [0, 32],
  [1, 28],
  [2, 25],
  [3, 55],
];
const tData = [
  [0, 23],
  [1, 20],
  [2, 22],
  [3, 55],
];
const rData = [
  [0, 38],
  [1, 35],
  [2, 28],
  [3, 24],
];
const sData = [
  [0, 20],
  [1, 23],
  [2, 24],
  [3, 40],
];
const lData = [
  [0, 34],
  [1, 30],
  [2, 28],
  [3, 29],
];
const mData = [
  [0, 20],
  [1, 20],
  [2, 10],
  [3, 8],
];

const xLabels = ["Week 1", "Week 2", "Week 3", "Week 4"];

function RangeAreaChart() {
  return (
    <AreaChart
      width={500}
      height={300}
      series={[
        {
          data: pData,
          label: "Punctuality",
          area: true,
          stack: "total",  
          showMark: false,
        },
        {
          data: prData,
          label: "Professionalism", 
          area: true,
          stack: "total",
          showMark: false,
        },
        {
          data: hData,
          label: "Helpfulness",
          area: true,
          stack: "total",
          showMark: false,
        },
        {
          data: tData,
          label: "Team Player",
          area: true,
          stack: "total",
          showMark: false,
        },
        {
          data: rData,
          label: "Resilience",
          area: true,
          stack: "total",
          showMark: false,
        },
        {
          data: sData,
          label: "Selflessness",
          area: true,
          stack: "total",
          showMark: false,
        },
        {
          data: lData,
          label: "Leadership",
          area: true,
          stack: "total",
          showMark: false,
        },
        {
          data: mData,
          label: "Motivational",
          area: true,
          stack: "total",
          showMark: false,
        },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
      sx={{
        [`& .${areaElementClasses.root}`]: {
          opacity: 0.3,
        },
      }}
    />
  );
}
export default RangeAreaChart;
