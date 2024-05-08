import React from 'react';
import InputCard from './Signup.jsx';

export default {
  title: 'Molecule/InputCard',
  component: InputCard,
}

const Template = (args) => <InputCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
