import * as React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

export default function GaugeDesign({ width, height, value }) {
  return (
    <Gauge
      width={width}
      height={height}
      value={value}
      cornerRadius="50%"
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: "#52b202",
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: "#ECF5ED",
        },
      })}
    />
  );
}
  