import React from 'react';
import DynamicInputField from './Inputfield.jsx';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default {
  title: 'Atoms/DynamicInputField',
  component: DynamicInputField,
  argTypes: {
    icon: { control: false }, 
    type: { control: 'select', options:['text','number']},
    placeholder: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    borderRadius: { control: 'text' },
  },
};

const Template = (args) => <DynamicInputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: null,
  placeholder: 'Enter your text',
  width: '200px',
  height: '40px',
  borderRadius: '4px',
};

export const FirstName = Template.bind({});
FirstName.args = {
  icon: <PermIdentityOutlinedIcon />, 
  placeholder: 'First Name',
  width: '200px',
  height: '40px',
  borderRadius: '4px',
};

export const LastName = Template.bind({});
LastName.args = {
  icon: <PermIdentityOutlinedIcon />, 
  placeholder: 'Last Name',
  width: '200px',
  height: '40px',
  borderRadius: '4px',
};

export const PhoneNumber = Template.bind({});
PhoneNumber.args = {
  icon: <PhoneOutlinedIcon />, 
  placeholder: 'Phone Number',
  width: '200px',
  height: '40px',
  borderRadius: '4px',
};

export const Email = Template.bind({});
Email.args = {
  icon: <AlternateEmailOutlinedIcon />, 
  placeholder: 'Email',
  width: '200px',
  height: '40px',
  borderRadius: '4px',
};

export const Password = Template.bind({});
Password.args = {
  icon: <LockOutlinedIcon />,
  placeholder: 'Password',
  width: '200px',
  height: '40px',
  borderRadius: '4px',
};
