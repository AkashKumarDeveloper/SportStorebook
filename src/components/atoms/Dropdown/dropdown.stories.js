import React from 'react';
import DynamicDropdown from './dropdown.jsx';

export default {
  title: 'Atoms/Dropdown',
  component: DynamicDropdown,
};

const Template = (args) => <DynamicDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  onSelect: (value) => console.log('Selected:', value),
  placeholder: 'Select', 
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  onSelect: (value) => console.log('Selected:', value),
  placeholder: 'Select',
  initialValue: 'Option 1',
};
