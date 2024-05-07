import React from "react"
import CustomizedSwitches from './Viewmode.jsx'

export default {
    title:'Atoms/Viewmode',
    component: CustomizedSwitches,
};

const Template = (args)=> <CustomizedSwitches {...args}/>

export const Default =Template.bind({});
Default.args= {}