/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Card, CardContent, Typography , Box } from '@mui/material';
import coach  from '../../../Assets/Images/staff-2.png'
import ButtonComponent from '../Button/Button';

const CoachDetails = () => {
  return (
    <Card sx={{ width: 271, height: 207 , marginTop:2 }}>
      <CardContent>
        <Box display="flex" alignItems="center">
          <img
            src={coach}
            alt="Coach Image"
            style={{ width: 77, height: 77, marginRight: 16 }}
          />
          <Box>
            <Typography variant="h6">Adam Smith</Typography>
            <Typography variant="body2">adamsmith@gmail.com</Typography>
            <Typography variant="body2">+01-1236565656</Typography>
            <ButtonComponent size='small' label='View Detail' color='#EA781C' labelColor='white' />
          </Box>
        </Box>
        <Typography variant="body2" style={{ marginTop: 16 }}>
          Academy Associated With:
          Eastern Acaedmy Loss Angeles
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CoachDetails;
