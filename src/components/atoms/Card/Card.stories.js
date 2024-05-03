import React, { useState } from 'react';
import CustomRadioGroup from './card.jsx';

export default {
  title: 'Atoms/CustomRadioGroup',
  component: CustomRadioGroup,
};

const Template = (args) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <CustomRadioGroup {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({}); 