import React from "react";
import RangeAreaChart from "./Areachart";

export default {
  title: "Atoms/RangeAreaChart",
  component: RangeAreaChart,
};

const Template = (args) => <RangeAreaChart {...args} />;

export const Default = Template.bind({});
Default.args = {};
