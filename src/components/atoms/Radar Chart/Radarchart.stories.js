import React from 'react';
import RadarChart from './Radarchart.jsx';

export default {
  title: 'Atoms/RadarChart',
  component: RadarChart,
  argTypes: {
    data: { control: 'array' },
    aspectRatio: { control: 'number' }, 
  },
};

const defaultLabels = ['Arrow left', 'Mile', 'Yo yo test', 'Vertical Jump', 'Broad jump', '505 Agility', '40 Meter', 'Arrow right'];

const Template = ({ data, aspectRatio }) => (
  <RadarChart labels={defaultLabels} data={data} aspectRatio={aspectRatio} />
);

export const Default = Template.bind({});
Default.args = {
  data: [58,78,42,58,38,60,58,30],
  aspectRatio: 2,
};
