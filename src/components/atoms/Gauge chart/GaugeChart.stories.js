import React from "react";
import GaugeDesign from "./GaugeChart.jsx";

export default{
    title: "Atoms/GaugeChart",
    component: "GaugeDesign",
    argTypes:{
        width:{
            control: "select",
            options: [100,200,300,400],
        },
        height:{
            control:"select",
            options: [100,200,300,400],
        },
        value:{
            control:"number",
        },
    },
};

const Template = (args) => <GaugeDesign{...args}/>;

export const Default= Template.bind({});
Default.args ={
    width: 200,
    height: 200,
    value: 60,
}