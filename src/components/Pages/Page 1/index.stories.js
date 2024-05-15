import React from 'react';
import MyComponent from '../Page 1/index.jsx';

export default {
  title: 'Pages/MyComponent',
  component: MyComponent,
};

const Template = (args) => <MyComponent {...args} />;

export const Default = Template.bind({});
Default.args = {};
