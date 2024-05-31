import * as React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const GaugeDesign = ({ width, height, value }) => {
  return (
    <Gauge
      width={width}
      height={height}
      value={value}
      cornerRadius="50%"
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
          fill: '#00A701', // Text color
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: '#00A701', // Progress bar color
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: '#ECF5ED',
        },
      })}
      valueFormatter={(value) => `${value}%`} // Format the value as percentage
      valueTextProps={{children:`${value}%`}}
    />
  );
};

export default GaugeDesign;
