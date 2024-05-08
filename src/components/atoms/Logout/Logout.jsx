import React from 'react';
import { ImSwitch } from 'react-icons/im';

const LogoutButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      <ImSwitch />
    </button>
  );
};

export default LogoutButton;
