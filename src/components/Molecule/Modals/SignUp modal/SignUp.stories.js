// src/stories/SignupModal.stories.js
import React, { useState } from 'react';
import SignupModal from './SignUp'; // Adjust the import path as necessary

export default {
  title: 'Molecule/Modals/SignupModal',
  component: SignupModal,
};

const Template = (args) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);
  const handleContinue = () => {
    setOpen(false);
    console.log('Continue clicked');
  };

  return <SignupModal {...args} open={open} handleClose={handleClose} handleContinue={handleContinue} />;
};

export const Default = Template.bind({});
Default.args = {};
