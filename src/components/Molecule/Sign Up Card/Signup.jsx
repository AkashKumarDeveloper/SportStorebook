import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DynamicInputField from '../../atoms/Input Field/Inputfield';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const InputCard = () => {
  return (
    <Card>
      <CardContent>
        <DynamicInputField
          icon={<PermIdentityOutlinedIcon />}
          placeholder="First Name"
          width="100%"
          height="40px"
          style={{ marginTop: "15px", borderRadius: "4px" }}
        />
        <DynamicInputField
          icon={<PermIdentityOutlinedIcon />}
          placeholder="Last Name"
          width="100%"
          height="40px"
          borderRadius="4px"
        />
        <DynamicInputField
          icon={<PhoneOutlinedIcon />}
          placeholder="Phone Number"
          width="100%"
          height="40px"
          borderRadius="4px"
        />
        <DynamicInputField
          icon={<AlternateEmailOutlinedIcon />}
          placeholder="Email"
          width="100%"
          height="40px"
          borderRadius="4px"
        />
        <DynamicInputField
          icon={<LockOutlinedIcon />}
          placeholder="Password"
          width="100%"
          height="40px"
          borderRadius="4px"
        />
      </CardContent>
    </Card>
  );
};

export default InputCard;
