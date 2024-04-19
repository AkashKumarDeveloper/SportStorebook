import React from 'react';
import SliderSizes from './Slider';
import { ArgTypes } from '@storybook/blocks';

export default {
  title: 'Atoms/Slider',
  component: SliderSizes,
  argTypes:{
    color:{control:'color'}
  },
};

export const GreenSlider = () => <SliderSizes />;