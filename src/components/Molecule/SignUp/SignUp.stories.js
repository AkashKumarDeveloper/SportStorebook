import React from 'react';
import Signup from './SignUp.jsx';

export default {
  title: 'Molecule/Signup',
  component: Signup,
}

const Template = (args) => <Signup {...args} />;

export const Default = Template.bind({});
Default.args = {};
