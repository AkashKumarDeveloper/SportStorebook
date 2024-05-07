import React from 'react';
import SwipeableTextMobileStepper from './Caraousel.jsx'

export default {
    title: 'Atoms/Carousel',
    component: SwipeableTextMobileStepper,
};

const Template = (args) => <SwipeableTextMobileStepper {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
