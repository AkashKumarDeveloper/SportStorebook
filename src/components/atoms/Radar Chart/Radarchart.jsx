import React from 'react';
import { Radar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const RadarChart = ({ data, labels, aspectRatio }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Performance',
        data: data,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: 'green',
        borderWidth: 1,
        pointBackgroundColor: 'green',
        pointBorderColor: 'green',
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
            color: 'rgba(0, 0, 0, 0.1)',
          },
      },
    },
  };

  return <Radar data={chartData} options={options} />;
};

export default RadarChart;
