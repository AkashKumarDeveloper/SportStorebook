import React from 'react';
import LogoutButton from './Logout.jsx';

export default {
  title: 'Atoms/LogoutButton',
  component: LogoutButton,
};

const Template = (args) => <LogoutButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => alert('Logout clicked'),
};
