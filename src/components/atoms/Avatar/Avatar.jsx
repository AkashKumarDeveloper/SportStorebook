import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars({ avatars }) {
  return (
    <Stack direction="row" spacing={2}>
      {avatars.map((avatar, index) => (
        <Avatar key={index} alt={avatar.name} src={avatar.src} />
      ))}
    </Stack>
  );
}