import React from 'react';
import GreenEyeButton from './Greeneye.jsx';
import { action } from '@storybook/addon-actions'; 

export default {
  title: 'Atoms/GreenEyeButton',
  component: GreenEyeButton,
} 

const Template = (args) => <GreenEyeButton {...args} onClick={action('clicked')}/>;

export const Default = Template.bind({});
Default.args = {
  onClick: () => console.log('Button clicked!'),
};
